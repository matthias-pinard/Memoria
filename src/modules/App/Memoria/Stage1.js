import React from "react";
import CardInput from "./Stage1/CardInput";
import ButtonNext from "components/ButtonNext";

export default props => {
  return (
    <>
      <CardInput
        face={props.face}
        nameValue={props.nameValue}
        nameHandleChange={props.nameHandleChange}
        numValue={props.numValue}
        numHandleChange={props.numHandleChange}
      />
      <ButtonNext text="Next" onClick={props.onClick} />
    </>
  );
};
