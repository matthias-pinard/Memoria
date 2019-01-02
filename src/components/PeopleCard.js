import React from "react";
import NameDisplay from "./PeopleCard/NameDisplay";
import NumDisplay from "./PeopleCard/NumDisplay";
import "./PeopleCard/style.css";

const PeopleCard = props => {
  return (
    <div className="card" style={{ color: "red" }}>
      <img src={props.face} alt="" />
      <NameDisplay name={props.name} style={{ color: "red" }} />
      <NumDisplay num={props.num} />
    </div>
  );
};

export default props => PeopleCard(props);
