import React from "react";
import styled from "styled-components";
import styles from "styles/styles";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${styles.primary_color};
  color: black;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${styles.primary_color};
  border-radius: 3px;
`;
export default props => {
  return (
    <Button onClick={props.onClick} type={props.type}>
      {props.text}
    </Button>
  );
};
