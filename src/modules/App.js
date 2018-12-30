import React, { Component } from "react";
import "./App.css";
import Stage0 from "./App/Stage0";
import Stage1 from "./App/Stage1";
import Stage2 from "./App/Stage2";
import getPeople from "../utils/getPeople";
// import shuffle from "../utils/shuffle"

class App extends Component {
  constructor() {
    super();
    let peoples = getPeople(5);
    this.state = {
      index: 0,
      stage: 0,
      currentName: "",
      currentNum: "",
      peoples: peoples,
      answer: {}
    };
    const indexAnswer = (this.onCLickNextStage0 = this.onCLickNextStage0.bind(
      this
    ));
    this.onCLickNextStage1 = this.onCLickNextStage1.bind(this);
    this.onClickRestart = this.onClickRestart.bind(this);
    this.handleChangeNum = this.handleChangeNum.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  onCLickNextStage0() {
    this.setState({ index: this.state.index + 1 });
    if (this.state.index >= this.state.peoples.length - 1) {
      // let peoples = shuffle(this.state.peoples)
      this.setState({
        stage: 1,
        index: 0
        // peoples: peoples
      });
    }
  }

  onCLickNextStage1() {
    let p = this.state.peoples[this.state.index];
    let answer = { num: p.num, name: p.name };

    this.setState({
      answer: answer,
      index: this.state.index + 1,
      currentNum: "",
      currentName: ""
    });
    if (this.state.index >= this.state.peoples.length - 1) {
      this.setState({ stage: 2 });
    }
  }

  onClickRestart() {
    let peoples = getPeople(5);
    this.setState({
      index: 0,
      stage: 0,
      currentName: "",
      currentNum: "",
      peoples: peoples,
      answer: {},
      goodNum: 0
    });
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
    let p = this.state.peoples[this.state.index];
    return (
      <div className="App">
        <h1> Memoria </h1>
        {this.state.stage === 0 && (
          <Stage0
            face={p.face}
            num={p.num}
            name={p.name}
            onClick={this.onCLickNextStage0}
          />
        )}
        {this.state.stage === 1 && (
          <Stage1
            face={p.face}
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
            max={this.state.peoples.length}
            onClick={this.onClickRestart}
          />
        )}
      </div>
    );
  }
}

export default App;
