import React, { useState } from 'react';
import calculator from '../logic/calculate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    const calc = calculator.calculate(state, buttonName);
    setState(calc);
  };

  const showResult = state => {
    const { total, next, operation } = state;
    const result = `${total}${operation}${next}`.replace(/null/g, '');
    return result === '' ? undefined : result;
  };

  return (
    <main id="calc">

      <div className="calc-info">
        <aside className="math-magic">
          <h2>Let’s do some math!</h2>
        </aside>
        <aside className="calc">
          <Display result={showResult(state)} />
          <ButtonPanel clickHandler={handleClick} />
        </aside>

      </div>
    </main>
  );
};

export default Calculator;
