import { combineReducers } from 'redux';
import { MoviesType } from './moviesActions';
import {
  IFetchDetailsStart,
  IFetchMovieReviewsError,
  IFetchMoviesStart,
  IFetchMovieReviewsStart,
  IFetchCastStart,
  IFetchCastError,
  IFetchDetailsSuccess,
  IFetchMovieReviewsSuccess,
  IFetchMoviesSuccess,
  IFetchMoviesError,
  IFetchCastSuccess,
  IFetchDetailsError,
} from './moviesTypes';

const moviesReducer = (
  state = null,
  { type, payload }: IFetchMoviesSuccess,
) => {
  switch (type) {
    case MoviesType.FETCH_MOVIES_SUCCESS:
      return payload.movies || state;
    default:
      return state;
  }
};

const castsReducer = (state = [], { type, payload }: IFetchCastSuccess) => {
  switch (type) {
    case MoviesType.FETCH_MOVIES_CAST_SUCCESS:
      return payload.casts || state;
    default:
      return state;
  }
};

const reviewsReducer = (
  state = [],
  { type, payload }: IFetchMovieReviewsSuccess,
) => {
  switch (type) {
    case MoviesType.FETCH_MOVIES_REVIEWS_SUCCESS:
      return payload.reviews;
    default:
      return state;
  }
};

const detailsReducer = (
  state = [],
  { type, payload }: IFetchDetailsSuccess,
) => {
  switch (type) {
    case MoviesType.FETCH_MOVIES_DETAILS_SUCCESS:
      return payload.details || state;
    default:
      return state;
  }
};

const errorReducer = (
  state: string = '',
  {
    type,
    payload,
  }:
    | IFetchMoviesError
    | IFetchCastError
    | IFetchDetailsError
    | IFetchMovieReviewsError,
) => {
  switch (type) {
    case MoviesType.FETCH_MOVIES_ERROR:
    case MoviesType.FETCH_MOVIES_CAST_ERROR:
    case MoviesType.FETCH_MOVIES_DETAILS_ERROR:
    case MoviesType.FETCH_MOVIES_REVIEWS_ERROR:
      return payload;
    default:
      return state;
  }
};
const loadingReducer = (
  state = false,
  {
    type,
  }:
    | IFetchMoviesStart
    | IFetchMovieReviewsStart
    | IFetchCastStart
    | IFetchDetailsStart
    | IFetchDetailsSuccess
    | IFetchMovieReviewsSuccess
    | IFetchMoviesSuccess
    | IFetchCastSuccess
    | IFetchDetailsError
    | IFetchMoviesError
    | IFetchCastError
    | IFetchMovieReviewsError,
) => {
  switch (type) {
    case MoviesType.FETCH_MOVIES_START:
    case MoviesType.FETCH_MOVIES_CAST_START:
    case MoviesType.FETCH_MOVIES_REVIEWS_START:
    case MoviesType.FETCH_MOVIES_DETAILS_START:
      return true;
    case MoviesType.FETCH_MOVIES_SUCCESS:
    case MoviesType.FETCH_MOVIES_CAST_SUCCESS:
    case MoviesType.FETCH_MOVIES_REVIEWS_SUCCESS:
    case MoviesType.FETCH_MOVIES_DETAILS_SUCCESS:
    case MoviesType.FETCH_MOVIES_ERROR:
    case MoviesType.FETCH_MOVIES_CAST_ERROR:
    case MoviesType.FETCH_MOVIES_REVIEWS_ERROR:
    case MoviesType.FETCH_MOVIES_DETAILS_ERROR:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  movies: moviesReducer,
  error: errorReducer,
  casts: castsReducer,
  details: detailsReducer,
  reviews: reviewsReducer,
  isLoading: loadingReducer,
});
