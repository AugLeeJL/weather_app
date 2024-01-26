import axios from "axios";

export const GetWeatherData = async (
  cityInput,
  countryCodeInput,
  cityName,
  countryCode
) => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  let apiUrl = "";

  if (cityName && countryCode) {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&APPID=${apiKey}&units=metric`;
  } else if (cityInput.length > 0 && countryCodeInput.length > 0) {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput},${countryCodeInput}&APPID=${apiKey}&units=metric`;
  } else if (cityInput.length > 0) {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&APPID=${apiKey}&units=metric`;
  }

  if (apiUrl.length < 1) {
    return;
  }

  return await axios.get(apiUrl).then((res) => res.data);
};
