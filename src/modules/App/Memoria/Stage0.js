import React from "react";
import PeopleCard from "../../../components/PeopleCard";
import ButtonNext from "../../../components/ButtonNext";

export default props => {
  return (
    <>
      <PeopleCard face={props.face} name={props.name} num={props.num} />
      <ButtonNext text="Next" onClick={props.onClick} />
    </>
  );
};
