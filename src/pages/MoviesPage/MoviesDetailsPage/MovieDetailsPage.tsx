import React, { FC, useEffect } from "react";
import style from "./MoviesDetailsPage.module.css";
import { useParams, useRouteMatch } from "react-router";
import { Route, Link, Switch } from "react-router-dom";

import { useDispatchAcions } from "../../../hooks/useDispatchAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import MoviesDetails from "../../../components/Movies/MoviesDetails/MoviesDetails";
import routes from "../../../Routes/Routes";

interface IMovieDetailsParams {
  moviesid: string;
}

interface IMovieDetailsMatch {
  url: string | undefined;
  path: string | undefined;
}

const MovieDetailsPage: FC = () => {
  const params = useParams<IMovieDetailsParams>();
  const match = useRouteMatch<IMovieDetailsMatch>();
  const { url, path } = match;

  const { fetchMovieDetails } = useDispatchAcions();
  const { details } = useTypedSelector((state) => state.movies);


  useEffect(() => {
    fetchMovieDetails(params.moviesid);
  });

  return (
    <section className={style.details__page}>
      {details && <MoviesDetails details={details} />}

      <ul className={style.list}>
        <li className={style.list__item}>
          <Link to={`${url}/cast`} className={style.link}>
            Cast
          </Link>
        </li>
        <li className={style.list__item}>
          <Link to={`${url}/reviews`} className={style.link}>
            Review
          </Link>
        </li>
      </ul>

      <Switch>
        <Route
          path={`${path + routes.MOVIE_CAST_PAGE.path}`}
          component={routes.MOVIE_CAST_PAGE.component}
        />
        <Route
          path={`${path + routes.MOVIE_REVIEW_PAGE.path}`}
          component={routes.MOVIE_REVIEW_PAGE.component}
        />
      </Switch>
    </section>
  );
};

export default MovieDetailsPage;
