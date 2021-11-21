import React, { FC } from 'react';
import noPhoto from '../../../img/Photo.png';
import style from './MoviesCast.module.css';
import { ICasts } from '../../../redux/movies/moviesTypes';

const MoviesCast: FC<ICasts> = ({ casts }) => {
  return (
    <article className={style.cast}>
      <ul className={style.cast__list}>
        {casts?.map(({ id, profile_path, name, character }) => (
          <li key={id} className={style.cast__list__item}>
            {profile_path ? (
              <img
                className={style.img}
                src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
                alt={name}
              />
            ) : (
              <img src={noPhoto} alt={name} className={style.img} />
            )}
            <div>
              <h3 className={style.name}>{name}</h3>
              <p className={style.character}>{character}</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default MoviesCast;
