import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // eslint-disable-next-line no-unused-vars
  const name = 'kasun';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Eslint, Prettier included</p>
      </header>
    </div>
  );
}

export default App;
