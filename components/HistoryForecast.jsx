"use clent";

import React, { useEffect, useState } from "react";
import { fetchPastFiveDaysForecast } from "@/helper/weather/api";

const HistoryForecast = ({ latitude, longitude }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchPastFiveDaysForecast(latitude, longitude).then((res) => {
      setData(res.daily.slice(0, 5));
    });
  }, []);

  return (
    <div className="">
      <h2 className="text-center text-2xl my-5">5-Days Forecast History</h2>
      <div className="flex gap-3 flex-wrap mx-auto justify-center">
        {data &&
          data.map((item, i) => (
            <div key={i} className="border border-white rounded-md p-2">
              <p className="text-xs text-center">
                {new Date(item.dt * 1000).toDateString()}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].main}
                className="w-[50px]"
              />
              <p className="text-xs text-center">
                Min: {Math.round(item.temp.min - 273.15)}
                &deg;C
              </p>
              <p className="text-xs text-center">
                Max: {Math.round(item.temp.max - 273.15)}
                &deg;C
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HistoryForecast;
