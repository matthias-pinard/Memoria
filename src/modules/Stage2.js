import React, { Component } from "react";
import Score from "./Score.js";

export default props => {
  return (
    <>
      <Score value={props.value} max={props.max} />
    </>
  );
};
