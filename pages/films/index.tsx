import React, { FC } from "react";

import { GetStaticProps } from "next";
import styled from "styled-components";
import PageWithLayoutType from "../../types/pageWithLayout";
import MainLayout from "../../layouts/mainLayout";
import Header from "../../components/Header/Header";

const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 120px);

  font-size: 40px;
`;

const FilmTile = styled.div`
  width: 100%;
  background-size: cover;
  @media (max-width: 600px) {
    width: 50%;
  }
`;

const filmsIndex: FC<any> = () => {
  return (
    <>
      <Header />
      <Root style={{ alignItems: "center", textAlign: "center" }}>
        Page under development - coming soon
      </Root>
    </>
  );
};

(filmsIndex as PageWithLayoutType).layout = MainLayout;

export default filmsIndex;

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const filmPicURLs = [];
  const filmPicTitle = [];

  return {
    props: {
      filmPicURLs,
    },
  };
};
