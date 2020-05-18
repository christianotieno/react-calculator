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
      next: (data.next || '') + buttonName,
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

  const syntaxCheck = message => {
    if (message.includes('Syntax Error')) {
      return {
        total: message,
        next: null,
        operation: null,
      };
    }
    return '';
  };


  if (checkOperator(buttonName)) {
    if (checkOperator(
      data.next.charAt(data.next.length - 1),
    )) {
      return {};
    }
    let len;
    if (data.operation) {
      len = data.operation.length;
    }

    if (len > 0) {
      const nums = data.next.split(/\+|-|x|÷|%/);
      const operand = data.operation.charAt(0);
      if (data.next.startsWith('-')) {
        const result = Operate(`-${nums[1]}`, nums[2], operand);
        if (syntaxCheck(result)) {
          return syntaxCheck(result);
        }
        return {
          total: result,
          next: result + buttonName,
          operation: buttonName,
        };
      }
      const result = Operate(nums[0], nums[1], operand);
      if (syntaxCheck(result)) {
        return syntaxCheck(result);
      }
      return {
        total: result,
        next: result + buttonName,
        operation: buttonName,
      };
    }

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
    if (!!data.next
      && data.next.startsWith('-')
      && !!data.total
      && data.total.startsWith('-')) {
      return {
        total: data.total.slice(1),
        next: data.next.slice(1),
      };
    }

    if (!!data.next && data.next.startsWith('-')) {
      return {
        next: data.next.slice(1),
      };
    }

    if (!data.next) {
      return {
        next: `-${0}`,
      };
    }

    return {
      next: `-${data.next}`,
    };
  }

  if (buttonName === '=') {
    if (checkOperator(
      data.next.charAt(data.next.length - 1),
    )) {
      return {};
    }

    const operand = data.operation.charAt(0);
    const numerical = data.next.split(/\+|-|x|÷|%/);

    if (data.next.startsWith('-')) {
      const result = Operate(`-${numerical[1]}`, numerical[2], operand);
      if (syntaxCheck(result)) {
        return syntaxCheck(result);
      }
      return {
        total: result,
        next: result,
        operation: null,
      };
    }
    const result = Operate(numerical[0], numerical[1], operand);
    if (syntaxCheck(result)) {
      return syntaxCheck(result);
    }
    return {
      total: result,
      next: result,
      operation: null,
    };
  }
  return {};
};

export default Calculate;
