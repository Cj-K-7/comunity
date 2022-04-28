import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

const Home: NextPage = (resul) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="here is home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>대자보 body</main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const a = 123;
  const b = 1232;
  return {
    props: {
      a,
      b,
    },
  };
};
