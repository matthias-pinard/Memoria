import React, { Component } from "react";
import "./Memoria.css";
import Setting from "./Memoria/Setting";
import Stage0 from "./Memoria/Stage0";
import Stage1 from "./Memoria/Stage1";
import Stage2 from "./Memoria/Stage2";
import getPeoples from "utils/getPeople";
import shuffle from "utils/shuffle";

class Memoria extends Component {
  constructor() {
    super();
    let settings = JSON.parse(localStorage.getItem("settings"));
    if (!settings) {
      settings = { face: true, name: true, phone: true, number: 5 };
    }
    this.state = {
      index: 0,
      stage: -1,
      score: 0,
      currentName: "",
      currentNum: "",
      peoples: {},
      answers: [],
      settings: settings
    };
    this.handleInputChangeSetting = this.handleInputChangeSetting.bind(this);
    this.onSubmitSetting = this.onSubmitSetting.bind(this);
    this.onCLickNextStage0 = this.onCLickNextStage0.bind(this);
    this.onCLickNextStage1 = this.onCLickNextStage1.bind(this);
    this.onClickRestart = this.onClickRestart.bind(this);
    this.handleChangeNum = this.handleChangeNum.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  handleInputChangeSetting(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    let settings = this.state.settings;
    settings[name] = value;
    this.setState({
      settings: settings
    });
    console.log("change");
  }

  onSubmitSetting(event) {
    let storage = localStorage;
    storage.setItem("settings", JSON.stringify(this.state.settings));
    console.log("setting submitted");
    const peoples = getPeoples(this.state.settings.number);
    this.setState({
      stage: 0,
      peoples: peoples
    });
    event.preventDefault();
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
    let dipslayName = this.state.settings.name;
    let displayNum = this.state.settings.phone;
    let p = this.state.peoples[this.state.index];

    let num = this.state.currentNum.replace(/[^\d]/g, "");
    let goodNum = p.num === num;
    let goodName = p.name === this.state.currentName;
    let goodAnswer = (goodName || !dipslayName) && (goodNum || !displayNum);
    let answers = this.state.answers.slice();
    answers.push({
      num: num,
      name: this.state.currentName,
      people: p,
      goodAnswer: goodAnswer
    });

    const score = this.state.score + (goodAnswer ? 1 : 0);
    this.setState({
      answers: answers,
      score: score,
      index: this.state.index + 1,
      currentNum: "",
      currentName: ""
    });
    if (this.state.index >= this.state.peoples.length - 1) {
      this.setState({ stage: 2 });
    }
  }

  onClickRestart() {
    let peoples = getPeoples(this.state.settings.number);
    this.setState({
      index: 0,
      stage: -1,
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
        {this.state.stage === -1 && (
          <Setting
            onSubmit={e => this.onSubmitSetting(e)}
            handleInputChange={e => this.handleInputChangeSetting(e)}
            defaultNumber={this.state.settings.number}
            defaultPhone={this.state.settings.phone}
            defaultName={this.state.settings.name}
          />
        )}
        {this.state.stage === 0 && (
          <Stage0
            face={p.face}
            num={p.num}
            name={p.name}
            displayName={this.state.settings.name}
            displayNum={this.state.settings.phone}
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
            displayName={this.state.settings.name}
            displayNum={this.state.settings.phone}
          />
        )}
        {this.state.stage === 2 && (
          <Stage2
            value={this.state.score}
            max={this.state.peoples.length}
            answers={this.state.answers}
            onClick={this.onClickRestart}
            displayName={this.state.settings.name}
            displayNum={this.state.settings.phone}
          />
        )}
      </div>
    );
  }
}

export default Memoria;
