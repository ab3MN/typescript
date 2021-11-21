import React, { useState } from 'react';
import style from './SearchMovies.module.css';
import { useDispatchAcions } from '../../../hooks/useDispatchAction';

const SearchMovies = () => {
  const [value, setValue] = useState<string>('');
  const { fetchMoviesByQuery } = useDispatchAcions();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!value) {
      return;
    }
    fetchMoviesByQuery(value);
    setValue('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <header className={style.searchbar}>
      <form onSubmit={handleSubmit} className={style.searchForm}>
        <button type="submit" className={style.button}>
          <span className={style.button_label}>Search</span>
        </button>
        <input
          className={style.input}
          onChange={handleChange}
          placeholder="Search movies"
          value={value}
          type="text"
          autoComplete="off"
        />
      </form>
    </header>
  );
};

export default SearchMovies;
