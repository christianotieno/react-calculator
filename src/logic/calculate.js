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
};
export default Calculate;
