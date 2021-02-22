import axios from 'axios'
import React, { useState, useEffect } from 'react'

const App = () => {
  return (
    <div className='container'>
      <header>
        <h1>Lambda Eats</h1>
        <button className="header-button">HOME</button>
        <button className="header-button">HELP</button>
      <hr/>
      </header>
    </div>
  );
};
export default App;
