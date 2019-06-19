import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 400px;
  padding: 0px 0px 5px 0px;
  margin: 15px;
  text-align: center;
  font-size: calc(0.75em + 1vmin);
  background-color: ${props => props.bg};
  border-radius: 6px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 6px 6px 0px 0px;
`;

const Card = props => {
  return (
    <CardStyle bg={props.bg}>
      <Img src={props.img} alt="" />
      {props.body}
    </CardStyle>
  );
};

export default props => Card(props);
