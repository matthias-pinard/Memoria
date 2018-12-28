import React, { Component } from "react";
import "./App.css";
import Stage0 from "./Stage0.js";
import Stage1 from "./Stage1.js";
import Stage2 from "./Stage2.js";

class App extends Component {
  constructor() {
    super();
    let nums = ["06", "08", "09", "2"];
    this.state = {
      numIndex: 0,
      stage: 1,
      currentNum: "",
      numArray: nums,
      answerNumArray: [],
      goodNum: 0
    };
    this.onCLickNextStage0 = this.onCLickNextStage0.bind(this);
    this.onCLickNextStage1 = this.onCLickNextStage1.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onCLickNextStage0() {
    this.setState({ numIndex: this.state.numIndex + 1 });
    if (this.state.numIndex >= this.state.numArray.length - 1) {
      this.setState({
        stage: 1,
        numIndex: 0
      });
    }
  }

  onCLickNextStage1() {
    let i = this.state.numIndex;
    let scoreAdd = this.state.numArray[i] === this.state.currentNum ? 1 : 0;
    let answerNums = this.state.answerNumArray.slice();
    answerNums.push(this.state.currentNum);
    this.setState({
      answerNumArray: answerNums,
      goodNum: this.state.goodNum + scoreAdd,
      numIndex: this.state.numIndex + 1,
      currentNum: ""
    });
    if (this.state.numIndex >= this.state.numArray.length - 1) {
      this.setState({ stage: 2 });
    }
  }

  handleChange(e) {
    this.setState({ currentNum: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <h1> Memoria </h1>
        {this.state.stage === 0 && (
          <Stage0
            num={this.state.numArray[this.state.numIndex]}
            onClick={this.onCLickNextStage0}
          />
        )}
        {this.state.stage === 1 && (
          <Stage1
            value={this.state.currentNum}
            handleChange={e => this.handleChange(e)}
            onClick={this.onCLickNextStage1}
          />
        )}
        {this.state.stage === 2 && (
          <Stage2 value={this.state.goodNum} max={this.state.numArray.length} />
        )}
      </div>
    );
  }
}

export default App;
