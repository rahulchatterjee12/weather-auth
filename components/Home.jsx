"use client";

import React, { useState, useEffect } from "react";

import { fetchAirQualityData, fetchWeatherData } from "@/helper/weather/api";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/[locale]/firebase/config";
import { Avatar, Menu, MenuItem, Tooltip } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { addCityToFavorites, getFavoriteCities } from "@/helper/city/api";
import CityInput from "./CityInput";
import WeatherCard from "./WeatherCard";
import AirQuality from "./AirQuality";
import Forecast from "./Forecast";
import Map from "./Map";
import { useTranslation } from "react-i18next";
import LanguageChanger from "./LanguageChanger";

const Home = () => {
  const { t } = useTranslation();
  const [selectedCity, setSelectedCity] = useState("Kolkata");
  const [weatherData, setWeatherData] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Logout = () => {
    signOut(auth);
    sessionStorage.removeItem("user");
    router.push("/sign-up");
  };

  useEffect(() => {
    if (weatherData) {
      fetchAirQualityData(weatherData.coord)
        .then((airQualityResponse) => {
          setAirQualityData(airQualityResponse.data);
        })
        .catch((err) => {
          setAirQualityData(null);
        });
    }
  }, [weatherData]);

  useEffect(() => {
    const fetchCityData = async () => {
      fetchWeatherData(selectedCity)
        .then((weatherResponse) => {
          setWeatherData(weatherResponse);
        })
        .catch((err) => {
          setWeatherData(null);
        });
    };

    fetchCityData();
  }, [selectedCity]);

  const handleCityChange = (newCity) => {
    setSelectedCity(newCity);
  };

  const handleFavoriteFetch = async () => {
    console.log(user.uid);
    if (user?.uid) {
      const storedFavorites = await getFavoriteCities(user.uid);
      console.log(storedFavorites);
    }
    // if (storedFavorites) {
    //   setFavorites(JSON.parse(storedFavorites));
    // }
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

  // useEffect(() => {
  //   if (user) {
  //     handleFavoriteFetch();
  //   }
  // }, [user]);

  return (
    <>
      <div className="">
        <div className="flex justify-between mx-3 md:mx-20 mb-5 items-center">
          <h1 className="text-center text-2xl my-3 font-semibold font-serif">
            {t("common:title")}
          </h1>
          <div className="flex items-center gap-2">
            <LanguageChanger />
            {user ? (
              <Tooltip title="Profile">
                <Avatar
                  sx={{ bgcolor: deepOrange[500], cursor: "pointer" }}
                  onClick={handleClick}
                >
                  U
                </Avatar>
              </Tooltip>
            ) : (
              <Link
                className="border border-white rounded-full px-2 py-1"
                href="/sign-in"
              >
                Sign In
              </Link>
            )}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>User name</MenuItem>

              <MenuItem onClick={Logout}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
        <CityInput
          selectedCity={selectedCity}
          onCityChange={handleCityChange}
          favorites={favorites}
          onFavoriteAdd={handleFavoriteAdd}
          onFavoriteRemove={handleFavoriteRemove}
          setSelectedCity={setSelectedCity}
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
                setSelectedCity={setSelectedCity}
              />
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default Home;
