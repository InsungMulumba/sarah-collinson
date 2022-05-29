import React, { FC, useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import { DotButton, PrevButton, NextButton } from "./CarouselButton";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Embla = styled.div`
  overflow: hidden;
  background-color: #2896cc;
`;

const EmblaViewport = styled.div`
  overflow: hidden;
  width: 100%;

  .is-draggable {
    cursor: move;
    cursor: grab;
  }

  .is-dragging {
    cursor: grabbing;
  }
`;
const EmblaContainer = styled.div`
  display: flex;
`;

const EmblaSlide = styled.div`
  position: relative;
  flex: 0 0 100%;
  padding: 50px 15%;

  @media (min-width: 1280px) {
    font-size: 24px;
  }
  display: flex;
  justify-content: center;

  color: white;
  font-family: Inter, sans serif;
`;

const EmblaCarousel: FC = () => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <Embla>
      <EmblaViewport ref={viewportRef}>
        <EmblaContainer>
          <EmblaSlide>
            "The teaching has been great. <br /> My child has improved their
            grades significantly, and they are so confident in the classroom.
            <br /> Thanks Rafiki Learning!"
          </EmblaSlide>
          <EmblaSlide>Slide 2</EmblaSlide>
          <EmblaSlide>Slide 3</EmblaSlide>
        </EmblaContainer>
      </EmblaViewport>{" "}
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </Embla>
  );
};
export default EmblaCarousel;
