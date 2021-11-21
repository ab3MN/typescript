import axios from 'axios';
import { Dispatch } from 'react';
import * as ma from './moviesActions';
const KEY = '155381e5ea55326648abc3faf6598daf';
const URL = 'https://api.themoviedb.org/3';

export const fetchMovies = () => (d: Dispatch<any>) => {
  d(ma.fetchMoviesStart());
  axios
    .get(`${URL}/trending/all/day?api_key=${KEY}`)
    .then(res => d(ma.fetchMoviesSuccess(res.data.results)))
    .catch(error => d(ma.fetchMoviesError(error)));
};

export const fetchMoviesByQuery = (query: string) => (d: Dispatch<any>) => {
  d(ma.fetchMoviesStart());
  axios
    .get(`${URL}/search/company?api_key=${KEY}&query=${query}`)
    .then(res => d(ma.fetchMoviesSuccess(res?.data.results)))
    .catch(error => d(ma.fetchMoviesError(error?.message)));
};
export const fetchMovieDetails = (id: string) => (d: Dispatch<any>) => {
  d(ma.fetchDetailsStart());
  axios
    .get(`${URL}/movie/${id}?api_key=${KEY}&language=en-US`)
    .then(res => d(ma.fetchDetailsSucces(res?.data)))
    .catch(error => d(ma.fetchDetailsError(error?.message)));
};

export const fetchMoviesCast = (id: string) => (d: Dispatch<any>) => {
  d(ma.fetchCastStart());
  axios
    .get(`${URL}/movie/${id}/credits?api_key=${KEY}`)
    .then(res => {
      d(ma.fetchCastSuccess(res?.data.cast));
    })
    .catch(error => d(ma.fetchCastError(error?.message)));
};

export const fetchMoviesReviews = (id: string) => (d: Dispatch<any>) => {
  d(ma.fetchReviewsStart());
  axios
    .get(`${URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`)
    .then(res => d(ma.fetchReviewsSuccess(res?.data.results)))
    .catch(error => d(ma.fetchReviewsError(error?.message)));
};
