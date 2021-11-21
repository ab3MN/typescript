import React, { FC } from "react";
import style from "./PostList.module.css";

import PostItem from "../PostItem/PostItem";
import { IPostsType } from "../../../redux/posts/postsTypes";

interface IPostsListProps {
  posts: IPostsType[];
  openEditorModal: () => void;
}

const PostList: FC<IPostsListProps> = ({ posts, openEditorModal }) => {
  return (
    <ul className={style.post__list}>
      {posts.map((el) => (
        <li key={el.id} className={style.post__list__item}>
          <PostItem item={el} openEditorModal={openEditorModal} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
