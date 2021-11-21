import React, { FC } from 'react';
import { INews } from '../NewsType';

import style from './NewsItem.module.css';

interface NewsItemProps {
  news: INews;
}

const NewsItem: FC<NewsItemProps> = ({ news }) => {
  const { title, summary, topic } = news;
  return (
    <article className={style.item}>
      <h3 className={style.item__title}>{title}</h3>
      <p className={style.item__category}>
        Category: <span className={style.item__topic}>{topic}</span>
      </p>
      <p className={summary ? style.item__text : style.without_summary}>
        {summary ? summary : <span>Without summary</span>}
      </p>
    </article>
  );
};

export default NewsItem;
