import operator from "./operate";


const calculator = (() => {
  const calculate = (calculatorData, btnName) => {
    let { total, next, operation } = calculatorData;
    const operatorSymbols = ['+', '-', '÷', 'x', '%'];
    if (btnName === 'AC' || total === '∞') {
      total = null;
      next = null;
      operation = null;
    } else if (btnName === '=') {
      if (total && next && operation) {
        total = operator.operate(total, next, operation);
        next = null;
        operation = null;
      }
    } else if (operatorSymbols.includes(btnName)) {
      if (btnName === '%') {
        if (!next) {
          next = total;
        }
        operation = btnName;
        total = operator.operate(null, next, operation);
        next = null;
        operation = null;
      } else if (total && next && operation) {
        total = operator.operate(total, next, operation);
        operation = btnName;
        next = null;
      } else if (next && !operation) {
        total = next;
        operation = btnName;
        next = null;
      } else {
        operation = btnName;
      }
    } else if (btnName === '+/-') {
      if (next) {
        next = operator.operate(next, '-1', 'x');
      } else if (total) {
        total = operator.operate(total, '-1', 'x');
      }
    } else if (next === null && operation === null && total) {
      next = btnName;
      total = null;
    } else if (next) {
      if (btnName !== '.' || (btnName === '.' && next.indexOf(btnName) < 0)) {
        next = next.concat(btnName);
      }
    } else {
      next = btnName;
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