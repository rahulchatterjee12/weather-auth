import { CircularProgress } from "@mui/material";
import React from "react";

const AirQuality = ({ airQualityData }) => {
  const aqi = airQualityData?.current?.pollution?.aqius;

  let aqiClass;
  let healthMessage;

  if (aqi) {
    if (aqi <= 50) {
      aqiClass = "good";
      healthMessage = "Good air quality.";
    } else if (aqi <= 100) {
      aqiClass = "moderate";
      healthMessage = "Moderate air quality.";
    } else if (aqi <= 150) {
      aqiClass = "unhealthy-for-sensitive-groups";
      healthMessage = "Unhealthy for sensitive groups.";
    } else if (aqi <= 200) {
      aqiClass = "unhealthy";
      healthMessage = "Unhealthy.";
    } else if (aqi <= 300) {
      aqiClass = "very-unhealthy";
      healthMessage = "Very unhealthy.";
    } else {
      aqiClass = "hazardous";
      healthMessage = "Hazardous.";
    }
  }

  return (
    <div className={`flex justify-center`}>
      <h3 className="whitespace-nowrap">
        Air Quality Index (AQI):{" "}
        {aqi ? (
          <span className={`${aqiClass}`}>
            {" "}
            {aqi} <p>{healthMessage}</p>
          </span>
        ) : (
          <CircularProgress size={15} />
        )}
      </h3>
    </div>
  );
};

export default AirQuality;
