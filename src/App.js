import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === 'clear') {
      setDisplay('');
    } else if (value === 'backspace') {
      setDisplay(display.slice(0, -1));
    } else if (value === 'equal') {
      try {
        // eslint-disable-next-line no-eval
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="button-row">
        <button className="button clear" onClick={() => handleClick('clear')}>C</button>
        <button className="button backspace" onClick={() => handleClick('backspace')}>&#x21E6;</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleClick('7')}>7</button>
        <button className="button" onClick={() => handleClick('8')}>8</button>
        <button className="button" onClick={() => handleClick('9')}>9</button>
        <button className="button operation" onClick={() => handleClick('+')}>+</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleClick('4')}>4</button>
        <button className="button" onClick={() => handleClick('5')}>5</button>
        <button className="button" onClick={() => handleClick('6')}>6</button>
        <button className="button operation" onClick={() => handleClick('-')}>-</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleClick('1')}>1</button>
        <button className="button" onClick={() => handleClick('2')}>2</button>
        <button className="button" onClick={() => handleClick('3')}>3</button>
        <button className="button operation" onClick={() => handleClick('*')}>*</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleClick('0')}>0</button>
        <button className="button" onClick={() => handleClick('.')}>.</button>
        <button className="button operation" onClick={() => handleClick('/')}>/</button>
        <button className="button equal" onClick={() => handleClick('equal')}>=</button>
      </div>
    </div>
  );
}

export default Calculator;