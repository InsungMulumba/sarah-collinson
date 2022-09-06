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

const FilmVideoContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 40px;
`;

const FilmVideoIframeContainer = styled(FilmVideoContainer)`
  @media (min-width: 767px) {
    ::after {
      padding-top: 56.25%;
      display: block;
      content: "";
    }
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 80%;
    }
    margin-bottom: -80px;
  }
`;

const FilmVideo = styled.video`
  margin-bottom: 24px;
`;

const FilmSecondVideo = styled.video`
  margin-top: 40px;
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
  margin-top: 40px;
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

    if (mySlice) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            // in the view

            mySlice.classList.add("fade");
            // observer.unobserve;

            /// Need a way to add the fade effect to children
          }
        });
      });

      observer.observe(mySlice);
    }
  }, []);

  const { filmData } = props;
  return (
    <>
      <Header />
      <Root>
        {console.log(filmData.filmBlurb)}

        {(filmData.filmWebmVideo?.url || filmData.filmMp4Video?.url) && (
          <FilmVideoContainer>
            <FilmVideo controls width="100%">
              <source src={filmData.filmWebmVideo?.url} type="video/webm" />
              <source src={filmData.filmMp4Video?.url} type="video/mp4" />
              <source
                src={`/videos/${filmData.filmSlug}.mp4`}
                type="video/mp4"
              />
              Sorry, your browser doesn't support videos.
            </FilmVideo>
            <FilmTitle>{filmData.filmTitle}</FilmTitle>
          </FilmVideoContainer>
        )}

        {filmData.filmUrl && (
          <FilmVideoIframeContainer>
            <iframe
              src={filmData.filmUrl}
              title={filmData.Title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              width="100%"
            ></iframe>
            <FilmTitle>{filmData.filmTitle}</FilmTitle>
          </FilmVideoIframeContainer>
        )}

        <>{renderPost(filmData.filmBlurb)}</>
        {console.log(filmData.filmGridPictureCollection)}
        {filmData.filmGridPictureCollection?.items.length !== 0 && (
          <ThumbnailGrid>
            {filmData.filmGridPictureCollection.items.map((i, idx) => {
              return <Thumbnail key={idx} src={i.url} />;
            })}
          </ThumbnailGrid>
        )}
        {filmData.filmMp4SecondVideo?.url && (
          <FilmSecondVideo controls width="100%">
            <source src={filmData.filmWebmSecondVideo?.url} type="video/webm" />
            <source src={filmData.filmMp4SecondVideo?.url} type="video/mp4" />
            Sorry, your browser doesn't support videos.
          </FilmSecondVideo>
        )}
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
