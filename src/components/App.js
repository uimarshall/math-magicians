/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import '../App.css';
import calculator from '../logic/calculate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

// function App() {
//   return (
//     <>
//       <Display />
//       <ButtonPanel />
//     </>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    const calc = calculator.calculate(this.state, buttonName);
    this.setState(calc);
  }

  calcResult() {
    const { total, next, operation } = this.state;
    const result = `${total}${operation}${next}`.replace(/null/g, '');
    return result === '' ? undefined : result;
  }

  render() {
    return (
      <>
        <Display result={this.result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
