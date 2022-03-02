import React from "react";
import styled from "styled-components";

function Course() {
  return (
    <Wrapper>
      <Text>AS FEATURED IN </Text>
      <Containers>
        <Container></Container>
        <Container></Container>
        <Container></Container>
        <Container></Container>
        <Container></Container>
      </Containers>
    </Wrapper>
  );
}

export default Course;
const Wrapper = styled.div`
  height: auto;
`;
const Text = styled.p`
  color: #485164;
  font-size: 1.1rem;
  text-align: center;
  padding-top: 3rem;
`;
const Containers = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  padding-top: 1.5rem;

  @media (max-width: 800px) {
    gap: 2.25rem;
  }

  @media (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const Container = styled.div`
  height: 4rem;
  width: 10rem;
  background: rgba(127, 149, 234, 0.1);
  border-radius: 8px;

  @media (max-width: 800px) {
    height: 3rem;
    width: 7.7.rem;
    border-radius: 5px;
  }

  @media (max-width: 450px) {
    height: 2.8rem;
    width: 7rem;
    border-radius: 3px;
  }
`;
