import React, { FC, useState } from 'react';
import style from './PostEditor.module.css';
import { useDispatchAcions } from '../../../hooks/useDispatchAction';
import { IPostsType } from '../../../redux/posts/postsTypes';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

interface IInputState {
  title: string;
  body: string;
  id: string;
}
interface IPosts {
  posts: IPostsType[];
  selectedId: string;
}

interface IPostEditorProp {
  onClose: () => void;
}
const PostEditor: FC<IPostEditorProp> = ({ onClose }) => {
  const { posts, selectedId }: IPosts = useTypedSelector(state => state.posts);
  const { onEditPost } = useDispatchAcions();
  const post = posts.find(p => p.id === selectedId);

  const [state, setState] = useState<IInputState>({
    title: post?.title || '',
    body: post?.body || '',
    id: post?.id || '',
  });

  const { addPost } = useDispatchAcions();

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target;
    setState(s => ({
      ...s,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { title, body, id } = state;
    if (title.length <= 0 && body.length <= 0) {
      return;
    } else if (id.length <= 0) {
      onSavePost();
    } else {
      editPost();
    }
    reset();
    onClose();
  };
  const onSavePost = (): void => {
    const postToAdd: IPostsType = { ...state, id: getId() };
    addPost(postToAdd);
  };
  const editPost = (): void => {
    const editPost = { ...state, id: getId() };
    onEditPost(state.id, editPost);
  };

  const getId = (): string => {
    return Date.now().toString();
  };

  const reset = (): void => {
    setState(s => ({ ...s, title: '', body: '' }));
  };

  return (
    <>
      <form className={style.post__editor} onSubmit={handleSubmit}>
        <label className={style.label}>
          <span className={style.name}>Title</span>
          <input
            className={style.input}
            type="title"
            placeholder="Enter title"
            name="title"
            onChange={handleChange}
            value={state.title}
          />
        </label>
        <label className={style.label}>
          <span className={style.name}>Body</span>{' '}
          <textarea
            className={style.input}
            rows={6}
            placeholder="Enter body"
            name="body"
            onChange={handleChange}
            value={state.body}
          />
        </label>
        <div>
          <button type="button" className={style.button} onClick={onClose}>
            Close
          </button>
          <button type="submit" className={style.button}>
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default PostEditor;
