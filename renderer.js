const { remote, ipcRenderer, shell } = require('electron');
const gameInformation = require('./playerData')
const gameBoard = document.getElementById('app');

for (let unit in gameInformation) {
  let newUnit = document.createElement('div');
  // it is to late and I can't think, I will do this tomorrow or something.  I want to use React to and it would be nice to actually have a plan...
  gameBoard.append(newUnit);
}
