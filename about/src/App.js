import React from "react";
import styled from "styled-components";
function App() {
  return (
    <Wrapper>
      <Main>
        About <Span>Genesys</Span>
      </Main>
      <Para>
        Foundr is a global media and education company that connects millions of
        people every month with some of the most successful living entrepreneurs
        of our generation. Entrepreneurs such as Richard Branson, Arianna
        Huffington, Mark Cuban, Tim Ferriss and many more. Foundr breaks down
        their strategies and experiences into actionable, battle-tested content
        through magazines, podcasts, videos, blogs, and online courses — so that
        you too can start, build, and grow a successful business.
      </Para>
      <Para>
        We only work with practitioners who have built one or more successful
        businesses. Our mission is to democratize entrepreneurial education and
        bring it to the masses to help entrepreneurs build and grow successful
        businesses and to create the future generation of entrepreneurs that
        drive humanity forward.
      </Para>
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
  color: white;
  font-style: poppins;
  background: radial-gradient(
    86.04% 78.47% at 50% 50%,
    #10141d 0%,
    rgba(16, 20, 29, 0.79) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;
const Main = styled.h1`
  font-size: 2rem;

  @media (max-width: 450px) {
    font-size: 1.3rem;
  }
`;
const Span = styled.span`
  color: #01c0c8;
`;
const Para = styled.p`
  color: #c7c7c7;
  font-size: 1.6rem;
  padding: 0rem 15rem;

  @media (max-width: 450px) {
    font-size: 1rem;
    padding: 0rem 2rem;
  }
`;
