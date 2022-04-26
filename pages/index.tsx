import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useAppSelector } from "../public/redux/hooks";
import { darkTheme, lightTheme } from "../styles/theme";

const Home: NextPage = (resul) => {
  const darkmode = useAppSelector((state) => state.darkmode);
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
