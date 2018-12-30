import React from "react";
import Face from "../../../components/Face";
import NameDispay from "../../../components/NameDisplay";
import NumDisplay from "../../../components/NumDisplay";
import Row from "./Row";

const ResumeCard = props => {
  return (
    <>
      <Face src={props.src} />
      <Row>{props.co}</Row>
    </>
  );
};
