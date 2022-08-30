import React, { FC, useEffect } from "react";
import { GetStaticProps } from "next";
import MainLayout from "../../layouts/mainLayout";
import styled, { keyframes } from "styled-components";
import PageWithLayoutType from "../../types/pageWithLayout";
import Header from "../../components/Header/Header";
import { getAllFilmPageSlugs, getPostBySlug } from "../../utils/contentfulApi";
import { renderPost } from "../../utils/RichTextRender";

const FadeIn = keyframes`
    0% {
 /* margin-left: -50%; */
 opacity: 0;
    }
    100% {
      /* margin-left: 0%; */
opacity: 1;
    }
`;

const Root = styled.div`
  width: 85vw;
  margin: auto;
  min-height: calc(100vh - 120px);
  margin-bottom: 128px;

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
  overflow: hidden;
  position: relative;

  @media (min-width: 767px) {
    ::after {
      display: block;
      content: "";
    }

    margin-bottom: 36px;
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
`;

const ThumbnailGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

const Thumbnail = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;

  @media (min-width: 1280px) {
    width: 33%;
    position: relative;
  }
`;

const PostWrapper: FC<any> = (props) => {
  useEffect(() => {
    const mySlice = document.querySelector("#animate-fade");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          // in the view
          console.log(mySlice);
          mySlice.classList.add("fade");
          // observer.unobserve;

          /// Need a way to add the fade effect to children
        }
      });
    });

    observer.observe(mySlice);
  }, []);

  // const { filmTitle, filmSlug, filmBlurb, filmUrl } = props.filmData;
  const { filmData } = props;
  return (
    <>
      <Header />
      <Root>
        <FilmTitle>{filmData.filmTitle}</FilmTitle>
        {console.log(filmData)}
        <FilmVideo>
          <video controls width="100%">
            <source src={filmData.filmWebmVideo.url} type="video/webm" />
            <source src={filmData.filmMp4Video.url} type="video/mp4" />
            Sorry, your browser doesn't support videos.
          </video>
          {/* <iframe
            src={filmData.filmUrl}
            title="BBC three The American High School: OW"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe> */}
        </FilmVideo>
        <>{renderPost(filmData.filmBlurb)}</>
        {console.log(filmData)}
        <ThumbnailGrid>
          {filmData.filmGridPictureCollection.items.map((i, idx) => {
            return <Thumbnail key={idx} src={i.url} />;
          })}
        </ThumbnailGrid>
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
  console.log(paths);
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
