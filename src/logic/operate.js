import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);

  if (operation === '+') {
    return num1.plus(num2).toString();
  } if (operation === '-') {
    return num1.minus(num2).toString();
  } if (operation === 'x') {
    return num1.times(num2).toString();
  } if (operation === '÷') {
    if (num1 === 0 || num2 === 0) {
      return 0;
    }
    return num1.div(num2).toString();
  } if (operation === '+/-') {
    return num1.times(-1).toString();
  } if (operation === '%') {
    if (num2 !== '0') {
      return num1.times(num2.div(100)).toString();
    }
    return num1.div(100).toString();
  }
  throw Error('Error');
};

export default Operate;
