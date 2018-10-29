const { remote, ipcRenderer, shell } = require('electron');
const gameInformation = require('./playerData')
const gameBoard = document.getElementById('app');
import React from 'react';
import ReactDOM from 'react-dom';

// for (let unit in gameInformation) {
//   let newUnit = document.createElement('div');
//   // it is to late and I can't think, I will do this tomorrow or something.  I want to use React to and it would be nice to actually have a plan...
//   gameBoard.append(newUnit);
// }

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      xMomentum: 0,
      yMomentum: 0,
      up: false,
      down: false,
      right: false,
      left: false
    }

    this.handleMove = this.handleMove.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  componentDidMount() {
    this.setState({ ctx: document.getElementById('play-area').getContext('2d') });
  }
  
  handleMove(e) {
    if (e.key === 'w') {
      this.setState({ up: true });
    } else if (e.key === 's') {
      this.setState({ down: true });
    } else if (e.key === 'd') {
      this.setState({ right: true });
    } else if (e.key === 'a') {
      this.setState({ left: true });
    }
  }

  handleStop(e) {
    if (e.key === 'w') {
      this.setState({ up: false });
    } else if (e.key === 's') {
      this.setState({ down: false });
    } else if (e.key === 'd') {
      this.setState({ right: false });
    } else if (e.key === 'a') {
      this.setState({ left: false });
    }
  }
  
  render() {
    return (
      <div tabIndex="0" onKeyPress={(e) => {this.handleMove(e)}} onKeyUp={(e) => {this.handleStop(e)}}>
        <h3>
          {this.state.up ? "Stop Moving!" : "Continue On..."}
        </h3>
        <canvas id="play-area"></canvas>
        Hello World!
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
