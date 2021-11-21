import React, { FC, useState } from 'react';

import style from './NewsForm.module.css';
import { useDispatchAcions } from '../../../hooks/useDispatchAction';

const NewsForm: FC = () => {
  const [news, setNews] = useState<string>('');
  const { fetchNews } = useDispatchAcions();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!news) {
      return;
    }

    fetchNews(news);

    setNews('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setNews(value);
  };

  return (
    <header className={style.searchbar}>
      <form onSubmit={handleSubmit} className={style.searchForm}>
        <button type="submit" className={style.button}>
          <span className={style.button_label}>Search</span>
        </button>
        <input
          className={style.input}
          type="text"
          placeholder="Search news"
          name="news"
          onChange={handleChange}
          value={news}
        />
      </form>{' '}
    </header>
  );
};

export default NewsForm;
