import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>
          Replenisher Task List
        </h1>
      <ul>
        <li><a href="App.js">Home</a></li>
        <li><a href="PendingTasks.js">Pending Tasks</a></li>
        <li><a href="InProgressTasks.js">In Progress Tasks</a></li>
        <li><a href="FinishedTasks.js">Finished Tasks</a></li>
      </ul> 
        </header>
      </div>
    );
  }
}

export default App;
