import React, { useState, FC } from 'react';
import GalleryForm from './GalleryForm/GalleryForm';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IGalleryItem } from '../../redux/gallery/galleryType';
import GalleryList from './GalleryList/GalleryList';
import GalleryButton from './GalleryButton/GalleryButton';
import Modal from '../shared/Modal/Modal';
import { useDispatchAcions } from '../../hooks/useDispatchAction';

interface IGallery {
  images: IGalleryItem[];
}

const Gallery: FC = () => {
  const { images }: IGallery = useTypedSelector(state => state.gallery);
  const { loadMoreImages } = useDispatchAcions();

  const [show, setShow] = useState<boolean>(false);
  const [largeImg, setLargetImg] = useState<string>('');
  const [tags, setTags] = useState<string | undefined>('');
  const [page, setPage] = useState<number>(2);
  const [query, setQuery] = useState<string>('');

  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);

  const openModal = (id: string): any => {
    const largeImgUrl = getLargeImageURL(id);
    handleShow();

    if (largeImgUrl) {
      setLargetImg(largeImgUrl);
    }
  };

  const getLargeImageURL = (id: string): string | undefined => {
    const tags = images.find(el => el.id === id)?.tags;
    setTags(tags);
    return images.find(el => el.id === id)?.largeImageURL;
  };

  const loadMore = (): void => {
    setPage(s => s + 1);

    loadMoreImages(page, query);
  };

  const getQuery = (q: string): any => {
    setQuery(q);
  };

  return (
    <div>
      <GalleryForm getQuery={getQuery} />
      {images ? (
        <GalleryList images={images} openModal={openModal} />
      ) : (
        <h1>No images for your request</h1>
      )}

      {show && (
        <Modal onClose={handleClose} width={1000 + 'px'}>
          <img src={largeImg} alt={tags} role="presentation" />
        </Modal>
      )}

      {images.length > 0 && <GalleryButton loadMore={loadMore} />}
    </div>
  );
};

export default Gallery;
