import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="cScreen">
          0
        </div>
        <div className="buttons">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
