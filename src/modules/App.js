import React, { Component } from "react";
import Memoria from "./App/Memoria";
import styled from "styled-components";

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
