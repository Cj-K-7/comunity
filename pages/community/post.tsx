import { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";

interface IBasicForm {
  [name: string]: string;
}

const Post: NextPage = () => {
  const [posting, setPosting] = useState<IBasicForm>({
    title: "",
    type: "글",
    main: "",
  });

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const {
      currentTarget: { name, value },
    } = event;
    setPosting((post) => ({
      ...post,
      [name]: value,
    }));
  };

  const onPostSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(posting);
  };

  return (
    <div>
      <form onSubmit={onPostSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={posting.title}
            onChange={onChange}
          />
        </label>
        <label>
          Type
          <select value={posting.type} onChange={onChange}>
            <option>글</option>
          </select>
        </label>
        <label>
          Main content
          <input
            type="text"
            name="main"
            value={posting.main}
            onChange={onChange}
          />
        </label>
        <button type="submit">글쓰기</button>
        <label>
          <Link href="/community">
            <button>취소</button>
          </Link>
        </label>
      </form>
    </div>
  );
};

export default Post;
