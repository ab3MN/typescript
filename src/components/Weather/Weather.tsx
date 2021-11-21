import React, { FC } from 'react';
import WeatherForm from './WeatherForm/WeatherForm';
import WeatherCard from './WeatherCard/WeatherCard';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Weather: FC = () => {
  const { weather } = useTypedSelector(state => state.weather);
  return (
    <>
      <WeatherForm />
      <main>{weather && <WeatherCard weather={weather} />}</main>
    </>
  );
};

export default Weather;
