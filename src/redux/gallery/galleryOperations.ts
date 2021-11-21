import axios from 'axios';
import { Dispatch } from 'react';
import {
  fetchImagestart,
  fetchImagesSucces,
  fetchImagesError,
  loadMoreImagesStart,
  loadMoreImagesSuccess,
  loadMoreImagesError,
} from './galleryActions';

const baseUrl = 'https://pixabay.com/api';
const key = '17165161-1d54c685ea0a2bff5ee7aa4bf';

export const fetchImages = (p: number, q: string) => (d: Dispatch<any>) => {
  d(fetchImagestart());
  axios
    .get(
      `${baseUrl}/?q=${q}&page=${p}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(res => d(fetchImagesSucces(res?.data?.hits)))
    .catch(error => d(fetchImagesError(error?.message)));
};

export const loadMoreImages = (p: number, q: string) => (d: Dispatch<any>) => {
  d(loadMoreImagesStart());
  axios
    .get(
      `${baseUrl}/?q=${q}&page=${p}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(res => {
      d(loadMoreImagesSuccess(res?.data?.hits));
    })
    .catch(error => d(loadMoreImagesError(error?.message)));
};
