import React, { Component } from "react";
import NumDisplay from "./NumDisplay.js";
import ButtonNext from "./ButtonNext.js";

export default props => {
  return (
    <>
      <NumDisplay num={props.num} />
      <ButtonNext text="next" onClick={props.onClick} />
    </>
  );
};
