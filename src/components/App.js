/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../App.css';
import calculator from '../logic/calculate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       total: null,
//       next: null,
//       operation: null,
//     };
//   }

//   handleClick = buttonName => {
//     const calc = calculator.calculate(this.state, buttonName);
//     this.setState(calc);
//   }

//   render() {
//     const showResult = state => {
//       const { total, next, operation } = state;
//       const result = `${total}${operation}${next}`.replace(/null/g, '');
//       return result === '' ? undefined : result;
//     };
//     return (
//       <div className="App">

//         <Display result={showResult(this.state)} />
//         <ButtonPanel clickHandler={this.handleClick} />
//       </div>
//     );
//   }
// }

// export default App;

const App = () => {
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
    <div>

      <Display result={showResult(state)} />
      <ButtonPanel clickHandler={handleClick} />

    </div>
  );
};

export default App;
