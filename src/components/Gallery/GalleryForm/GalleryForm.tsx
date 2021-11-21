import React, { FC, useState } from 'react';
import style from './GalleryForm.module.css';
import { useDispatchAcions } from '../../../hooks/useDispatchAction';

interface IGalleryFormProps {
  getQuery: (
    query: string,
  ) => (event: React.ChangeEvent<HTMLFormElement>) => void;
}
const GalleryForm: FC<IGalleryFormProps> = ({ getQuery }) => {
  const [query, setQuery] = useState<string>('');
  const [page] = useState<number>(1);

  const { fetchImages } = useDispatchAcions();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!query) {
      return;
    }

    fetchImages(page, query);

    getQuery(query);

    setQuery('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <header className={style.searchbar}>
      <form className={style.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={style.button}>
          <span className={style.button_label}>Search</span>
        </button>
        <input
          className={style.input}
          name="querry"
          type="text"
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
        />{' '}
      </form>
    </header>
  );
};

export default GalleryForm;
