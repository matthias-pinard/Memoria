import React from "react";
import PeopleCard from "./../../../../components/PeopleCard";

const ResumeCard = props => {
  return (
    <div>
      {props.answers.map(answer => {
        console.log(answer);
        return (
          <>
            <PeopleCard
              face={answer.people.face}
              name={answer.people.name}
              num={answer.people.num}
            />
          </>
        );
      })}
    </div>
  );
};

export default props => ResumeCard(props);
