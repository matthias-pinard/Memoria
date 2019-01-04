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
            value={props.nameValue}
            handleChange={e => props.nameHandleChange(e)}
          />
          <NumInput
            value={props.numValue}
            handleChange={e => props.numHandleChange(e)}
          />
        </>
      }
    />
  );
};

export default props => CardInput(props);
