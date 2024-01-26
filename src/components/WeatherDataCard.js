import { WeatherDataDetails, WeatherSearchHistory } from "./";

export const WeatherDataCard = ({
  retrievedWeatherData,
  searchHistory,
  onCallWeatherApi,
  onRemoveFromSearchHistory,
  isDarkModeToggled,
}) => {
  // Renderer
  const padNumber = (number) => {
    return number < 10 ? "0" + number : number;
  };

  const renderDateTime = (unixTimeStamp) => {
    const unixDateTime = new Date(unixTimeStamp * 1000);

    const retrievedDay = unixDateTime.getDay();
    const retrievedMonth = unixDateTime.getMonth() + 1;
    const retrievedYear = unixDateTime.getFullYear();

    const retrieveHours = unixDateTime.getHours();
    const retrieveMinutes = unixDateTime.getMinutes();

    const amOrPm = retrieveHours >= 12 ? "pm" : "am";

    return `${padNumber(retrievedDay)}-${padNumber(retrievedMonth)}-${retrievedYear} ${padNumber(retrieveHours)}:${padNumber(retrieveMinutes)}${amOrPm}`;
  };

  return (
    <div
      className={
        !isDarkModeToggled ? "weatherResultsDiv" : "weatherResultsDivDark"
      }
    >
      {retrievedWeatherData && searchHistory.length > 0 ? (
        <WeatherDataDetails
          retrievedWeatherData={retrievedWeatherData}
          renderDateTime={renderDateTime}
          isDarkModeToggled={isDarkModeToggled}
        />
      ) : (
        ""
      )}
      {searchHistory.length > 0 ? (
        <WeatherSearchHistory
          searchHistory={searchHistory}
          renderDateTime={renderDateTime}
          onCallWeatherApi={onCallWeatherApi}
          onRemoveFromSearchHistory={onRemoveFromSearchHistory}
          isDarkModeToggled={isDarkModeToggled}
        />
      ) : (
        <div
          className={
            !isDarkModeToggled
              ? "noSearchResultsText"
              : "noSearchResultsTextDark"
          }
        >
          Your search history is empty.
          <br />
          Start searching now!
        </div>
      )}
    </div>
  );
};

export default WeatherDataCard;
