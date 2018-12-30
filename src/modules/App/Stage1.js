import React from "react";
import NumInput from "./Stage1/NumInput";
import NameInput from "./Stage1/NameInput";
import Face from "../../components/Face";
import ButtonNext from "../../components/ButtonNext";

export default props => {
  return (
    <>
      <Face src={props.face} />
      <br />
      <NameInput
        value={props.nameValue}
        handleChange={e => props.nameHandleChange(e)}
      />
      <NumInput
        value={props.numValue}
        handleChange={e => props.numHandleChange(e)}
      />
      <ButtonNext text="Next" onClick={props.onClick} />
    </>
  );
};
