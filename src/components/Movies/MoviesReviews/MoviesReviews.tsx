import React, { FC } from 'react';
import { IMovieReviews } from '../../../redux/movies/moviesTypes';

import style from './MoviesReviews.module.css';

const MoviesReviews: FC<IMovieReviews> = ({ reviews }) => {
  return (
    <article className={style.reviews}>
      <ul>
        {reviews?.map(({ id, author, content }) => (
          <li key={id} className={style.list__item}>
            <h3 className={style.reviews__title}>
              Author :{' '}
              <span className={style.reviews__title_name}>{author}</span>
            </h3>
            <p className={style.reviews__text}>
              <span className={style.space}></span> {content}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default MoviesReviews;
