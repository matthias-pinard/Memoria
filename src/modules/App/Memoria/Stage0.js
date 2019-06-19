import React from "react";
import PeopleCard from "../../../components/PeopleCard";
import ButtonNext from "../../../components/ButtonNext";
import useEnter from "../../../hooks/useEnter";

const Stage0 = props => {
  useEnter(props.onClick);
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
