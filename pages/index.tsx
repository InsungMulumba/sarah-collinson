import Head from "next/head";
import Header from "../components/Header/Header";
import React, { FC } from "react";
import styled from "styled-components";
import WelcomeSlice from "../components/Slice/WelcomeSlice";
import About from "../components/Slice/About";
import Intro from "../components/Slice/Intro";
import Contact from "../components/Slice/Contact";
import Reviews from "../components/Slice/Reviews";
import Footer from "../components/Footer";

const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Rafiki Tuition</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <WelcomeSlice />
      <Intro />
      <Reviews />
      <About />
      <Contact />
      <Footer />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          overflow-x: hidden;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </Container>
  );
}
