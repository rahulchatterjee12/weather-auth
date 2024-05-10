import { CircularProgress } from "@mui/material";
import React from "react";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) {
    return (
      <div className="flex justify-center my-2">
        <CircularProgress />
      </div>
    );
  }

  const { name, main, weather, wind } = weatherData;

  const weatherIcon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="flex justify-center flex-col text-center my-5">
      <h2>{name}</h2>
      <div className="flex justify-center">
        <img
          src={weatherIcon}
          alt={weather[0].main}
          className="w-[40px] h-[40px]"
        />
      </div>
      <p>
        {Math.round(main.temp - 273.15)}&deg;C (
        {Math.round(((main.temp - 273.15) * 9) / 5 + 32)}
        &deg;F)
      </p>
      <p>
        Feels like: {Math.round(main.feels_like - 273.15)}&deg;C (
        {Math.round(((main.feels_like - 273.15) * 9) / 5 + 32)}&deg;F)
      </p>
      <p>
        Weather: {weather[0].main} ({weather[0].description})
      </p>
      <p>
        Wind: {wind.speed} m/s ({Math.round(wind.speed * 2.2369)} mph)
      </p>
    </div>
  );
};

export default WeatherCard;
