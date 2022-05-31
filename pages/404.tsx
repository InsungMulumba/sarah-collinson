import { GetStaticProps } from "next";
import React, { FC } from "react";
import MainLayout from "../layouts/mainLayout";
import PageWithLayoutType from "../types/pageWithLayout";

const FourOhFour: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "calc(60vh)",
      }}
    >
      <h1>404 - Page Not Found</h1>
    </div>
  );
};

(FourOhFour as PageWithLayoutType).layout = MainLayout;

export default FourOhFour;

export const getStaticProps: GetStaticProps = async () => {
  const res = "test";

  return {
    props: {
      res,
    },
  };
};
