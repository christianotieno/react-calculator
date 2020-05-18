// import syntaxCheck from './calculate';

const Big = require('big.js');

const Operate = (numberOne, numberTwo, operation) => {
  try {
    const num1 = Big(numberOne);
    const num2 = Big(numberTwo);
    let result;
    if (operation === '+') {
      result = num1.plus(num2);
    } if (operation === '-') {
      result = num1.minus(num2);
    } if (operation === 'x') {
      result = num1.times(num2);
    } if (operation === '÷') {
      result = num1.div(num2);
    } if (operation === '+/-') {
      result = num1.times(-1);
    } if (operation === '%') {
      if (num2 !== '0') {
        result = num1.times(num2.div(100));
      }
      result = num1.div(100);
    }
    const len = result.c.length;
    if (len > 20) num1.c.length = 20;
    return result.toString();
  } catch (e) {
    return 'syntax error:divide';
  }
};

export default Operate;
