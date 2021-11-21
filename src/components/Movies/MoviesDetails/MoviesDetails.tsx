import React, { FC } from 'react';
import style from './MoviesDetails.module.css';
import { IMovieDetails } from '../../../redux/movies/moviesTypes';

const MoviesDetails: FC<IMovieDetails> = ({ details }) => {
  const { title, genres, poster_path, vote_average, overview } = details;
  return (
    <article className={style.details}>
      <div className={style.img__container}>
        {poster_path && (
          <img
            className={style.img}
            src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
            alt={title}
          />
        )}
      </div>
      <div className={style.details__text__container}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.score__title}>
          User Score:
          <span className={style.score__item}>{`${vote_average * 10}%`}</span>
        </p>
        <h3 className={style.overview__title}>Overview:</h3>
        <p className={style.overview__body}>{overview}</p>
        <div className={style.genres}>
          <h3 className={style.genres__title}>Genres:</h3>
          <ul className={style.genres__list}>
            {genres?.map(({ id, name }) => (
              <li key={id} className={style.genres__item}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default MoviesDetails;
