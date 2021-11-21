import React from 'react';

import NewsItem from '../NewsItem/NewsItem';
import style from './NewsList.module.css';

const NewsList = ({ news }) => {
  return (
    <ul className={style.list}>
      {news?.map(el => (
        <li key={el?._id}>
          <NewsItem news={el} />
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
