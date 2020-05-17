import React from 'react';
import Display from './Display';
import '../styles/css/index.css';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    this.setState(state => (
      Calculate(state, buttonName)
    ));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
        <h1 className="header">
          React Calculator
          <span className="operation">{operation}</span>
        </h1>
        <div className="calc-container">
          <Display result={next || total || 0} />
          <ButtonPanel clickHandler={buttonName => this.handleClick(buttonName)} />
        </div>
      </div>
    );
  }
}

export default App;
