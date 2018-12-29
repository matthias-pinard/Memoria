import React, { Component } from "react";
import NumDisplay from "./Stage0/NumDisplay";
import NameDisplay from "./Stage0/NameDisplay";
import ButtonNext from "../../components/ButtonNext";
import Face from "../../components/Face";

export default props => {
  return (
    <>
      <Face src={props.face} />
      <NameDisplay name={props.name} />
      <NumDisplay num={props.num} />
      <ButtonNext text="next" onClick={props.onClick} />
    </>
  );
};
