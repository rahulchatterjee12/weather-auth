const apiKey = "895284fb2d2c50a520ea537456963d9c";

const fetchWeatherData = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const fetchLocationWeather = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return {
      iconUrl: `https://openweathermap.org/img/wn/${
        data.weather && data.weather[0]?.icon
      }@2x.png`,
      temp: Math.round(data.main && data.main.temp - 273.15),
    };
  } catch (error) {}
};

const fetchAirQualityData = async (coords) => {
  try {
    const url = `http://api.airvisual.com/v2/nearest_city?lat=${coords.lat}&lon=${coords.lon}&key=88ec9941-245a-45e2-82aa-ddbdba8c6ab5`;

    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const fetchFiveDaysForecast = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export {
  fetchWeatherData,
  fetchAirQualityData,
  fetchFiveDaysForecast,
  fetchLocationWeather,
};
