import React from "react";
import PeopleCard from "components/PeopleCard";
import styled from "styled-components";

const Container = styled.div`
  background-color: green;
  color: red;
`;

const AnswerCard = props => {
  return (
    <Container>
      <PeopleCard face={props.face} name={props.name} num={props.num} />
    </Container>
  );
};

export default AnswerCard;
