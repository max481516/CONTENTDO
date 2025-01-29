import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { titleStyles, QUERIES } from "../constants";

export default function Price() {
  return (
    <>
      <Title id="Pricing">СТОИМОСТЬ</Title>
      <AnimatedPrice />
    </>
  );
}

const Title = styled.h2`
  ${titleStyles}
  margin-top: 8rem;
  padding: 0;

  @media ${QUERIES.largeTabletAndDown} {
    margin-top: 6rem;
  }

  @media ${QUERIES.mobile} {
    margin: calc(46rem / 16) 0 calc(36rem / 16);
  }
`;

// Helper to zero-pad the number to at least 5 digits
function zeroPad(num, places) {
  return String(num).padStart(places, "0");
}

function AnimatedPrice() {
  const [displayNumber, setDisplayNumber] = useState("00000");
  const [hasAnimated, setHasAnimated] = useState(false);
  const [finished, setFinished] = useState(false);
  // 'finished' to indicate we've switched to ????? or not

  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startAnimation();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  function startAnimation() {
    let currentValue = 0;
    const maxValue = 99999;
    const step = 2222; // change step size to control speed
    const intervalMs = 50; // update interval

    const interval = setInterval(() => {
      currentValue += step;
      if (currentValue >= maxValue) {
        clearInterval(interval);
        setDisplayNumber("99999");
        // Show "99999" briefly then switch to ?????
        setTimeout(() => {
          setDisplayNumber("?????");
          setFinished(true);
        }, 200);
      } else {
        setDisplayNumber(zeroPad(currentValue, 5));
      }
    }, intervalMs);
  }

  return (
    <AnimatedPriceStyled ref={containerRef}>
      {/* Static front text */}
      от 300.000 ₽{/* The animated middle portion */}
      {/* If we haven’t switched to ?????, show the currency sign, otherwise skip it */}
      {/* Static trailing text: "до ??????" or you could show just "до ?" once finished */}{" "}
      до <span> {displayNumber}</span>
      {!finished && "₽"}
    </AnimatedPriceStyled>
  );
}

// Styled components

const AnimatedPriceStyled = styled.h2`
  font-family: "Inter", sans-serif;
  text-align: center;
  display: flex;
  margin-top: 1.5rem;
  justify-content: center;
  align-items: center;
  font-size: calc(100rem / 16);
  color: transparent;
  -webkit-text-stroke: 1px var(--color-details-primary);
  white-space: nowrap;

  span {
    margin: 0 0.5rem;
  }

  @media ${QUERIES.laptopAndDown} {
    font-size: calc(78rem / 16);
  }

  @media ${QUERIES.largeTabletAndDown} {
    font-size: calc(68rem / 16);
  }

  @media ${QUERIES.tabletAndDown} {
    font-size: calc(62rem / 16);
  }

  @media ${QUERIES.mobile} {
    font-size: calc(28rem / 16);
  }

  @media (max-width: 358px) {
    font-size: calc(26rem / 16);
  }
`;
