import axios from 'axios';
import { Dispatch } from 'react';
import {
  weatherFetchStart,
  weatherFetchSucces,
  weatherFetchError,
} from './weatherActions';
const baseURL = 'https://api.weatherapi.com/v1/current.json';
const key = '451fc48cbdbd4732b38130404211807';

export const fetchWeather = (q: string) => (d: Dispatch<any>) => {
  d(weatherFetchStart());
  axios
    .get(`${baseURL}?key=${key}&q=${q}&aqi=no`)
    .then(res => d(weatherFetchSucces(res?.data)))
    .catch(error => d(weatherFetchError(error?.message)));
};
