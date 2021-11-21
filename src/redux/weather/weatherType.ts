import { WeatherType } from "./weatherActions";

export interface IWeatherLocation {
  name: string;
  country: string;
}
export interface IWeatherError {
  error: string;
}

export interface IWeatherCondition {
  icon: string;
  text: string;
}
export interface IWeather {
  temp_c: number;
  feelslike_c: number;
  wind_kph: number;
  wind_degree: number;
  humidity: number;
  condition: IWeatherCondition;
}
export interface ILocationAndWeather {
  location: IWeatherLocation;
  current: IWeather;
}
export interface IAllWeatherInfo {
  weather: ILocationAndWeather;
}

export interface IFetchWeatherStart {
  type: WeatherType.WEATHER_FETCH_START;
}
export interface IFetchWeatherSuccess {
  type: WeatherType.WEATHER_FETCH_SUCCESS;
  payload: IAllWeatherInfo;
}
export interface IFetchWeatherError {
  type: WeatherType.WEATHER_FETCH_ERROR;
  payload: IWeatherError;
}
