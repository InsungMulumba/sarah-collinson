import React, { FC } from "react";
import { GetStaticProps } from "next";
import MainLayout from "../../layouts/mainLayout";
import styled from "styled-components";
import PageWithLayoutType from "../../types/pageWithLayout";
import Header from "../../components/Header/Header";
import { getAllFilmPageSlugs, getPostBySlug } from "../../utils/contentfulApi";

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
  return (
    <>
      <Header />
      <Root>{console.log(props.filmData)}</Root>
    </>
  );
};

(PostWrapper as PageWithLayoutType).layout = MainLayout;

export default PostWrapper;

export async function getStaticPaths() {
  const filmPageSlugs = await getAllFilmPageSlugs();

  const paths = filmPageSlugs.map((slug) => {
    return { params: { slug } };
  });
  // console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  console.log(params.slug);
  const filmData = await getPostBySlug(params.slug, {
    preview: preview,
  });

  if (!filmData) {
    console.log("not a film");
    return {
      notFound: true,
    };
  }

  return {
    props: {
      preview,
      filmData,
    },
  };
}

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
