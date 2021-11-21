import { IMovie, ICast, IMovieDetail, IMovieReview } from './moviesTypes';
export enum MoviesType {
  FETCH_MOVIES_START = 'FETCH_MOVIES_START',
  FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR',

  FETCH_MOVIES_DETAILS_START = 'FETCH_MOVIES_DETAILS_START',
  FETCH_MOVIES_DETAILS_SUCCESS = 'FETCH_MOVIES_DETAILS_SUCCESS',
  FETCH_MOVIES_DETAILS_ERROR = 'FETCH_MOVIES_DETAILS_ERROR',

  FETCH_MOVIES_CAST_START = 'FETCH_MOVIES_CAST_START',
  FETCH_MOVIES_CAST_SUCCESS = 'FETCH_MOVIES_CAST_SUCCESS',
  FETCH_MOVIES_CAST_ERROR = 'FETCH_MOVIES_CAST_ERROR',

  FETCH_MOVIES_REVIEWS_START = 'FETCH_MOVIES_REVIEWS_START',
  FETCH_MOVIES_REVIEWS_SUCCESS = 'FETCH_MOVIES_REVIEWS_SUCCESS',
  FETCH_MOVIES_REVIEWS_ERROR = 'FETCH_MOVIES_REVIEWS_ERROR',
}

/* Fetch Movies */
export const fetchMoviesStart = () => ({
  type: MoviesType.FETCH_MOVIES_START,
});
export const fetchMoviesSuccess = (movies: IMovie[]) => ({
  type: MoviesType.FETCH_MOVIES_SUCCESS,
  payload: { movies },
});
export const fetchMoviesError = (error: string) => ({
  type: MoviesType.FETCH_MOVIES_ERROR,
  payload: { error },
});

/* Fetch Cast */
export const fetchCastStart = () => ({
  type: MoviesType.FETCH_MOVIES_CAST_START,
});
export const fetchCastSuccess = (casts: ICast[]) => ({
  type: MoviesType.FETCH_MOVIES_CAST_SUCCESS,
  payload: { casts },
});
export const fetchCastError = (error: string) => ({
  type: MoviesType.FETCH_MOVIES_CAST_ERROR,
  payload: { error },
});

/* Fetch Details */
export const fetchDetailsStart = () => ({
  type: MoviesType.FETCH_MOVIES_DETAILS_START,
});
export const fetchDetailsSucces = (details: IMovieDetail[]) => ({
  type: MoviesType.FETCH_MOVIES_DETAILS_SUCCESS,
  payload: { details },
});
export const fetchDetailsError = (error: string) => ({
  type: MoviesType.FETCH_MOVIES_DETAILS_ERROR,
  payload: { error },
});

/* Fetch Reviews */
export const fetchReviewsStart = () => ({
  type: MoviesType.FETCH_MOVIES_REVIEWS_START,
});
export const fetchReviewsSuccess = (reviews: IMovieReview[]) => ({
  type: MoviesType.FETCH_MOVIES_REVIEWS_SUCCESS,
  payload: { reviews },
});
export const fetchReviewsError = (error: string) => ({
  type: MoviesType.FETCH_MOVIES_REVIEWS_ERROR,
  payload: { error },
});
