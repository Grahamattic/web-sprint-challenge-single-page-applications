import axios from 'axios'
import React, { useState, useEffect } from 'react'
import "../src/App.css"
import pizza from "../src/img/eatingpizza.jpg"

const App = () => {
  return (
    <div className="App" style={{'background-color': '#eeeeee','color': '#000000', 'min-height': '100vh'}}>
        <div className="App-header" style={{'min-height': '50vh', 'background-image': `url(${pizza})`, 'backgroundSize': 'cover', 'background-position': 'center'}}>
            <h1 style={{'color': '#000000'}}>Lambda Eats</h1>
            <nav className="topnav">
                <button>PIZZA</button>
            </nav>
            <hr/>
        </div>
        <section className="cover" style={{'display': 'flex', 'flex-direction': 'column', 'align-items': 'center', 'justify-content': 'center', 'min-height': '25vh'}}>
            <div className="banner">
                
            </div>
        </section>
    </div>
  );
};
export default App;
