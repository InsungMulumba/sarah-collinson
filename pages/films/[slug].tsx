import React, { FC } from "react";
import { GetStaticProps } from "next";
import MainLayout from "../../layouts/mainLayout";
import styled from "styled-components";
import PageWithLayoutType from "../../types/pageWithLayout";
import Header from "../../components/Header/Header";

const Root = styled.div`
  width: 100vw;

  min-height: calc(100vh - 120px);

  @media (min-width: 1280px) {
  }
`;

const PageContent = styled.div`
  @media (min-width: 1280px) {
    width: 80%;
    margin: 0px auto;
  }

  p {
    margin: 0px;
    line-height: 24px;
  }
  font-family: "Spartan", sans-serif;
`;
const PostWrapper: FC<any> = (props) => {
  const { post, preview } = props;

  return (
    <>
      <Header />
      <Root>
        <PageContent>{post.blogContent} </PageContent>
      </Root>
    </>
  );
};

(PostWrapper as PageWithLayoutType).layout = MainLayout;

export default PostWrapper;

// export async function getStaticPaths() {
//   const filmPageSlugs = [];

//   const paths = filmPageSlugs.map((slug) => {
//     return { params: { slug } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }
