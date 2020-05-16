
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
};

export default Calculate;
