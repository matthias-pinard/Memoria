import React, { Component } from "react";
import "./App.css";
import Stage0 from "./Stage0";
import Stage1 from "./Stage1";
import Stage2 from "./Stage2";
import getNums from "../utils/generateRandomNums";
import getNames from "../utils/getNames";
import names from "../utils/names";

class App extends Component {
  constructor() {
    super();
    let nums = getNums(5);
    let names = getNames(5);
    this.state = {
      index: 0,
      stage: 0,
      currentNum: "",
      numsArray: nums,
      answernumsArray: [],
      namesArray: names,
      answerNameArray: [],
      goodNum: 0
    };
    this.onCLickNextStage0 = this.onCLickNextStage0.bind(this);
    this.onCLickNextStage1 = this.onCLickNextStage1.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onCLickNextStage0() {
    this.setState({ index: this.state.index + 1 });
    if (this.state.index >= this.state.numsArray.length - 1) {
      this.setState({
        stage: 1,
        index: 0
      });
    }
  }

  onCLickNextStage1() {
    let i = this.state.index;
    let scoreAdd = this.state.numsArray[i] === this.state.currentNum ? 1 : 0;
    let answerNums = this.state.answernumsArray.slice();
    answerNums.push(this.state.currentNum);
    this.setState({
      answernumsArray: answerNums,
      goodNum: this.state.goodNum + scoreAdd,
      index: this.state.index + 1,
      currentNum: ""
    });
    if (this.state.index >= this.state.numsArray.length - 1) {
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
            num={this.state.numsArray[this.state.index]}
            name={this.state.namesArray[this.state.index]}
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
          <Stage2
            value={this.state.goodNum}
            max={this.state.numsArray.length}
          />
        )}
      </div>
    );
  }
}

export default App;
