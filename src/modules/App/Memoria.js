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
    const storage = localStorage;
    const current_settings = JSON.parse(localStorage.getItem("settings"));
    const current_number = Number(current_settings.number);
    const nb_answer = answers.length;
    const good_answer = answers.filter(v => v.goodAnswer).length;
    const accuracy = good_answer / nb_answer;
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

    //event.preventDefault();
  }

  function onCLickNextStage0() {
    if (index < peoples.length - 1) {
      setIndex(index + 1);
    } else {
      setPeoples(shuffle(peoples.slice()));
      setIndex(0);
      setStage(1);
    }
  }

  function onCLickNextStage1() {
    // Submit the answer
    const dipslayName = settings.name;
    const displayNum = settings.phone;
    const p = peoples[index];
    const vnum = num.replace(/[^\d]/g, "");
    const goodNum = p.num === vnum;
    const goodName = p.name === name;
    const goodAnswer = (goodName || !dipslayName) && (goodNum || !displayNum);
    const vanswers = answers.slice();
    setAnswers(vanswers);
    setScore(score + (goodAnswer ? 1 : 0));

    vanswers.push({
      num: num,
      name: name,
      people: p,
      goodAnswer: goodAnswer
    });

    if (index >= peoples.length - 1) {
      updateScore(answers);
      setStage(2);
    } else {
      setIndex(index + 1);
      setNum("");
      setName("");
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
