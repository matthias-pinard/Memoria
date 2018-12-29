import React from "react";
import Score from "./Stage2/Score.js";
import Button from "../../components/ButtonNext";

export default props => {
  return (
    <>
      <Score value={props.value} max={props.max} />
      <Button text="Restart" onClick={props.onClick} />
    </>
  );
};
