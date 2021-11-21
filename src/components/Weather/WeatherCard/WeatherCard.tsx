import React, { FC } from "react";
import style from "./WeatherCard.module.css";
import { ILocationAndWeather } from "../../../redux/weather/weatherType";

interface IWeatherCardProps {
  weather: ILocationAndWeather;
}

const WeatherCard: FC<IWeatherCardProps> = ({ weather }) => {
  const { current, location } = weather;
  return (
    <article className={style.weather__card}>
      <div className={style.location}>
        <img alt={current?.condition?.text} src={current?.condition?.icon} />
        <h5 className={style.location__text}>{current?.condition?.text}</h5>
        <h2 className={style.location__name}>{location?.name}</h2>
        <h4 className={style.location__country}> {location?.country}</h4>
      </div>
      <div className={style.weather}>
        <h2 className={style.temp}>{current?.temp_c}°</h2>
        <p className={style.temp__feels}>
          Feels like : {current?.feelslike_c}°
        </p>
        <p className={style.wind}>
          Wind speed:
          <span> {current?.wind_kph} km/h</span>
          <br />
          Wind degree:
          <span> {current?.wind_degree} km/h</span>
        </p>{" "}
        <p className={style.humidity}>
          Humidity:
          <span> {current?.humidity}%</span>
        </p>
      </div>
    </article>
  );
};

export default WeatherCard;
