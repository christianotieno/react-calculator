import Operate from './operate';

const Calculate = (data, buttonName) => {
  const checkNumber = testString => /\d/.test(testString);
  const checkOperator = testString => {
    if (testString.length > 1) {
      return false;
    }
    return /\+|-|x|÷|%/.test(testString);
  };

  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (checkNumber(buttonName)) {
    return {
      next: (data.next || '')
      + buttonName,
    };
  }

  if (!data.next) {
    if ((buttonName === '-')
    && (data.operation !== null
    && data.operation.endsWith('n'))) {
      return {
        next: null,
        operation: null,
      };
    }

    if (checkOperator(buttonName)
    || (buttonName === '.')
    || (buttonName === '%')) {
      return {
        next: `0${buttonName}`,
        operation: buttonName,
      };
    }
  }

  if (checkOperator(buttonName)) {
    if (!!data.operation
      && !checkOperator(
        data.next.charAt(data.next.length - 1),
      )) {
      const op = data.operation.charAt(
        data.operation.length - 1,
      );
      const nums = data.next.split(
        /\+|-|x|÷|%/,
      );

      if ((
        data.operation.startsWith('n'))
        || data.next.startsWith('-')) {
        const result = Operate(
          `-${nums[1]}`, nums[2], op,
        );
        return {
          total: result,
          next: result + buttonName,
          operation: buttonName,
        };
      }
      const result = Operate(
        nums[0], nums[1], op,
      );
      return {
        total: result,
        next: result + buttonName,
        operation: buttonName,
      };
    }

    if (!checkOperator(
      data.next.charAt(data.next.length - 1),
    )) {
      return {
        next: data.next + buttonName,
        operation: (data.operation || '') + buttonName,
      };
    }


    if ((buttonName === '.')) {
      if (checkOperator(
        data.next.charAt(data.next.length - 1),
      )
        || data.next.endsWith('.')) {
        return {};
      }
      return {
        next: data.next + buttonName,
      };
    }

    if (buttonName === '+/-') {
      if ((!!data.operation
        && data.operation.startsWith('n'))
        && data.next.length < 28) {
        return {
          next: data.next.slice(1),
          operation: data.operation.slice(1),
        };
      }
    }

    if (!!data.next
      && data.next.startsWith('-')) {
      return {
        total: data.total.slice(1),
        next: data.next.slice(1),
      };
    }

    if (!data.next) {
      return {
        next: `-${0}`,
        operation: 'n',
      };
    }

    return {
      next: `-${data.next}`,
      operation: `n${data.operation || ''}`,
    };
  }

  if (buttonName === '=') {
    if (checkOperator(
      data.next.charAt(data.next.length - 1),
    )) {
      return {};
    }
    const op = data.operation.charAt(
      data.operation.length - 1,
    );
    const nums = data.next.split(
      /\+|-|x|÷|%/,
    );

    if (data.operation.startsWith('n')
    || data.next.startsWith('-')) {
      const result = Operate(
        `-${nums[1]}`, nums[2], op,
      );
      return {
        total: result,
        next: result,
        operation: null,
      };
    }
    const result = Operate(nums[0], nums[1], op);
    return {
      total: result,
      next: result,
      operation: null,
    };
  }
  return {};
};
export default Calculate;
