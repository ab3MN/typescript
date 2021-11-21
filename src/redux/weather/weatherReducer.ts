import { combineReducers } from "redux";
import { WeatherType } from "./weatherActions";
import { IFetchWeatherSuccess, IFetchWeatherError } from "./weatherType";

const weatherReducer = (
  state = null,
  { type, payload }: IFetchWeatherSuccess
) => {
  switch (type) {
    case WeatherType.WEATHER_FETCH_SUCCESS:
      return payload.weather || state;
    default:
      return state;
  }
};
const errorReducer = (state = null, { type, payload }: IFetchWeatherError) => {
  switch (type) {
    case WeatherType.WEATHER_FETCH_ERROR:
      return payload.error || state;
    default:
      return state;
  }
};

export default combineReducers({
  weather: weatherReducer,
  error: errorReducer,
});
