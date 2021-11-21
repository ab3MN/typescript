import React, { useEffect } from "react";
import { useParams } from "react-router";
import MoviesCast from "../../../components/Movies/MoviesCast/MoviesCast";
import { useDispatchAcions } from "../../../hooks/useDispatchAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface IMovieCastParams {
  moviesid: string;
}

const MoviesCastPage = () => {
  const params = useParams<IMovieCastParams>();
  const { fetchMoviesCast } = useDispatchAcions();
  const { casts } = useTypedSelector((state) => state.movies);

  useEffect(() => {
    fetchMoviesCast(params.moviesid);
  });

  return (
    <div>
      <MoviesCast casts={casts} />
    </div>
  );
};

export default MoviesCastPage;
