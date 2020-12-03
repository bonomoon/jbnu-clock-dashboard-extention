import { useState, useEffect } from "react";
import axios from "axios";

import { useGeolocation } from "../../hooks/useGeolocation"

import styles from './Weather.module.css';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const getCelsius = (temp) => temp - 273.15;

const getWeatherApiURL = (lat, lon) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}` 

const getWeatherIconURL = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;

export default function Weather() {
  const [weather, setWeather] = useState({});

  const geo = useGeolocation();

  useEffect(() => {
    if (
      geo.position.latitude !== undefined &&
      geo.position.longitude !== undefined
    ) {
      axios
        .get(getWeatherApiURL(geo.position.latitude, geo.position.longitude))
        .then((response) => {
          setWeather({
            cityName: response.data.name,
            temperature: getCelsius(response.data.main.temp),
            icon: response.data.weather[response.data.weather.length - 1].icon,
          });
        })
        .catch(() => {
          setWeather({
            cityName: "Jeonju",
            temperature: 0,
            icon: "02d",
          });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [geo.position]);

  return (
    <div className={cx("container")}>
      <img
        className={cx("weather-icon")}
        src={getWeatherIconURL(weather.icon)}
        alt={"weather-icon"}
      ></img>
      <div className={cx("weather-content")}>
        <div>
          <span className={cx("weather-temp")}>{weather.temperature}</span>
          <span class={cx("weather-degree")}>°</span>
        </div>
        <span className={cx("weather-city-name")}>{weather.cityName}</span>
      </div>
    </div>
  );
}