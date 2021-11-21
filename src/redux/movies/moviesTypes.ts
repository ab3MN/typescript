import { MoviesType } from './moviesActions';

export interface IMovieError {
  error: string;
}
/* Movies */
export interface IMovie {
  title: string;
  name: string;
  id: number;
}
export interface IMovies {
  movies: IMovie[];
}

export interface IFetchMoviesStart {
  type: MoviesType.FETCH_MOVIES_START;
}
export interface IFetchMoviesSuccess {
  type: MoviesType.FETCH_MOVIES_SUCCESS;
  payload: IMovies;
}
export interface IFetchMoviesError {
  type: MoviesType.FETCH_MOVIES_ERROR;
  payload: IMovieError;
}

/* Cast */
export interface ICast {
  id: number;
  profile_path: string;
  name: string;
  character: string;
}
export interface ICasts {
  casts: ICast[];
}
export interface IFetchCastStart {
  type: MoviesType.FETCH_MOVIES_CAST_START;
}
export interface IFetchCastSuccess {
  type: MoviesType.FETCH_MOVIES_CAST_SUCCESS;
  payload: ICasts;
}
export interface IFetchCastError {
  type: MoviesType.FETCH_MOVIES_CAST_ERROR;
  payload: IMovieError;
}

/* Details */
export interface IMovieDetail {
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  genres: [];
}
export interface IMovieDetails {
  details: IMovieDetail;
}
export interface IFetchDetailsStart {
  type: MoviesType.FETCH_MOVIES_DETAILS_START;
}
export interface IFetchDetailsSuccess {
  type: MoviesType.FETCH_MOVIES_DETAILS_SUCCESS;
  payload: IMovieDetails;
}
export interface IFetchDetailsError {
  type: MoviesType.FETCH_MOVIES_DETAILS_ERROR;
  payload: IMovieError;
}

/* Reviews */
export interface IMovieReview {
  id: string;
  author: string;
  content: string;
}
export interface IMovieReviews {
  reviews: IMovieReview[];
}
export interface IFetchMovieReviewsStart {
  type: MoviesType.FETCH_MOVIES_REVIEWS_START;
}
export interface IFetchMovieReviewsSuccess {
  type: MoviesType.FETCH_MOVIES_REVIEWS_SUCCESS;
  payload: IMovieReviews;
}
export interface IFetchMovieReviewsError {
  type: MoviesType.FETCH_MOVIES_REVIEWS_ERROR;
  payload: IMovieError;
}
