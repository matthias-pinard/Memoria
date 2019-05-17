import React from "react";
import PeopleCard from "../../../components/PeopleCard";
import ButtonNext from "../../../components/ButtonNext";
import { useHotkeys } from "react-hotkeys-hook";

const Stage0 = props => {
  useHotkeys("enter", () => {
    props.onClick();
  });
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
