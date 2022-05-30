import Head from "next/head";
import styled, { keyframes } from "styled-components";
import { GetStaticProps } from "next";
import PageWithLayoutType from "../types/pageWithLayout";
import React, { FC } from "react";
import MainLayout from "../layouts/mainLayout";
import Header from "../components/Header/Header";

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
    max-width: 450px;
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
  height: 300px;
  width: 100%;
  opacity: 0;
  animation: ${fadeIn} 4s ease-out 0.3s both;
  @media (max-width: 600px) {
    object-fit: cover;
  }
`;

const TextContainer = styled.div`
  margin: 16px 0px;
  @media (min-width: 600px) {
    width: 50%;
    margin: 0px;
  }
`;
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    flex: 0 0 100%;
    margin: 0px 32px;
  }
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  margin: 0px 16px;
`;

const Home: FC = () => {
  return (
    <>
      <Header />
      <Root>
        <PageContent>
          <PicturesContainer>
            <Image
              src="/home-pic-1.jpg"
              alt="Picture of Sarah"
              loading="lazy"
            />

            <SecondImageContainer>
              <Image
                loading="lazy"
                src="/home-pic-2.jpg"
                alt="Picture of Sarah"
              />
            </SecondImageContainer>
          </PicturesContainer>
          <TextContainer>
            <TextBlock>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </TextBlock>
            <PicturesContainer inline>
              <Image
                second
                src="/home-pic-2.jpg"
                alt="Picture of Sarah"
                loading="lazy"
              />
            </PicturesContainer>
            <TextBlock>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </TextBlock>
          </TextContainer>
        </PageContent>{" "}
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
