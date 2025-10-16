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

// TypeScript: Explicitly type the function parameters and return type
// Helper to zero-pad the number to at least 5 digits
function zeroPad(num: number, places: number): string {
  return String(num).padStart(places, "0");
}

function AnimatedPrice() {
  // TypeScript infers these as string and boolean automatically
  const [displayNumber, setDisplayNumber] = useState<string>("0000000");
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  
  // TypeScript: Ref must specify the element type it will reference
  // HTMLDivElement means it will point to a <div> element
  const containerRef = useRef<HTMLDivElement>(null);

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
    const maxValue = 1000000;
    const step = 4444; // change step size to control speed
    const intervalMs = 40; // update interval

    const interval = setInterval(() => {
      currentValue += step;
      if (currentValue >= maxValue) {
        clearInterval(interval);
        setDisplayNumber("9999999");
        // Show "99999" briefly then switch to ?????
        setTimeout(() => {
          setDisplayNumber("???????");
        }, 200);
      } else {
        setDisplayNumber(zeroPad(currentValue, 5));
      }
    }, intervalMs);
  }

  return (
    <AnimatedPriceStyled ref={containerRef}>
      <span> {displayNumber}₽</span>
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

  font-size: calc(68rem / 16);

  @media ${QUERIES.largeTabletAndDown} {
    font-size: calc(56rem / 16);
  }

  @media ${QUERIES.tabletAndDown} {
    font-size: calc(52rem / 16);
  }

  @media ${QUERIES.mobile} {
    font-size: calc(42rem / 16);
  }
`;
