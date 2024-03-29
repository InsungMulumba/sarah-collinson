import React, { useState, useEffect, FC } from "react";

import { GetStaticProps } from "next";
import styled from "styled-components";
import PageWithLayoutType from "../../types/pageWithLayout";
import MainLayout from "../../layouts/mainLayout";
import Header from "../../components/Header/Header";

type filmsCollection = {
  title: String;
  url: String;
  image: String;
  slug: String;
}[];

const Root = styled.div`
  display: flex;
  justify-content: flex-start;
  min-height: calc(100vh - 191px);
  width: 100%;
  flex-wrap: wrap;
  font-size: 40px;

  @media (min-width: 1280px) {
    //margin-top: 40px;

    margin: 40px 10% 0px;
  }
`;

const FilmTile = styled.a<{
  picture: string;
}>`
  flex: 0 0 100%; /* don't grow, don't shrink, width */
  height: 28vh;
  text-decoration: none;
  @media (min-width: 600px) {
    flex: 0 0 100%; /* don't grow, don't shrink, width */
    height: 40vh;
  }

  @media (min-width: 1280px) {
    flex: 0.4 0 40%; /* don't grow, don't shrink, width */

    margin: 20px 10px;
    max-width: 40%;
    /* height: 65vh; */
  }

  background: url(${(props) => props.picture}) no-repeat;
  background-size: cover;
  background-position: center;
  @media (min-width: 600px) {
    background-size: cover;
    background-position: center;
  }

  color: black;

  :hover {
    .name {
      visibility: visible;
    }
  }
`;

const FilmName = styled.div`
  color: white;
  font-family: "Roboto", sans-serif;
  display: flex;
  text-align: center;

  font-size: 24px;
  @media (min-width: 1280px) {
    font-size: 44px;
  }
  background-color: rgba(0, 0, 0, 0.8);
  visibility: hidden;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  padding: 0px 15%;
`;

const filmsIndex: FC<any> = (props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // https://github.com/vercel/next.js/discussions/17443
    setMounted(true);
  }, []);

  const { films } = props;
  return (
    <div>
      <Header />

      <Root>
        {films &&
          films.map((i, idx) => (
            <FilmTile key={idx} picture={i.image} href={`films/${i.slug}`}>
              <FilmName className="name">{i.title}</FilmName>
            </FilmTile>
          ))}
      </Root>
    </div>
  );
};

(filmsIndex as PageWithLayoutType).layout = MainLayout;

export default filmsIndex;

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const films: filmsCollection = [
    {
      title: "Fearless: The women fighting Putin",
      url: "https://vimeo.com/646064087",
      image: "/films/jpg/the-women-fighting-putin.jpg",
      slug: "fearless-women-fighting-putin",
    },
    {
      title: "North Korea: Life inside the secret state",
      url: "https://www.youtube.com/watch?v=en6NMBEDj1c",
      image: "/films/jpg/life-inside-secret-state.jpg",
      slug: "life-inside-secret-state",
    },
    {
      title: "China’s pop idols",
      url: "https://www.youtube.com/watch?v=14BbagW3lbA",
      image: "/films/jpg/chinas-pop-idols.jpg",
      slug: "china-pop-idols",
    },
    {
      title: "American High School",
      url: "https://www.youtube.com/watch?v=14BbagW3lbA",
      image: "/films/jpg/american-high-school.jpg",
      slug: "american-high-school",
    },
    {
      title: "From Russia with cash",
      url: "https://www.netflix.com/title/81574288",
      image: "/films/jpg/from-russia-with-cash.jpg",
      slug: "from-russia-with-cash",
    },
    {
      title: "America’s legacy of lynching",
      url: "https://www.youtube.com/watch?v=mYYDgYWc3lE",
      image: "/films/jpg/america-lynching.jpg",
      slug: "americas-legacy-of-lynching",
    },
    {
      title: "Joe Biden wins: what next for America? Q&A",
      url: "https://www.youtube.com/watch?v=XdD0HT4X_s4",
      image: "/films/jpg/biden-next.jpg",
      slug: "whats-next-for-america",
    },
    {
      title: "Vaping: what people are getting wrong",
      url: "https://www.youtube.com/watch?v=O4_l-klxqCQ&t=9s",
      image: "/films/jpg/vaping-wrong.jpg",
      slug: "vaping-what-people-are-getting-wrong",
    },
    {
      title: "How America politicised abortion",
      url: "https://www.youtube.com/watch?v=jerdBX3JeOk&t=101s",
      image: "/films/jpg/abortion-america.jpg",
      slug: "how-america-politicised-abortion",
    },
  ];

  return {
    props: {
      films,
    },
  };
};
