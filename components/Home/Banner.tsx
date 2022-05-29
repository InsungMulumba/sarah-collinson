import React, { FC } from "react";
import styles from "../../styles/Layout.module.css";
import styled, { keyframes } from "styled-components";
const imageFadeIn = keyframes`
    0% {
      opacity: 0%;
    }

    100% {
      opacity: 100%;
    }
`;

const Root = styled.div`
  height: calc(100vh - 60px);
  margin-top: 0px;
  align-items: center;
  display: flex;
  background-repeat: no-repeat;
  animation: ${imageFadeIn} 3s ease-out 0s both;
  background-size: cover;
  justify-content: space-between;
  flex-direction: column-reverse;
  @media (max-width: 1280px) {
    height: 50vh;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  margin-bottom: 0;
  color: white;
  text-align: left;
  width: 90%;
  position: absolute;
  z-index: 9;
  @media (max-width: 1280px) {
    top: 40%;
  }

  @media (max-width: 413px) {
    top: 30%;
  }
  @media (min-width: 1280px) {
    font-size: 52px;
    top: 370px;
  }
`;

const ImageContainer = styled.picture`
  height: inherit;
  overflow: hidden;
  background: white;
  width: 100%;
  @media (max-width: 1280px) {
    height: fit-content;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;

  height: 100%;
  @media (max-width: 1280px) {
    height: 50vh;
  }
`;

const ImageOverlay = styled.div`
  height: calc(100vh - 60px);
  width: 100vw;
  position: absolute;
  background-image: linear-gradient(0deg, #00000088 20%, #ffffff44 100%);
  @media (max-width: 1280px) {
    height: 50vh;
  }
`;

const Header: FC = () => {
  return (
    <Root>
      <ImageContainer>
        <source srcSet="/banner.webp" type="image/webp" />
        <source srcSet="/banner.jpg" type="image/jpeg" />
        <Image src="/banner.jpg" />
      </ImageContainer>
      <Title>Empower your students for a better tomorrow</Title>
      <ImageOverlay />
    </Root>
  );
};

export default Header;
