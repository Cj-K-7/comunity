import { NextPage } from "next";
import Head from "next/head";

const CommunityHome: NextPage = () => {
  return (
    <>
      <Head>
        <title>Community</title>
        <meta name="description" content="this is Community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <label>
            <input type="text" list="list" />
            <datalist id="list"></datalist>
          </label>
          <button>POST</button>
        </section>
        <section></section>
      </main>
    </>
  );
};

export default CommunityHome;
