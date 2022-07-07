import React, { FC } from "react";
import { GetStaticProps } from "next";
import MainLayout from "../../layouts/mainLayout";
import styled from "styled-components";
import PageWithLayoutType from "../../types/pageWithLayout";
import Header from "../../components/Header/Header";
import { getAllFilmPageSlugs, getPostBySlug } from "../../utils/contentfulApi";
import { renderPost } from "../../utils/RichTextRender";

const Root = styled.div`
  width: 100vw;

  min-height: calc(100vh - 120px);
  padding: 0px 64px;

  @media (min-width: 1280px) {
  }
`;

const FilmTitle = styled.h1`
  font-size: 24px;
  @media (min-width: 600px) {
    font-size: 38px;
  }
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-align: center;
`;
const FilmVideo = styled.div`
  width: 100%;
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
`;
const PostWrapper: FC<any> = (props) => {
  const { filmTitle, filmSlug, filmBlurb, filmUrl } = props.filmData;
  return (
    <>
      <Header />
      <Root>
        <FilmTitle>{filmTitle}</FilmTitle>
        <FilmVideo>
          <iframe
            src={filmUrl}
            title="BBC three The American High School: OW"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="100%"
          ></iframe>
        </FilmVideo>
        <>{renderPost(filmBlurb)}</>
        {console.log(props.filmData)}
      </Root>
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
