import React from 'react';
import Display from './Display';
import '../styles/css/index.css';
import ButtonPanel from './ButtonPanel';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="app">
        <Display result={result.toString()} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
