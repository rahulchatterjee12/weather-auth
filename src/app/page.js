"use client";

import React, { useState, useEffect } from "react";
import CitySelector from "../components/CitySelector";
import WeatherCard from "../components/WeatherCard";
import AirQuality from "../components/AirQuality";
import Map from "../components/Map";
import Forecast from "../components/Forecast";
import { fetchAirQualityData, fetchWeatherData } from "@/helper/weather/api";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("Kolkata");
  const [weatherData, setWeatherData] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (weatherData) {
      fetchAirQualityData(weatherData.coord).then((airQualityResponse) => {
        setAirQualityData(airQualityResponse.data);
      });
    }
  }, [weatherData]);

  useEffect(() => {
    const fetchCityData = async () => {
      const weatherResponse = await fetchWeatherData(selectedCity);
      setWeatherData(weatherResponse);
    };

    fetchCityData();

    // Load favorites from localStorage (optional)
    const storedFavorites = localStorage.getItem("weather-dashboard-favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, [selectedCity]);

  const handleCityChange = (newCity) => {
    setSelectedCity(newCity);
  };

  const handleFavoriteAdd = (city) => {
    setFavorites([...favorites, city]);
    localStorage.setItem(
      "weather-dashboard-favorites",
      JSON.stringify([...favorites, city])
    );
  };

  const handleFavoriteRemove = (city) => {
    setFavorites(favorites.filter((favCity) => favCity !== city));
    localStorage.setItem(
      "weather-dashboard-favorites",
      JSON.stringify(favorites.filter((favCity) => favCity !== city))
    );
  };

  return (
    <>
      <div className="">
        <h1 className="text-center text-2xl my-3 font-semibold font-serif">
          Weather Dashboard
        </h1>
        <CitySelector
          selectedCity={selectedCity}
          onCityChange={handleCityChange}
          favorites={favorites}
          onFavoriteAdd={handleFavoriteAdd}
          onFavoriteRemove={handleFavoriteRemove}
        />
        <main>
          {weatherData && (
            <>
              <WeatherCard weatherData={weatherData} />
              <AirQuality airQualityData={airQualityData} />
              <Forecast city={selectedCity} />
              <Map
                city={selectedCity}
                weatherData={weatherData}
                airQualityData={airQualityData}
              />
            </>
          )}
        </main>
      </div>
    </>
  );
}
