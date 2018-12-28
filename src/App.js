import React, { Component } from "react";
import "./App.css";
import NumDisplay from "./NumDisplay.js";
import ButtonNext from "./ButtonNext.js";
import NumInput from "./NumInput.js";
import Score from "./Score.js";

class App extends Component {
  constructor() {
    super();
    let nums = ["06", "08", "09", "2"];
    this.state = {
      numIndex: 0,
      stage: 0,
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
    switch (this.state.stage) {
      case 0:
        return (
          <div className="App">
            <h1> Memoria </h1>
            <NumDisplay num={this.state.numArray[this.state.numIndex]} />
            <ButtonNext text="next" onClick={this.onCLickNextStage0} />
          </div>
        );

      case 1:
        return (
          <div className="App">
            <h1> Memoria </h1>
            <NumInput
              value={this.state.currentNum}
              handleChange={e => this.handleChange(e)}
            />
            <ButtonNext text="next" onClick={this.onCLickNextStage1} />
            <Score
              value={this.state.goodNum}
              max={this.state.numArray.length}
            />
          </div>
        );

      case 2:
        return (
          <div className="App">
            <Score
              value={this.state.goodNum}
              max={this.state.numArray.length}
            />
          </div>
        );
    }
  }
}

export default App;
