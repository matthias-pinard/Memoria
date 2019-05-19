import React from "react";
import { useState } from "react";
import "./Memoria.css";
import Setting from "./Memoria/Setting";
import Stage0 from "./Memoria/Stage0";
import Stage1 from "./Memoria/Stage1";
import Stage2 from "./Memoria/Stage2";
import getPeoples from "utils/getPeople";
import shuffle from "utils/shuffle";

function Memoria(props) {
  let vsettings = JSON.parse(localStorage.getItem("settings"));
  if (!vsettings) {
    vsettings = { face: true, name: true, phone: false, number: 5 };
  }

  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState(-1);
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [peoples, setPeoples] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [settings, setSettings] = useState(vsettings);

  function handleInputChangeSetting(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const vname = target.name;
    let s = settings;
    s[vname] = value;
    setSettings(s);
  }

  function updateSetting(new_settings) {
    let storage = localStorage;
    storage.setItem("settings", JSON.stringify(new_settings));
  }

  function updateScore(answers) {
    let storage = localStorage;
    let current_settings = JSON.parse(localStorage.getItem("settings"));
    let current_number = Number(current_settings.number);
    console.log(`current setting: ${current_settings}`);
    console.log(`current number: ${current_number}`);
    let nb_answer = answers.length;
    let good_answer = answers.filter(v => v.goodAnswer).length;
    let accuracy = good_answer / nb_answer;
    console.log(`accuracy: ${accuracy}`);
    if (accuracy >= 0.9) {
      current_settings.number = current_number + 5;
    } else if (accuracy < 0.8 && current_number > 5) {
      current_settings.number = current_number - 5;
    }
    storage.setItem("settings", JSON.stringify(current_settings));
    setSettings(current_settings);
  }

  function onSubmitSetting(event) {
    updateSetting(settings);
    setStage(0);
    setPeoples(getPeoples(settings.number));

    event.preventDefault();
  }

  function onCLickNextStage0() {
    setIndex(index + 1);
    if (index >= peoples.length - 1) {
      setStage(1);
      setIndex(0);
      setPeoples(shuffle(peoples.slice()));
    }
  }

  function onCLickNextStage1() {
    let dipslayName = settings.name;
    let displayNum = settings.phone;
    let p = peoples[index];

    let vnum = num.replace(/[^\d]/g, "");
    let goodNum = p.num === vnum;
    let goodName = p.name === name;
    let goodAnswer = (goodName || !dipslayName) && (goodNum || !displayNum);
    let vanswers = answers.slice();
    vanswers.push({
      num: num,
      name: name,
      people: p,
      goodAnswer: goodAnswer
    });

    setAnswers(vanswers);
    setScore(score + (goodAnswer ? 1 : 0));
    setIndex(index + 1);
    setNum("");
    setName("");
    if (index >= peoples.length - 1) {
      updateScore(answers);
      setStage(2);
    }
  }

  function onClickRestart() {
    setPeoples(getPeoples(settings.number));
    setIndex(0);
    setStage(-1);
    setName("");
    setNum("");
    setAnswers([]);
    setScore(0);
  }

  function handleChangeNum(e) {
    setNum(e.target.value);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  let p = peoples[index];
  return (
    <div className="Memoria">
      <h1> Memoria </h1>
      {stage === -1 && (
        <Setting
          onSubmit={e => onSubmitSetting(e)}
          handleInputChange={e => handleInputChangeSetting(e)}
          defaultNumber={settings.number}
          defaultPhone={settings.phone}
          defaultName={settings.name}
        />
      )}
      {stage === 0 && (
        <Stage0
          face={p.face}
          num={p.num}
          name={p.name}
          displayName={settings.name}
          displayNum={settings.phone}
          onClick={onCLickNextStage0}
        />
      )}
      {stage === 1 && (
        <Stage1
          face={p.face}
          numValue={num}
          numHandleChange={e => handleChangeNum(e)}
          nameValue={name}
          nameHandleChange={e => handleChangeName(e)}
          onClick={onCLickNextStage1}
          displayName={settings.name}
          displayNum={settings.phone}
        />
      )}
      {stage === 2 && (
        <Stage2
          value={score}
          max={peoples.length}
          answers={answers}
          onClick={onClickRestart}
          displayName={settings.name}
          displayNum={settings.phone}
        />
      )}
      {peoples.map((people, key) => {
        return <img hidden={true} src={people.face} alt="preload" key={key} />;
      })}
    </div>
  );
}

export default props => Memoria(props);
