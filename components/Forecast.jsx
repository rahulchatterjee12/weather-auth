"use client";
import { fetchFiveDaysForecast } from "../helper/weather/api";
import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function formatDateTime(datetimeString) {
  // Parse the datetime string
  var dateObj = new Date(datetimeString);

  // Get day, month, and year
  var day = dateObj.getDate();
  var month = dateObj.toLocaleString("default", { month: "long" });
  var year = dateObj.getFullYear();

  // Get time
  var hours = dateObj.getHours();
  var minutes = dateObj.getMinutes();

  // Format time
  var time =
    hours > 12
      ? hours - 12 + ":" + (minutes < 10 ? "0" : "") + minutes + " PM"
      : hours + ":" + (minutes < 10 ? "0" : "") + minutes + " AM";

  // Format date
  var today = new Date();
  var yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  var formattedDate;
  if (dateObj.toDateString() === today.toDateString()) {
    formattedDate = "Today";
  } else if (dateObj.toDateString() === yesterday.toDateString()) {
    formattedDate = "Yesterday";
  } else {
    formattedDate = day + " " + month + " " + year;
  }

  return {
    date: formattedDate,
    time: time,
  };
}

function groupDatetimeByDay(datetimeArray) {
  const groupedDatetime = {};
  datetimeArray.forEach((datetime) => {
    const date = new Date(datetime.dt * 1000);
    const dateString = date.toDateString();
    if (!groupedDatetime[dateString]) {
      groupedDatetime[dateString] = [];
    }
    groupedDatetime[dateString].push({ ...datetime, dt: formatDateTime(date) });
  });
  return Object.values(groupedDatetime);
}

const Forecast = ({ city }) => {
  const { t } = useTranslation();
  const [forecast, setForecast] = useState();
  const fetchCityData = async () => {
    const response = await fetchFiveDaysForecast(city.name);
    setForecast(response?.list?.slice(0, 40));
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

  const ForecastItem = () => {
    let dates = [];

    const forecastItems = forecast.map((day) => {
      dates.push(day);
    });

    const forecastData = groupDatetimeByDay(dates);
    return (
      <>
        {forecastData &&
          forecastData.slice(0, 5).map((day, i) => (
            <div key={i}>
              <h2>{day[0].dt.date}</h2>
              <div className="border-b border-white flex gap-2 mb-2 p-3">
                {day.map((time, index) => (
                  <div key={index}>
                    <p className="text-xs text-center">{time.dt.time}</p>
                    <img
                      src={`https://openweathermap.org/img/wn/${time.weather[0].icon}@2x.png`}
                      alt={time.weather[0].main}
                      className="w-[50px]"
                    />
                    <p className="text-xs text-center">
                      {Math.round(time.main.temp_max - 273.15)}
                      &deg;C
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </>
    );
  };

  return (
    <div className="flex justify-center my-4 mx-4 md:mx-0">
      <div>
        <h2 className="text-center mb-3">{t("forecast_title")}</h2>
        <div className="">
          <ForecastItem />
        </div>
      </div>
    </div>
  );
};

export default Forecast;
