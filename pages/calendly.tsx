import Head from "next/head";
import Header from "../components/Header/Header";
import React, { useEffect } from "react";
import styled from "styled-components";
import Script from "next/script";

const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
`;

export default function Booking() {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <Container>
      <Head>
        <title>Rafiki Tuition | Booking</title>
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

      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/rafikituition?hide_landing_page_details=1"
        style={{ minWidth: 320 }}
      />
    </Container>
  );
}
