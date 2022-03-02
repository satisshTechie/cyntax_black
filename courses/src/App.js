import React from "react";
import Course from "../src/course";
import styled from "styled-components";
function App() {
  return (
    <Wrapper>
      <Course />
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
  background: #10141d;
`;
