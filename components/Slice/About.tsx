import React, { Component, FC, useEffect } from "react";
import styled from "styled-components";

const Root = styled.div`
  max-width: 100%;

  justify-content: space-evenly;
  display: flex;
  padding: 40px 0px;

  @media (max-width: 1280px) {
    flex-direction: column;
    padding: 0px;
  }
`;

const Content = styled.span`
  display: flex;
  color: black;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 700;
  height: 100%;
  align-items: center;
  @media (max-width: 1280px) {
    width: 100%;
    padding: 20px;
    height: auto;
    color: white;
  }
`;

const ProfilePic = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ProfilePicContainer = styled.div`
  width: 20%;
  display: flex;
  height: 50vh;
  justify-content: center;
  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const ProfilePicWide = styled(ProfilePicContainer)`
  @media (min-width: 1280px) {
    width: 40%;
  }
`;

const About: FC = () => {
  return (
    <Root>
      <ProfilePicWide>
        <ProfilePic src="/teacher-3.jpg" />
      </ProfilePicWide>
      <ProfilePicContainer>
        <ProfilePic src="/teacher-2.jpg" />
      </ProfilePicContainer>
      <ProfilePicWide>
        <ProfilePic src="/teacher-4.jpg" />
      </ProfilePicWide>
    </Root>
  );
};

export default About;
