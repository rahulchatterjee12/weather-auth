"use client";
import { fetchFiveDaysForecast } from "../helper/weather/api";
import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Forecast = ({ city }) => {
  const { t } = useTranslation();
  const [forecast, setForecast] = useState();
  const fetchCityData = async () => {
    const response = await fetchFiveDaysForecast(city);
    setForecast(response?.list?.slice(0, 1));
  };

  useEffect(() => {
    if (city) fetchCityData();
  }, [city]);

  if (!forecast) {
    return (
      <div className="flex justify-center my-2">
        <CircularProgress />
      </div>
    );
  }

  let dates = [];

  const forecastItems = forecast.map((day) => {
    const date = new Date(day.dt * 1000);
    dates.push(date);
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" });
    const highTemp = day.main.temp_max;
    const lowTemp = day.main.temp_min;
    const weatherIcon = day.weather[0].icon;

    return (
      <div key={day.dt} className="text-sm">
        <p>{dayOfWeek}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt={day.weather[0].main}
          className="w-[50px]"
        />
        <p className="text-xs">
          {t("high")} {Math.round(highTemp - 273.15)}&deg;C
        </p>
        <p className="text-xs">
          {t("low")} {Math.round(lowTemp - 273.15)}&deg;C
        </p>
      </div>
    );
  });

  console.log(dates);

  return (
    <div className="flex justify-center my-4 mx-4 md:mx-0">
      <div>
        <h2 className="text-center mb-3">{t("forecast_title")}</h2>
        <div className="flex flex-wrap gap-2 mx-auto">{forecastItems}</div>
      </div>
    </div>
  );
};

export default Forecast;
