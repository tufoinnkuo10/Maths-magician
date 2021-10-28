import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  whenClicked = (e) => {
    const buttonName = e.target.textContent;
    const newObj = calculate(this.state, buttonName);
    this.setState(newObj);
  };

  render() {
    const buttonNames = ['AC', '+/-', '%', '\u00F7', '7', '8', '9', '\u00D7',
      '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    

export default Calculator;
