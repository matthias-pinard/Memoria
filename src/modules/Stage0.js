import React, { Component } from "react";
import NumDisplay from "./NumDisplay.js";
import NameDisplay from "./NameDisplay.js";
import ButtonNext from "./ButtonNext.js";

export default props => {
  return (
    <>
      <NameDisplay name={props.name} />
      <NumDisplay num={props.num} />
      <ButtonNext text="next" onClick={props.onClick} />
    </>
  );
};