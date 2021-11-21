import React, { FC, useEffect, useState } from 'react';
import style from './Posts.module.css';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatchAcions } from '../../hooks/useDispatchAction';

import Modal from '../shared/Modal/Modal';
import PostsFilter from './PostFilter/PostsFilter';
import PostList from './PostList/PostList';
import PostEditor from './PostEditor/PostEditor';
import { IPostsType } from '../../redux/posts/postsTypes';

interface IPosts {
  posts: IPostsType[];
  totalPage: number;
  filter: string;
}

const Posts: FC = () => {
  const { posts, totalPage, filter }: IPosts = useTypedSelector(
    state => state.posts,
  );
  const { fetchPosts } = useDispatchAcions();
  const [isSaveModalOpen, setSaveModalOpen] = useState<boolean>(false);
  const [isEditingModalOpen, setEditingModalOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(10);
  const [totalPostPage, setTotalPostPage] = useState<number>(1);

  useEffect(() => {
    fetchPosts(limit, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  /* Filtred Posts */
  const filtredPosts = posts.filter(p =>
    p.title.toLowerCase().includes(filter.toLowerCase()),
  );

  /* Save Modal */
  const openSaveModal = (): void => setSaveModalOpen(true);
  const closeSaveModal = (): void => setSaveModalOpen(false);

  /* Edit Modal */
  const openEditorModal = (): void => {
    setEditingModalOpen(true);
  };
  const closeEditorModal = (): void => setEditingModalOpen(false);

  /* Page Contorls */
  const onIncrementPage = (): void => {
    if (totalPage <= totalPostPage) {
      return;
    }
    setPage(s => s + 1);
    setTotalPostPage(s => limit + limit * page);
  };
  const onDecrementPage = (): void => {
    if (page <= 1) {
      return;
    }
    setPage(s => s - 1);
    setTotalPostPage(s => limit - limit * page);
  };

  return (
    <section>
      <header className={style.header}>
        <button
          type="button"
          className={style.header_button}
          onClick={openSaveModal}
        >
          +
        </button>
        <PostsFilter />
      </header>
      {posts && (
        <PostList posts={filtredPosts} openEditorModal={openEditorModal} />
      )}
      {isSaveModalOpen && (
        <Modal onClose={closeSaveModal} width={500 + 'px'}>
          <PostEditor onClose={closeSaveModal} />
        </Modal>
      )}

      {isEditingModalOpen && (
        <Modal onClose={closeEditorModal} width={500 + 'px'}>
          <PostEditor onClose={closeEditorModal} />
        </Modal>
      )}

      <footer className={style.footer}>
        <button className={style.footer__button} onClick={onDecrementPage}>
          Left
        </button>
        <span className={style.footer__title}>
          Page: {page} / {totalPage / limit}
        </span>
        <button
          className={style.footer__button}
          onClick={() => onIncrementPage()}
        >
          Right
        </button>
      </footer>
    </section>
  );
};

export default Posts;
