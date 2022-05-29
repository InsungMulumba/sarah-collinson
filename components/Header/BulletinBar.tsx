import styled, { keyframes } from "styled-components";
import { useState, FC } from "react";
import React from "react";

const SlideIn = keyframes`
    0% {

opacity: 0%;
    }

    100% {
      opacity: 100%;
    }
`;

const BulletinText = styled.div`
  animation: ${SlideIn} 1s ease-out 0s both;
`;

const BulletinBar = styled.div`
  height: 40px;
  color: black;
  display: flex;
  background-color: #2896cc;
  font-family: Inter, sans-serif;
  justify-content: center;
  align-items: center;
  /* position: sticky; */
  top: 0;
  /* @media (max-width: 1280px) {
    display: none;
  } */
`;

const AnnounceBar: FC = () => {
  return (
    <BulletinBar id="homepage-top">
      <BulletinText>Click here to book a session.</BulletinText>
    </BulletinBar>
  );
};
export default AnnounceBar;
