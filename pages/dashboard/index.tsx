import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2em;
`;
const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 5px;
`;
const Section = styled.section`
  border: 1px solid;
`;

const SectionTitle = styled.h2`
  font-size: 1.4em;
`;

const DashboardHome: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="this is Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>Dashboard</Title>
      <Main>
        <Section>
          <SectionTitle>statistics graph</SectionTitle>
          <Link href="/dashboard/statistics">
            <a>more</a>
          </Link>
        </Section>
        <Section>
          <SectionTitle>most 5</SectionTitle>
          <ol>
            <li>first</li>
            <li>second</li>
            <li>third</li>
            <li>fourth</li>
            <li>fifth</li>
          </ol>
        </Section>
        <Section>
          <SectionTitle>this week or month statistics</SectionTitle>
        </Section>
      </Main>
    </>
  );
};

export default DashboardHome;
