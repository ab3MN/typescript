import React, { useState } from 'react';
import style from './WeatherForm.module.css';
import { useDispatchAcions } from '../../../hooks/useDispatchAction';

const WeatherForm = () => {
  const [value, setValue] = useState('');
  const { fetchWeather } = useDispatchAcions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) {
      return;
    }
    fetchWeather(value);
    setValue('');
  };

  return (
    <header className={style.searchbar}>
      <form onSubmit={handleSubmit} className={style.searchForm}>
        <button type="submit" className={style.button}>
          <span className={style.button_label}>Search</span>
        </button>
        <input
          className={style.input}
          type="text"
          placeholder="Enter location"
          name="location"
          onChange={handleChange}
          value={value}
        />
      </form>{' '}
    </header>
  );
};

export default WeatherForm;
