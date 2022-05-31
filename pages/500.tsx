import { GetStaticProps } from "next";
import React, { FC } from "react";
import MainLayout from "../layouts/mainLayout";
import PageWithLayoutType from "../types/pageWithLayout";

const FiveHundred: FC = () => {
  return <h1>500 - Page Not Found</h1>;
};

(FiveHundred as PageWithLayoutType).layout = MainLayout;

export default FiveHundred;

export const getStaticProps: GetStaticProps = async () => {
  const res = "test";

  return {
    props: {
      res,
    },
  };
};
