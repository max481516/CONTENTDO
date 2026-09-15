"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { QUERIES, titleStyles } from "@/constants";
import { formatLegalDate } from "@/legal/operator";
import LogoSmall from "@/assets/LogoSmall.svg";
import Footer from "@/components/Footer";

interface LegalPageLayoutProps {
  title: string;
  version: string;
  /** ISO date YYYY-MM-DD */
  updatedAt: string;
  children: React.ReactNode;
}

/**
 * Shared shell for /privacy and /consent. Mirrors the site's dark theme:
 * compact top bar with the small logo (like Navbar), centered Jura title,
 * readable long-form typography, and the regular site Footer.
 */
export default function LegalPageLayout({
  title,
  version,
  updatedAt,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      <TopBar aria-label="navigation">
        <LogoLink href="/" aria-label="CONTENTDO — На главную">
          <StyledLogo />
        </LogoLink>
        <BackLink href="/">← На главную</BackLink>
      </TopBar>

      <Page>
        <Title>{title}</Title>
        <Meta>
          Редакция {version} от {formatLegalDate(updatedAt)}
        </Meta>
        <Article>{children}</Article>
      </Page>

      <Footer />
    </>
  );
}

const TopBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: calc(64px + env(safe-area-inset-top));

  @media ${QUERIES.mobile} {
    padding: 1rem 1rem;
  }
`;

const LogoLink = styled(Link)`
  width: 100px;
  padding-top: 16px;
  text-decoration: none;

  @media ${QUERIES.mobile} {
    width: 80px;
    padding-top: 8px;
  }
`;

const StyledLogo = styled(LogoSmall)`
  width: 100%;
  height: auto;
  color: var(--color-details-primary);
`;

const BackLink = styled(Link)`
  font-family: var(--font-jura), sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-details-secondary);
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-details-primary);
  }

  @media ${QUERIES.mobile} {
    font-size: calc(14rem / 16);
  }
`;

const Page = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 3rem 3rem;

  @media ${QUERIES.tabletAndDown} {
    padding: 1.5rem 2rem 2.5rem;
  }

  @media ${QUERIES.mobile} {
    padding: 1rem 1rem 2rem;
  }
`;

const Title = styled.h1`
  ${titleStyles}
  font-size: calc(36rem / 16);
  line-height: 1.15;
  padding: 0 0 0.75rem;

  @media ${QUERIES.mobile} {
    font-size: calc(24rem / 16);
  }
`;

const Meta = styled.p`
  font-family: var(--font-jura), sans-serif;
  font-weight: 700;
  font-size: calc(14rem / 16);
  text-align: center;
  color: var(--color-body-secondary);
  margin: 0 0 2.5rem;

  @media ${QUERIES.mobile} {
    font-size: calc(12rem / 16);
    margin-bottom: 1.75rem;
  }
`;

const Article = styled.article`
  counter-reset: section;
  font-size: calc(17rem / 16);
  line-height: 1.6;
  color: var(--color-body-primary);

  @media ${QUERIES.mobile} {
    font-size: calc(15rem / 16);
  }

  h2 {
    counter-increment: section;
    counter-reset: subsection;
    font-family: var(--font-jura), sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-size: calc(22rem / 16);
    line-height: 1.25;
    color: var(--color-details-secondary);
    margin: 2.5rem 0 1rem;

    &::before {
      content: counter(section) ". ";
      color: var(--color-details-primary);
    }

    @media ${QUERIES.mobile} {
      font-size: calc(19rem / 16);
      margin: 2rem 0 0.75rem;
    }
  }

  h3 {
    counter-increment: subsection;
    font-family: var(--font-jura), sans-serif;
    font-weight: 700;
    font-size: calc(18rem / 16);
    color: var(--color-details-secondary);
    margin: 1.5rem 0 0.5rem;

    &::before {
      content: counter(section) "." counter(subsection) ". ";
      color: var(--color-details-primary);
    }

    @media ${QUERIES.mobile} {
      font-size: calc(16rem / 16);
    }
  }

  p {
    margin: 0 0 1rem;
  }

  ul,
  ol {
    margin: 0 0 1rem;
    padding-left: 1.4rem;
  }

  li {
    margin-bottom: 0.4rem;

    &::marker {
      color: var(--color-details-primary);
    }
  }

  a {
    color: var(--color-details-secondary);
    text-decoration: underline;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-details-primary);
    }
  }

  strong {
    font-weight: 700;
    color: var(--color-details-secondary);
  }

  code {
    font-family: var(--font-inter), monospace;
    font-size: 0.9em;
    padding: 0.1em 0.4em;
    border-radius: 4px;
    background: var(--color-details-tertiary);
    color: var(--color-details-secondary);
  }

  .table-wrap {
    overflow-x: auto;
    margin: 1rem 0 1.5rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: calc(15rem / 16);

    @media ${QUERIES.mobile} {
      font-size: calc(13rem / 16);
    }
  }

  th,
  td {
    border: 1px solid #333;
    padding: 0.6rem 0.75rem;
    text-align: left;
    vertical-align: top;
  }

  th {
    font-family: var(--font-jura), sans-serif;
    font-weight: 700;
    color: var(--color-details-secondary);
    background: var(--color-details-tertiary);
    white-space: nowrap;
  }
`;
