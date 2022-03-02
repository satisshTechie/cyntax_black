import React from "react";
import styled from "styled-components";
function App() {
  return (
    <Wrapper>
      <Insidewrap>
        <Title>
          DEAL <br />
          FLOW
        </Title>
        <Benefits>
          <Texts>What You Get</Texts>
          <Text>
            <Span>#</Span> Nibh nibh id neque habitant.
          </Text>
          <Text>
            <Span>#</Span> Cras faucibus non tortor pretium.
          </Text>
          <Text>
            <Span>#</Span> Morbi aliquam et, pharetra.
          </Text>
          <Text>
            <Span>#</Span> Sagittis in placerat montes.
          </Text>
        </Benefits>
        <Pricing>
          <Price>
            <Currency>$</Currency>
            <Value>87</Value>
          </Price>
          <Button>Buy Now</Button>
        </Pricing>
      </Insidewrap>
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
  background: #1b2131;
  color: white;
  font-family: poppins;
`;
const Insidewrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 3rem;

  @media (max-width: 450px) {
    display: block;
    paddi8ng: 2.5rem;
  }
`;
const Title = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  line-height: 5.3rem;

  @media (max-width: 450px) {
    font-size: 4rem;
    line-height: 4rem;
    text-align: center;
  }
`;
const Texts = styled.h1`
  font-size: 2.5rem;
  @media (max-width: 450px) {
    font-size: 1.5rem;
  }
`;
const Benefits = styled.div`
  @media (max-width: 450px) {
    text-align: center;
  }
`;
const Text = styled.h2`
  font-weight: 450;

  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;
const Span = styled.span`
  color: #01c0c8;
`;
const Pricing = styled.div``;
const Price = styled.div`
  display: flex;
  justify-content: center;
`;
const Currency = styled.h1`
  color: #2c3347;
  font-size: 3rem;
  padding-top: 2.52rem;
  font-weight: 400;

  @media (max-width: 450px) {
    font-size: 2rem;
    padding-top: 1.5rem;
  }
`;
const Value = styled.h1`
  font-size: 6rem;
  font-weight: 400;
  margin-bottom: 0rem;
  @media (max-width: 450px) {
    font-size: 4rem;
  }
`;
const Button = styled.button`
  background: rgba(127, 149, 234, 0.1);
  border-radius: 16px;
  border: none;
  color: white;
  font-size: 2rem;
  padding: 2rem 4rem;
  display: block;
  margin: auto;

  @media (max-width: 450px) {
    font-size: 1.4rem;
    padding: 1rem 2rem;
    border-radius: 0rem auto;
  }
`;
