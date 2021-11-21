import React, { FC } from 'react';
import style from './PostItem.module.css';
import { IPostsType } from '../../../redux/posts/postsTypes';
import { useDispatchAcions } from '../../../hooks/useDispatchAction';

interface IPostItemProp {
  item: IPostsType;
  openEditorModal: () => void;
}

const PostItem: FC<IPostItemProp> = ({ item, openEditorModal }) => {
  const { deletePost, getPostId } = useDispatchAcions();
  const { title, body, id } = item;
  return (
    <article className={style.post}>
      <div className={style.post__content}>
        <h2 className={style.post__title}>{title}</h2>
        <p className={style.post__text}>{body}</p>
      </div>
      <div className={style.post__button_box}>
        {' '}
        <button
          type="button"
          className={style.post__button}
          onClick={() => {
            getPostId(id);
            openEditorModal();
          }}
        >
          Edit
        </button>
        <button
          type="button"
          className={style.post__button}
          onClick={() => deletePost(id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default PostItem;
