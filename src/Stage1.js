import React, { Component } from "react";
import NumInput from "./NumInput.js";
import ButtonNext from "./ButtonNext.js";

export default props => {
  return (
    <>
      <NumInput value={props.value} handleChange={e => props.handleChange(e)} />
      <ButtonNext text="next" onClick={props.onClick} />
    </>
  );
};
