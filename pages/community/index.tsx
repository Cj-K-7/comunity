import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

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
          <label>Search
            <input type="text" list="list" />
            <datalist id="list"></datalist>
            <button>찾기</button>
          </label>
          <Link href='/community/post'>
          <button>글쓰기</button>
          </Link>
        </section>
        <section>
          <ul>
            <li><Link href='/community/:id'><a>post title</a></Link></li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default CommunityHome;
