import Big from 'big.js';

const Operate = (operand, num1, num2) => {
  const big1 = Big(num1);
  const big2 = Big(num2);

  if (operand === '+') {
    return big1.plus(big2).toString();
  } if (operand === '-') {
    return big1.minus(big2).toString();
  } if (operand === 'x') {
    return big1.times(big2).toString();
  } if (operand === '÷') {
    if (big1 === 0 || big2 === 0) {
      return 0;
    }
    return big1.div(big2).toString();
  } if (operand === '+/-') {
    return big1.times(-1).toString();
  } if (operand === '%') {
    if (num2 !== '0') {
      return big1.times(big2.div(100)).toString();
    }
    return big1.div(100).toString();
  }
  throw Error('Error');
};

export default Operate;
