import React, { Component } from "react";
import "./Memoria.css";
import Stage0 from "./Memoria/Stage0";
import Stage1 from "./Memoria/Stage1";
import Stage2 from "./Memoria/Stage2";
import getPeoples from "utils/getPeople";
import shuffle from "utils/shuffle";

class Memoria extends Component {
  constructor() {
    super();
    let peoples = getPeoples(3);
    this.state = {
      index: 0,
      stage: 0,
      score: 0,
      currentName: "",
      currentNum: "",
      peoples: peoples,
      answers: []
    };
    this.onCLickNextStage0 = this.onCLickNextStage0.bind(this);
    this.onCLickNextStage1 = this.onCLickNextStage1.bind(this);
    this.onClickRestart = this.onClickRestart.bind(this);
    this.handleChangeNum = this.handleChangeNum.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  onCLickNextStage0() {
    this.setState({
      index: this.state.index + 1
    });
    if (this.state.index >= this.state.peoples.length - 1) {
      let peoples = shuffle(this.state.peoples.slice());
      this.setState({
        stage: 1,
        index: 0,
        peoples: peoples
      });
    }
  }

  onCLickNextStage1() {
    let p = this.state.peoples[this.state.index];

    let goodNum = p.num === this.state.currentNum;
    let goodName = p.name === this.state.currentName;
    let addScore = goodName && goodNum ? 1 : 0;
    let answers = this.state.answers.slice();
    answers.push({
      num: this.state.currentNum,
      name: this.state.currentName,
      people: p,
      goodAnswer: goodName && goodNum
    });

    this.setState({
      answers: answers,
      score: this.state.score + addScore,
      index: this.state.index + 1,
      currentNum: "",
      currentName: ""
    });
    if (this.state.index >= this.state.peoples.length - 1) {
      this.setState({ stage: 2 });
    }
  }

  onClickRestart() {
    let peoples = getPeoples(3);
    this.setState({
      index: 0,
      stage: 0,
      currentName: "",
      currentNum: "",
      peoples: peoples,
      answers: [],
      score: 0
    });
  }

  handleChangeNum(e) {
    this.setState({ currentNum: e.target.value });
  }

  handleChangeName(e) {
    this.setState({ currentName: e.target.value });
  }

  render() {
    let p = this.state.peoples[this.state.index];
    return (
      <div className="Memoria">
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
            value={this.state.score}
            max={this.state.peoples.length}
            answers={this.state.answers}
            onClick={this.onClickRestart}
          />
        )}
      </div>
    );
  }
}

export default Memoria;
