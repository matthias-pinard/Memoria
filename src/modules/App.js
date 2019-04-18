import React, { Component } from "react";
import Memoria from "./App/Memoria";
import styled from "styled-components";

import Typography from "typography";
import fairyGatesTheme from "typography-theme-fairy-gates";

const typography = new Typography(fairyGatesTheme);

typography.injectStyles();

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Memoria />
      </Container>
    );
  }
}

export default App;
