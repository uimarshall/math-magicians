import operator from './operate';

const calculator = (() => {
  const calculate = (calculatorData, buttonName) => {
    let { total, next, operation } = calculatorData;
    const operators = ['+', '-', '÷', 'X', '%'];
    if (buttonName === 'AC' || total === '∞') {
      total = null;
      next = null;
      operation = null;
    } else if (buttonName === '=') {
      if (total && next && operation) {
        total = operator.operate(total, next, operation);
        next = null;
        operation = null;
      }
    } else if (operators.includes(buttonName)) {
      if (buttonName === '%') {
        if (!next) {
          next = total;
        }
        operation = buttonName;
        total = operator.operate(null, next, operation);
        next = null;
        operation = null;
      } else if (total && next && operation) {
        total = operator.operate(total, next, operation);
        operation = buttonName;
        next = null;
      } else if (next && !operation) {
        total = next;
        operation = buttonName;
        next = null;
      } else {
        operation = buttonName;
      }
    } else if (buttonName === '+/-') {
      if (next) {
        next = operator.operate(next, '-1', 'X');
      } else if (total) {
        total = operator.operate(total, '-1', 'X');
      }
    } else if (next === null && operation === null && total) {
      next = buttonName;
      total = null;
    } else if (next) {
      if (buttonName !== '.' || (buttonName === '.' && next.indexOf(buttonName) < 0)) {
        next = next.concat(buttonName);
      }
    } else {
      next = buttonName;
    }
    return {
      total,
      next,
      operation,
    };
  };
  return { calculate };
})();

export default calculator;
