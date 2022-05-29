import React, { Component, FC, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Root = styled.div<{ bgColor: string; desktopMaxHeight: string }>`
  background-color: white;
  font-family: Inter, sans-serif;

  color: black;
  max-height: ${(props) =>
    props.desktopMaxHeight ? props.desktopMaxHeight : "auto"};
  display: flex;
  align-items: center;
  /* padding: 40px 0px; */
  flex-direction: column;
  font-size: 32px;
`;

const Content = styled.span`
  display: flex;
  color: black;
  font-family: Inter, sans-serif;
  padding: 20px 120px;
  font-size: 16px;
  font-weight: 700;

  @media (max-width: 1280px) {
    padding: 20px 20px;
  }
`;

const ButtonPill = styled.a`
  text-decoration: none;
  border-radius: 500px;
  background-color: #2896cc;
  color: white;
  font-family: Inter, sans-serif;
  font-weight: 700;
  padding: 20px;
  font-size: 18px;
  border: 1px #2896cc solid;
  text-align: center;
  @media (max-width: 1280px) {
    padding: 10px 0px;
    margin: 10px 0px;
  }

  :hover {
    border: 1px #2896cc solid;
    background-color: white;
    color: black;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  min-width: 25%;
  margin: 30px 0px;
  justify-content: space-between;

  @media (max-width: 1280px) {
    width: 100%;
    padding: 0px 20px;
    padding-bottom: 20px;
    margin: 0px;
    flex-direction: column;
  }
`;

const Intro: FC = () => {
  return (
    <Root>
      <Content
        style={{ backgroundColor: "#2896cc", color: "white", width: "100%" }}
      >
        We have experienced and specialised teachers to provide expert level
        guidance for your students at affordable prices.
        <br /> <br />
        We offer tuition in Maths and English, from Primary school age to GCSE.
      </Content>
      <Content>
        We also offer Functional and Life Skill training to students with
        Special Needs.
        <br />
        <br />
        All new students get a free trial introductory lesson. This allows the
        student to become acquainted with the tutor, and enables us to gauge the
        teaching style required for the student and create an appropriate
        learning plan.
      </Content>
      <ButtonContainer>
        <ButtonPill href="/booking">Book Session</ButtonPill>
        <ButtonPill href="#contact">Get in touch</ButtonPill>
      </ButtonContainer>
    </Root>
  );
};

export default Intro;
