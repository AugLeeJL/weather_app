import cloud from "../images/cloud.png";
import sun from "../images/sun.png";

export const WeatherDataDetails = ({
  retrievedWeatherData,
  renderDateTime,
  isDarkModeToggled,
}) => {
  // Renderer
  const renderTemperature = (temperature) => {
    const retrievedTemperature = String(temperature);
    if (retrievedTemperature.indexOf(".") > 0) {
      return retrievedTemperature.substring(
        0,
        retrievedTemperature.indexOf(".")
      );
    }
    return retrievedTemperature;
  };

  return (
    <div className="retrievedWeatherDiv">
      <div className="retrievedWeatherRow1">
        <div className="flexColumn1">
          <div className={!isDarkModeToggled ? "textColor" : "textColorDark"}>
            Today's Weather
          </div>
          <div
            className={
              !isDarkModeToggled
                ? "currentTemperatureDiv"
                : "currentTemperatureDivDark"
            }
          >
            {renderTemperature(retrievedWeatherData.main.temp)}&#xb0;
          </div>
          <div className={!isDarkModeToggled ? "textColor" : "textColorDark"}>
            H: {renderTemperature(retrievedWeatherData.main.temp_max)}
            &#xb0; L: {renderTemperature(retrievedWeatherData.main.temp_min)}
            &#xb0;
          </div>
        </div>
        <div className="flexColumn1">
          <img
            src={!isDarkModeToggled ? sun : cloud}
            alt="Logo"
            className="staticImage"
          />
        </div>
      </div>
      <div
        className={
          !isDarkModeToggled
            ? "retrievedWeatherRow2"
            : "retrievedWeatherRow2Dark"
        }
      >
        <div className="retrievedWeatherCountryText">
          {retrievedWeatherData.name}, {retrievedWeatherData.sys.country}
        </div>
        <div className="retrievedWeatherRow3">
          <div className="flexColumn2">
            <div className="retrievedWeatherDateTime">
              {renderDateTime(retrievedWeatherData.dt)}
            </div>
          </div>
          <div className="flexColumn2">
            <div className="retrievedHumidity">
              Humidity: {retrievedWeatherData.main.humidity}%
            </div>
          </div>
          <div className="flexColumn2">
            <div className="retrievedWeather">
              {retrievedWeatherData.weather[0].main}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDataDetails;
