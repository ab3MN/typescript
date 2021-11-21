import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import style from './MoviesList.module.css';

import routes from '../../../Routes/Routes';
import { IMovie } from '../../../redux/movies/moviesTypes';

interface IMovieListProps {
  items: IMovie[];
}

const MovieList: FC<IMovieListProps> = ({ items }) => {
  return (
    <ul className={style.ul}>
      {items?.map(({ id, name, title }) => (
        <li key={id} className={style.list}>
          <Link to={`${routes.MOVIES_PAGE.path}/${id}`} className={style.link}>
            {title ? title : name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
