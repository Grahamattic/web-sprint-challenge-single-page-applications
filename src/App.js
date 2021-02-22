import axios from 'axios'
import React, { useState, useEffect } from 'react'
import "../src/App.css";

const App = () => {
  return (
    <div className="container">
        <div className="App-header">
            <h1>Lambda Eats</h1>
            <button className="header-button">HOME</button>
            <button className="header-button">HELP</button>
            <hr/>
        </div>
    </div>
  );
};
export default App;
