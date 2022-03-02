import React from "react";
import styled from "styled-components";
function App() {
  return (
    <Wrapper>
      <Head>
        <Span>F</Span>requently <Span>A</Span>sked <Span>Q</Span>uestions
      </Head>
      <Content>
        <Div>
          <Question>1. Vitae mauris magna adipiscing.</Question>
        </Div>
        <Div>
          <Answer>
            Mi dignissim ut elit ipsum amet justo mollis ac. Nec leo ac
            venenatis, tortor massa dictum montes, mollis. Vitae, sed id
            vulputate morbi diam nibh.
          </Answer>
        </Div>
        <Div>
          <Question>2. Eros nulla tempus velit odio.</Question>
        </Div>
        <Div>
          <Answer>
            Porttitor id mi sagittis, vel odio sed egestas feugiat morbi. Quam
            eget tristique vitae nulla interdum vestibulum, volutpat cursus
            tellus. Mi sed vulputate tempor quam egestas.
          </Answer>
        </Div>
        <Div>
          <Question>3. Aliquam risus magna in nunc amet placerat at.</Question>
        </Div>
        <Div>
          <Answer>
            Ac dictum et a mi velit eu. Vulputate sit volutpat sit in turpis
            erat. Est tortor libero tincidunt sapien fringilla ut pharetra.
            Nullam dolor erat pulvinar in turpis semper blandit ullamcorper
            vitae. Elementum gravida nulla.
          </Answer>
        </Div>
      </Content>
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
  font-family: poppins;
  color: white;
  background: #10141d;
`;
const Head = styled.h1`
  font-size: 2rem;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 1.3rem;
  }
`;
const Span = styled.span`
  color: #01c0c8;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 3rem;
`;
const Question = styled.h2`
  font-weight: 350;

  @media (max-width: 450px) {
    font-size: 01rem;
    padding: 0rem 2rem;
  }
`;
const Answer = styled.p`
  color: #c7c7c7;

  @media (max-width: 450px) {
    font-size: 0.8rem;
    padding: 0rem 2rem;
  }
`;
const Div = styled.div`
  min-height: 2rem;
  width: 35rem;
`;
