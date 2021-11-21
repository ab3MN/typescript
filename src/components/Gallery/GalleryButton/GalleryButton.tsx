import React, { FC } from 'react';

import style from './GalleryButton.module.css';

interface IBtn {
  loadMore: () => void;
}

const GalleryButton: FC<IBtn> = ({ loadMore }) => (
  <button type="button" onClick={loadMore} className={style.Button}>
    Load more{' '}
  </button>
);

export default GalleryButton;
