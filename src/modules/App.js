import React, { Component } from "react";
import "./App.css";
import Stage0 from "./App/Stage0";
import Stage1 from "./App/Stage1";
import Stage2 from "./App/Stage2";
import getNums from "../utils/generateRandomNums";
import getNames from "../utils/getNames";
import getFaces from "../utils/getImg";

class App extends Component {
  constructor() {
    super();
    let nums = getNums(5);
    let names = getNames(5);
    let faces = getFaces(5);
    this.state = {
      index: 0,
      stage: 0,
      currentNum: "",
      numsArray: nums,
      answernumsArray: [],
      currentName: "",
      namesArray: names,
      answerNameArray: [],
      faceArray: faces,
      goodNum: 0
    };
    this.onCLickNextStage0 = this.onCLickNextStage0.bind(this);
    this.onCLickNextStage1 = this.onCLickNextStage1.bind(this);
    this.handleChangeNum = this.handleChangeNum.bind(this);
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
    let goodNum = this.state.numsArray[i] === this.state.currentNum;
    let goodName = this.state.namesArray[i] === this.state.currentName;
    let scoreAdd = goodNum && goodName ? 1 : 0;
    let answerNums = this.state.answernumsArray.slice();
    answerNums.push(this.state.currentNum);
    this.setState({
      answernumsArray: answerNums,
      goodNum: this.state.goodNum + scoreAdd,
      index: this.state.index + 1,
      currentNum: "",
      currentName: ""
    });
    if (this.state.index >= this.state.numsArray.length - 1) {
      this.setState({ stage: 2 });
    }
  }

  handleChangeNum(e) {
    if (e.target.value.replace(" ", "").match(/(^[0-9]*$)/g)) {
      this.setState({ currentNum: e.target.value.replace(" ", "") });
    }
  }

  handleChangeName(e) {
    this.setState({ currentName: e.target.value });
  }

  render() {
    let i = this.state.index;
    return (
      <div className="App">
        <h1> Memoria </h1>
        {this.state.stage === 0 && (
          <Stage0
            face={this.state.faceArray[i]}
            num={this.state.numsArray[i]}
            name={this.state.namesArray[i]}
            onClick={this.onCLickNextStage0}
          />
        )}
        {this.state.stage === 1 && (
          <Stage1
            face={this.state.faceArray[i]}
            numValue={this.state.currentNum}
            numHandleChange={e => this.handleChangeNum(e)}
            nameValue={this.state.currentName}
            nameHandleChange={e => this.handleChangeName(e)}
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
