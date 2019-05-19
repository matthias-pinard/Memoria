import React from "react";
import PeopleCard from "../../../components/PeopleCard";
import ButtonNext from "../../../components/ButtonNext";

const Stage0 = props => {
  return (
    <>
      <PeopleCard
        face={props.face}
        name={props.name}
        num={props.num}
        displayName={props.displayName}
        displayNum={props.displayNum}
      />
      <ButtonNext text="Next" onClick={props.onClick} />
    </>
  );
};

export default props => Stage0(props);
