import React, { useState, useEffect } from "react";
import {
  DarkModeToggleSwitch,
  UserInputAndAction,
  WeatherDataCard,
} from "../components";
import { GetWeatherData } from "../routes";

export const WeatherPage = () => {
  // UseState
  const [retrievedWeatherData, setRetrievedWeatherData] = useState();
  const [cityInput, setCityInput] = useState("");
  const [countryCodeInput, setCountryCodeInput] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchError, setSearchError] = useState();
  const [isUserInputValidated, setIsUserInputValidated] = useState(false);
  const [isDarkModeToggled, setIsDarkModeToggled] = useState(false);

  // Handler
  const onCallWeatherApi = async (cityName, countryCode) => {
    await GetWeatherData(cityInput, countryCodeInput, cityName, countryCode)
      .then((response) => {
        const filteredSearchHistory = [...searchHistory].filter(
          (data) => data.name !== response.name
        );
        setSearchHistory([response, ...filteredSearchHistory]);
        setRetrievedWeatherData(response);
        setCityInput("");
        setCountryCodeInput("");
        setIsUserInputValidated(false);
      })
      .catch((error) => {
        setSearchError(
          <div>
            No weather information found for the location you entered.
            <br />
            Try a different one!
          </div>
        );
        setIsUserInputValidated(false);
      });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsUserInputValidated(true);
  };

  const onSearchUserInput = () => {
    if (cityInput.length > 0) {
      onCallWeatherApi();
    }
  };

  const onClearUserInput = () => {
    setIsUserInputValidated(false);
    setCityInput("");
    setCountryCodeInput("");
    setSearchError();
  };

  const onInvalidateUserInput = () => {
    setIsUserInputValidated(false);
  };

  const onClearSearchError = () => {
    setSearchError();
  };

  const onSetCityInput = (inputCity) => {
    setCityInput(inputCity);
  };

  const onSetCountryCodeInput = (inputCountryCode) => {
    setCountryCodeInput(inputCountryCode);
  };

  const onRemoveFromSearchHistory = (selectedCountry) => {
    const updatedSearchHistory = searchHistory.filter(
      (data) => data.name !== selectedCountry
    );
    setSearchHistory(updatedSearchHistory);
  };

  const onToggleDarkMode = (event) => {
    setIsDarkModeToggled(event.target.checked);
  };

  // UseEffect
  useEffect(() => {
    if (isUserInputValidated) {
      onSearchUserInput();
    }
  }, [isUserInputValidated]);

  // Renderer
  return (
    <div className={!isDarkModeToggled ? "overallDiv" : "overallDivDark"}>
      <UserInputAndAction
        onInvalidateUserInput={onInvalidateUserInput}
        isUserInputValidated={isUserInputValidated}
        onClearSearchError={onClearSearchError}
        searchError={searchError}
        onClearUserInput={onClearUserInput}
        onSetCityInput={onSetCityInput}
        cityInput={cityInput}
        onSetCountryCodeInput={onSetCountryCodeInput}
        countryCodeInput={countryCodeInput}
        onSubmitForm={onSubmitForm}
        isDarkModeToggled={isDarkModeToggled}
      />
      <DarkModeToggleSwitch
        onToggleDarkMode={onToggleDarkMode}
        isDarkModeToggled={isDarkModeToggled}
      />
      <WeatherDataCard
        retrievedWeatherData={retrievedWeatherData}
        searchHistory={searchHistory}
        onCallWeatherApi={onCallWeatherApi}
        onRemoveFromSearchHistory={onRemoveFromSearchHistory}
        isDarkModeToggled={isDarkModeToggled}
      />
    </div>
  );
};

export default WeatherPage;
