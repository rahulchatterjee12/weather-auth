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

  const weatherIcon = `https://openweathermap.org/img/wn/${
    weather && weather[0]?.icon
  }@2x.png`;

  return (
    <div className="flex justify-center flex-col text-center my-5">
      <h2>{name}</h2>
      <div className="flex justify-between mx-4 items-center md:justify-center md:gap-10">
        <div className="text-start">
          <p>Weather: {weather && weather[0].main}</p>
          <p className="text-6xl">
            {Math.round(main && main.temp - 273.15)}&deg;C
          </p>
          <p>
            Feels like: {Math.round(main && main.feels_like - 273.15)}&deg;C
          </p>
          <p>Wind: {wind && wind.speed} m/s</p>
        </div>
        <img
          src={weatherIcon}
          alt={weather && weather[0].main}
          className="w-[150px] h-[150px]"
        />
      </div>
    </div>
  );
};

export default WeatherCard;
