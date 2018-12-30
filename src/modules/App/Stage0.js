import React from "react";
import NumDisplay from "../../components/NumDisplay";
import NameDisplay from "../../components/NameDisplay";
import ButtonNext from "../../components/ButtonNext";
import Face from "../../components/Face";

export default props => {
  return (
    <>
      <Face src={props.face} />
      <NameDisplay name={props.name} />
      <NumDisplay num={props.num} />
      <ButtonNext text="Next" onClick={props.onClick} />
    </>
  );
};
