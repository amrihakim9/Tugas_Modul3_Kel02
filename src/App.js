import React from 'react';
import './App.css';
import Home from "./Order/Home";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div style={{ background: "rgba(0, 181, 204, 1)" }}>                     
        <h1>WARKOMDA</h1>
        <h5>[Warung Kelompok 02]</h5>
        <div style={{ border: "4px solid black" }}>         
        <Home />
        </div>
        </div>
      </div>
    )
  }
}

export default App;