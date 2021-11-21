import { IAllWeatherInfo } from "./weatherType";
export enum WeatherType {
  WEATHER_FETCH_START = "WEATHER_FETCH_START",
  WEATHER_FETCH_SUCCESS = "WEATHER_FETCH_SUCCESS",
  WEATHER_FETCH_ERROR = "WEATHER_FETCH_ERROR",
}

export const weatherFetchStart = () => ({
  type: WeatherType.WEATHER_FETCH_START,
});

export const weatherFetchSucces = (weather: IAllWeatherInfo) => ({
  type: WeatherType.WEATHER_FETCH_SUCCESS,
  payload: { weather },
});

export const weatherFetchError = (error: string) => ({
  type: WeatherType.WEATHER_FETCH_ERROR,
  payload: { error },
});
