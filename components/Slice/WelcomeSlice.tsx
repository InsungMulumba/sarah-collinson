import React, { Component, FC, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../Header/Header";
import Banner from "../../components/Home/Banner";

const Title = styled.h1`
  margin-top: 0;

  @media (min-width: 1280px) {
    font-size: 72px;
  }
`;

const HeroBanner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1280px) {
    flex-direction: row;
    /* max-height: 70vh; */
  }
`;

const WelcomeSlice: FC = () => {
  return (
    <>
      {/* <Header isMain={true} /> */}
      <Banner />
    </>
  );
};

export default WelcomeSlice;
