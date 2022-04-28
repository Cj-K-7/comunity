import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import React from "react";

interface IPost {
  title: string;
  type: string;
  main: string;
}

const PostContent: NextPage = ({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { id } = router.query;
  const { title, type, main } = post;
  return (
    <div>
      {/* 제목 */}
      <h1>
        {title}, {id}
      </h1>
      {/* 본문 */}
      <div>{main}</div>
    </div>
  );
};

export default PostContent;

export const getServerSideProps: GetServerSideProps = async () => {
  const post: IPost = { title: "first", type: "글", main: "ehdlsemd" };
  //await (await fetch('')).json();
  return {
    props: { post },
  };
};
