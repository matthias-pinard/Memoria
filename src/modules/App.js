import React, { Component } from "react";
import Memoria from "./App/Memoria";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="left" />
        <Memoria
          className="game"
          style={{
            color: "red"
          }}
        />
        <div className="right" />
      </div>
    );
  }
}

export default App;
