import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [object, setObject] = useState({});

  const ifClicked = (e) => {
    const buttonName = e.target.textContent;
    const newObj = calculate(object, buttonName);
    setObject(newObj);
  };

  const buttonNames = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x',
    '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const getClassName = (button) => {
    if (button === '÷' || button === 'x' || button === '-' || button === '+' || button === '=') {
      return 'orange-button';
    }

    if (button === '0') {
      return 'big-space';
    }
    return '';
  };

  const { next, total, operation } = object;
  let result = '';
  if (total) {
    result = `${total} ${operation || ''} ${next || ''}`;
  } else if (next) {
    result = next;
  }
  return (
    <div className="calc-container">
      <h1>Lets do some Maths</h1>
      <div>
        <div className="calc-screen">
          {result}
        </div>
        <div className="buttons">
          {buttonNames.map((button) => (<button key={button} className={getClassName(button)} onClick={ifClicked} type="button">{button}</button>))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
