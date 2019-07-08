import React from 'react';
import logo from './logo.svg';
import './App.css';
import Youtube from "./Youtube";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Youtube</h2>
      </header>
      <Youtube />
    </div>
  );
}

export default App;
