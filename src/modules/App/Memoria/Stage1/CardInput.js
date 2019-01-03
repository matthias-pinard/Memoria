import React from "react";
import NameInput from "./NameInput.js";
import NumInput from "./NumInput.js";
import Card from "components/Card.js";

const CardInput = props => {
  return (
    <Card
      img={props.face}
      body={
        <>
          <NameInput
            nameValue={props.nameValue}
            nameHandleChange={e => props.nameHandleChange(e)}
          />
          <NumInput
            numValue={props.numValue}
            numHandleChange={e => props.numHandleChange(e)}
          />
        </>
      }
    />
  );
};

export default props => CardInput(props);
