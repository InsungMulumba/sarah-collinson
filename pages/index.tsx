import Head from "next/head";
import styled, { keyframes } from "styled-components";
import { GetStaticProps } from "next";
import PageWithLayoutType from "../types/pageWithLayout";
import React, { FC, useState, useEffect } from "react";
import MainLayout from "../layouts/mainLayout";
import Header from "../components/Header/Header";
import SocialMedia from "../components/Home/SocialMediaBar";

interface contentfulDataTypes {
  aboutSlice: string;
  welcomeSlice: string;
  mediaLink: any;
}

const Container = styled.div`
  max-width: 100vw;
`;

const Root = styled.div`
  display: flex;

  justify-content: center;
  flex-direction: row;
  min-height: calc(100vh - 120px);
`;
const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 16px; */
  @media (min-width: 600px) {
    flex-direction: row;
    margin: 32px 64px;

    justify-content: center;
  }
`;
const PicturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: ${(props) => (props.inline ? "24px 0px" : "0px")};

  @media (min-width: 600px) {
    display: ${(props) => (props.inline ? "none" : "flex")};
    align-items: center;
    width: -webkit-fit-content;
    width: 350px;
    margin: 0px 50px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SecondImageContainer = styled.div`
  margin-top: 16px;
  width: 100%;
  @media (max-width: 600px) {
    display: none;
  }
`;
const fadeIn = keyframes`
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
`;

const Image = styled.img`
  /* height: 300px; */
  width: 100%;
  opacity: 0;
  animation: ${fadeIn} 4s ease-out 0.3s both;
  @media (max-width: 600px) {
    object-fit: cover;
  }

  @media (min-width: 600px) {
    object-fit: cover;
  }
`;

const TextContainer = styled.div`
  margin: 16px 0px;
  @media (min-width: 600px) {
    width: 30%;
    margin: 0px;
  }
`;
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    flex: 0 0 100%;
    margin: 0px 32px;
    font-size: 16px;
  }
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  margin: 0px 16px;
`;

const ContactButton = styled.a`
  text-decoration: none;
  border: 1px solid #48cccc;
  color: #48cccc;
  padding: 25px 45px;
  display: flex;
  width: fit-content;
  margin: 40px auto;
  :hover {
    background-color: #48cccc;
    color: white;
  }
`;

const Home: FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // https://github.com/vercel/next.js/discussions/17443
    setMounted(true);
  }, []);

  return (
    <>
      <Header />
      <Root>
        {mounted && (
          <>
            <PageContent>
              <PicturesContainer>
                <Image
                  src="/home-pic-2.webp"
                  alt="Picture of Sarah"
                  loading="eager"
                  priority={true}
                  height="450"
                />

                <SecondImageContainer>
                  <Image
                    loading="lazy"
                    src="/home-pic.webp"
                    alt="Picture of Sarah"
                    height="450"
                    width="350"
                  />
                </SecondImageContainer>
              </PicturesContainer>
              <TextContainer>
                <TextBlock>
                  Sarah Collinson is a BAFTA-winning and Emmy-nominated Director
                  and Executive Producer at Economist Films, the video
                  production arm of the global current-affairs newspaper, The
                  Economist. She was awarded Best Documentary Director by the
                  Royal Television Society in 2022.
                  <br />
                  <br /> Sarah started her career as an undercover reporter,
                  before being selected for Channel 4’s prestigious
                  investigative journalism scheme. She has since made current
                  affairs and observational documentaries for Channel 4, ITV and
                  BBC—including producing a six-part series on school
                  segregation in America which won a Broadcast Award for Best
                  Documentary, an investigation into money laundering in
                  London’s property market and a film following the lives of
                  people in North Korea over the course of a year through their
                  illicit phone calls to defectors in the South.
                  <br />
                  <br />
                </TextBlock>
                <PicturesContainer inline>
                  <Image
                    second
                    src="/home-pic.webp"
                    alt="Picture of Sarah"
                    loading="lazy"
                  />
                </PicturesContainer>
                <TextBlock>
                  Sarah won the 2022 current affairs BAFTA for her ITV/
                  Economist documentary “Fearless: the women fighting Putin”—she
                  filmed three brave activists, revealing the risks they took to
                  stand up to the Kremlin. She pitched the original idea to The
                  Economist and delivered the first ever television broadcast
                  film in the paper’s long history.
                  <br />
                  <br />
                  She has simultaneously overseen rapid and unprecedented growth
                  in the audience for The Economist’s award-winning online
                  documentaries: Economist Films’ YouTube channel has grown to
                  2.5m subscribers and many films reach an audience of 1m+.
                  <br />
                  <br />
                  Sarah was selected as one of Broadcast’s ‘Hot Shots’,
                  Edinburgh TV Festival’s ‘Ones to watch’ and holds an MA in
                  journalism from City, University of London.
                  <br /> <br />
                  She is committed to exposing unjust, unfair and unlawful
                  behaviour around the world through powerful personal stories,
                  intimately told.
                </TextBlock>
                <ContactButton href="/contact">GET IN TOUCH</ContactButton>
              </TextContainer>
            </PageContent>
          </>
        )}
      </Root>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .posts {
          display: flex;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};
(Home as PageWithLayoutType).layout = MainLayout;

export default Home;
