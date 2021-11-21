import React, { useEffect } from "react";
import { useParams } from "react-router";
import MoviesReviews from "../../../components/Movies/MoviesReviews/MoviesReviews";
import { useDispatchAcions } from "../../../hooks/useDispatchAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface IMovieReviewParams {
  moviesid: string;
}

const MoviesReviewPage = () => {
  const params = useParams<IMovieReviewParams>();
  const { fetchMoviesReviews } = useDispatchAcions();
  const { reviews } = useTypedSelector((state) => state.movies);

  useEffect(() => {
    fetchMoviesReviews(params.moviesid);
  });

  return (
    <div>
      <MoviesReviews reviews={reviews} />
    </div>
  );
};

export default MoviesReviewPage;
