import { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    name: 'perf-goggles',
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to {this.state.name} {this.stat.length}</h1>
      </div>
    );
  }
}
