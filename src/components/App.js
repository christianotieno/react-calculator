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
      current: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const state = Calculate(this.state, buttonName);
    this.setState(state);
  }

  render() {
    const { current } = this.state;
    return (
      <div className="app">
        <div className="calc-container">
          <Display result={current} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
