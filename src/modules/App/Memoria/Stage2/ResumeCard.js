import React from "react";
import PeopleCard from "./../../../../components/PeopleCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const ResumeCard = props => {
  return (
    <div>
      {props.answers.map((answer, i) => {
        return (
          <Container key={i}>
            <PeopleCard
              face={answer.people.face}
              name={answer.name}
              num={answer.num}
              goodAnswer={answer.goodAnswer}
              displayName={props.displayName}
              displayNum={props.displayNum}
            />
            <PeopleCard
              face={answer.people.face}
              name={answer.people.name}
              num={answer.people.num}
              displayName={props.displayName}
              displayNum={props.displayNum}
            />
          </Container>
        );
      })}
    </div>
  );
};

export default props => ResumeCard(props);
