import React from "react";
import NameDisplay from "./PeopleCard/NameDisplay";
import NumDisplay from "./PeopleCard/NumDisplay";
import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 200px;
  padding: 0px 0px 5px 0px;
  margin: 15px;
  text-align: center;
  font-size: 18px;
`;
const AnswerCard = styled(Card)`
  background-color: ${props => (props.goodAnswer ? "green" : "red")};
`;
const Img = styled.img`
  width: 100%;
`;

const PeopleCard = props => {
  if (props.goodAnswer === undefined) {
    return (
      <Card>
        <Img src={props.face} alt="" />
        <NameDisplay name={props.name} />
        <NumDisplay num={props.num} />
      </Card>
    );
  } else {
    return (
      <AnswerCard goodAnswer={props.goodAnswer}>
        <Img src={props.face} alt="" />
        <NameDisplay name={props.name} />
        <NumDisplay num={props.num} />
      </AnswerCard>
    );
  }
};

export default props => PeopleCard(props);
