import Head from "next/head";
import Header from "../components/Header/Header";
import React, { FC } from "react";
import styled from "styled-components";
import Script from "next/script";

const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
`;

export default function Booking() {
  return (
    <Container>
      <Head>
        <title>Rafiki Tuition | Booking</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

      <Script
        id="test-me"
        src="https://square.site/appointments/buyer/widget/r8nepx5snispoi/LTWHVG2Z8J4MC.js"
      ></Script>
    </Container>
  );
}
