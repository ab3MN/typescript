import React, { FC } from 'react';
import style from './GalleryList.module.css';
import { IGalleryItem } from '../../../redux/gallery/galleryType';
import GalleryItem from '../GalleryItem/GalleryItem';

interface IGalleryListProps {
  images: IGalleryItem[];
  openModal: (
    id: string,
  ) => (event: React.MouseEvent<HTMLImageElement>) => void;
}

const GalleryList: FC<IGalleryListProps> = ({ images, openModal }) => {
  return (
    <ul className={style.GalleryList}>
      {images?.map(el => (
        <li key={el.id}>
          <GalleryItem image={el} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default GalleryList;
