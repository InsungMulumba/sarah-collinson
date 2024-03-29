import React from "react";
import styled from "styled-components";

const SlideButton = styled.button`
  position: absolute;
  border: none;
  transform: translateY(-350%);
  @media (min-width: 1280px) {
    transform: translateY(-190%);
  }
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  touch-action: manipulation;
`;

const SlidePrevButton = styled(SlideButton)`
  left: 2%;
  @media (min-width: 1280px) {
    left: 120px;
  }
`;
const SlideNextButton = styled(SlideButton)`
  right: 2%;
  @media (min-width: 1280px) {
    right: 120px;
  }
`;

const ButtonSVG = styled.svg`
  width: 25px;
  height: 25px;
  fill: #ffffff;
  color: white;

  @media (min-width: 1280px) {
    width: 50px;
    height: 50px;
  }
`;
export const DotButton = ({ selected, onClick }) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);

export const PrevButton = ({ enabled, onClick }) => (
  <SlidePrevButton
    className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <ButtonSVG
      className="embla__button__svg"
      viewBox="137.718 -1.001 366.563 644"
    >
      <path
        d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"
        fill="#FFFFFF"
      />
    </ButtonSVG>
  </SlidePrevButton>
);

export const NextButton = ({ enabled, onClick }) => (
  <SlideNextButton
    className="embla__button embla__button--next"
    onClick={onClick}
    disabled={!enabled}
  >
    <ButtonSVG className="embla__button__svg" viewBox="0 0 238.003 238.003">
      <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
    </ButtonSVG>
  </SlideNextButton>
);
