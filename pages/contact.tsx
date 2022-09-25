import React, { FC } from "react";
import MainLayout from "../layouts/mainLayout";
import PageWithLayoutType from "../types/pageWithLayout";
import Header from "../components/Header/Header";
import styled from "styled-components";
import SocialMedia from "../components/Home/SocialMediaBar";

const Root = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(100vh - 180px);
  flex-direction: column;
`;

const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  margin-top: 40px;
  width: 40%;
  @media (max-width: 767px) {
    width: 80%;
    font-size: 16px;
  }
`;

const Contact = styled.img`
  width: 40%;
  height: auto;

  @media (max-width: 767px) {
    width: 80%;
  }
`;

const SocialMediaIcon = styled.img`
  height: 30px;
  width: 30px;
  display: block;
  margin: 20px 0px;

  :hover {
    transform: scale(1.1);
  }
`;

const About: FC = () => {
  return (
    <>
      <Header />
      <Root>
        <Text>
          If you would like to find out more about Sarah's work or discuss
          future projects, please get in touch: <br /> <br />
          sfcollinson@gmail.com
          <SocialMediaIcon src="/social-media-icons/twitter.png" />
        </Text>
        <Contact src="/contact.jpg" />
      </Root>
    </>
  );
};

(About as PageWithLayoutType).layout = MainLayout;

export default About;
