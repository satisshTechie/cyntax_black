import React from "react";
import styled from "styled-components";
function App() {
  return (
    <Wrapper>
      <Head>WHAT'S WAITING FOR YOU!</Head>
      <Cardholder>
        <Card1>
          <Lesson>
            LESSON<Span>#1</Span>
          </Lesson>
          <Title>INTRODUCTION</Title>
          <Desc>
            Daymond will show you what his Powershift negotiation model looks
            like.
          </Desc>
        </Card1>
        <Card2>
          <Lesson>
            LESSON<Span>#2</Span>
          </Lesson>
          <Title>HOW TO ESTABLISH INFLUENCE AND BRAND POWER</Title>
          <Desc>
            Learn how to figure out what your influence could be and how to
            develop a powerful brand around you and/or your business.
          </Desc>
        </Card2>
        <Card3>
          <Lesson>
            LESSON<Span>#3</Span>
          </Lesson>
          <Title>5 MULTI-SENSORY PITCH PREP ESSENTIALS</Title>
          <Desc>
            This lesson shows how the most successful Shark Tank pitch used the
            Powershift to “wow” the Sharks and find success.
          </Desc>
        </Card3>
        <Card4>
          <Lesson>
            LESSON<Span>#4</Span>
          </Lesson>
          <Title>HOW TO NEGOTIATE LIKE THE PEOPLE’S SHARK</Title>
          <Desc>
            Learn how to research your negotiation partners, so when you sit
            down you will know exactly how to speak to their pains and
            interests.
          </Desc>
        </Card4>
        <Card5>
          <Lesson>
            LESSON<Span>#5</Span>
          </Lesson>
          <Title>CASE STUDY, BOMBAS SOCKS</Title>
          <Desc>
            This lesson shows how the most successful Shark Tank pitch used the
            Powershift to “wow” the Sharks and find success.
          </Desc>
        </Card5>
        <Card6>
          <Lesson>
            LESSON<Span>#6</Span>
          </Lesson>
          <Title>‘RELATIONSHIP CAPITAL’ TO BUILD LASTING PARTNERSHIPS</Title>
          <Desc>
            In this lesson, you will learn how to develop what Daymond calls
            “relationship capital” to achieve long-term success.
          </Desc>
        </Card6>
        <Card7>
          <Lesson>
            LESSON<Span>#7</Span>
          </Lesson>
          <Title>CONCLUSION</Title>
          <Desc>
            This final lesson summarizes everything you have learned in the
            course.
          </Desc>
        </Card7>
      </Cardholder>
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
  color: white;
  background: #10141d;
  font-family: poppins;
`;
const Head = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.5rem;

  @media (max-width: 450px) {
    font-size: 1.3rem;
  }
`;

const Span = styled.span`
  color: #01c0c8;
`;
const Lesson = styled.h3`
  text-align: right;
  font-size: 1.6rem;
  font-weight: 350;
  margin: 0rem;

  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
`;
const Title = styled.h2`
  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
`;
const Desc = styled.p`
  color: #c7c7c7;
  font-size: 1.4rem;
  font-weight: 350;

  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
`;

const Cardholder = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 7rem;

  @media (max-width: 450px) {
    margin: 4rem;
  }
`;
const Card1 = styled.div`
  background: #10141d;
  margin-bottom: 3rem;
  padding: 2.5rem;
  min-height: 20rem;
  width: 28rem;
  background: linear-gradient(180deg, #1b2131 0%, rgba(27, 33, 49, 0) 100%);
  border-radius: 10px;

  @media (max-width: 450px) {
    padding: 0.8rem;
    min-height: 10rem;
    width: 13rem;
    border-radius: 7px;
  }
`;
const Card2 = styled.div`
  background: #10141d;
  margin-bottom: 3rem;
  padding: 2.5rem;
  min-height: 20rem;
  width: 28rem;
  background: linear-gradient(180deg, #1b2131 0%, rgba(27, 33, 49, 0) 100%);
  border-radius: 10px;

  @media (max-width: 450px) {
    padding: 0.8rem;
    min-height: 10rem;
    width: 13rem;
    border-radius: 7px;
  }
`;
const Card3 = styled.div`
  background: #10141d;
  margin-bottom: 3rem;
  padding: 2.5rem;
  min-height: 20rem;
  width: 28rem;
  background: linear-gradient(180deg, #1b2131 0%, rgba(27, 33, 49, 0) 100%);
  border-radius: 10px;

  @media (max-width: 450px) {
    padding: 0.8rem;
    min-height: 10rem;
    width: 13rem;
    border-radius: 7px;
  }
`;
const Card4 = styled.div`
  background: #10141d;
  margin-bottom: 3rem;
  padding: 2.5rem;
  min-height: 20rem;
  width: 28rem;
  background: linear-gradient(180deg, #1b2131 0%, rgba(27, 33, 49, 0) 100%);
  border-radius: 10px;

  @media (max-width: 450px) {
    padding: 0.8rem;
    min-height: 10rem;
    width: 13rem;
    border-radius: 7px;
  }
`;
const Card5 = styled.div`
  background: #10141d;
  margin-bottom: 3rem;
  padding: 2.5rem;
  min-height: 20rem;
  width: 28rem;
  background: linear-gradient(180deg, #1b2131 0%, rgba(27, 33, 49, 0) 100%);
  border-radius: 10px;

  @media (max-width: 450px) {
    padding: 0.8rem;
    min-height: 10rem;
    width: 13rem;
    border-radius: 7px;
  }
`;
const Card6 = styled.div`
  background: #10141d;
  margin-bottom: 3rem;
  padding: 2.5rem;
  min-height: 20rem;
  width: 28rem;
  background: linear-gradient(180deg, #1b2131 0%, rgba(27, 33, 49, 0) 100%);
  border-radius: 10px;

  @media (max-width: 450px) {
    padding: 0.8rem;
    min-height: 10rem;
    width: 13rem;
    border-radius: 7px;
  }
`;
const Card7 = styled.div`
  background: #10141d;
  margin-bottom: 3rem;
  padding: 2.5rem;
  min-height: 20rem;
  width: 28rem;
  background: linear-gradient(180deg, #1b2131 0%, rgba(27, 33, 49, 0) 100%);
  border-radius: 10px;

  @media (max-width: 450px) {
    padding: 0.8rem;
    min-height: 10rem;
    width: 13rem;
    border-radius: 7px;
  }
`;
