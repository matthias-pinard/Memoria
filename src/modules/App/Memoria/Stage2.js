import React from "react";
import Score from "./Stage2/Score.js";
import Button from "components/ButtonNext";
import ResumeCard from "./Stage2/ResumeCard";

export default props => {
  return (
    <>
      <Score value={props.value} max={props.max} />
      <ResumeCard answers={props.answers} />
      <Button text="Restart" onClick={props.onClick} />
    </>
  );
};
