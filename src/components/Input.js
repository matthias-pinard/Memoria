import React from "react";
import styled from "styled-components";
import styles from "styles/styles";
const Input = styled.input`
  color: black;
  border-radius: 3px;
  border: 2px solid ${styles.primary_color};
  padding: 0.4em;
`;

export default props => {
  return <Input />;
};
