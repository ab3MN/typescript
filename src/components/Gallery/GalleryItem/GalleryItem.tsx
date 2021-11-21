import React, { FC } from 'react';
import style from './GalleryItem.module.css';
import { IGalleryItem } from '../../../redux/gallery/galleryType';

interface IGalleryItemProps {
  image: IGalleryItem;
  openModal: (
    id: string,
  ) => (event: React.MouseEvent<HTMLImageElement>) => void;
}

const GalleryItem: FC<IGalleryItemProps> = ({ image, openModal }) => {
  const { id, tags, webformatURL } = image;
  return (
    <img
      className={style.GalleryItem_image}
      id={id}
      src={webformatURL}
      alt={tags}
      role="presentation"
      onClick={(event: React.MouseEvent<HTMLImageElement>) => {
        openModal(id);
      }}
    />
  );
};

export default GalleryItem;
