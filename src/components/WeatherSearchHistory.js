import { BsFillTrashFill } from "react-icons/bs";
import { MdSearch } from "react-icons/md";

export const WeatherSearchHistory = ({
  searchHistory,
  renderDateTime,
  onCallWeatherApi,
  onRemoveFromSearchHistory,
  isDarkModeToggled,
}) => {
  // Renderer
  return (
    <div
      className={
        !isDarkModeToggled ? "searchHistoryDiv" : "searchHistoryDivDark"
      }
    >
      <div
        className={
          !isDarkModeToggled
            ? "textColor searchHistoryHeader"
            : "textColorDark searchHistoryHeader"
        }
      >
        Search History
      </div>
      {searchHistory.map((data, index) => (
        <div
          key={index}
          className={
            !isDarkModeToggled
              ? "searchHistoryResultDiv"
              : "searchHistoryResultDivDark"
          }
        >
          <div
            className={
              !isDarkModeToggled
                ? "searchHistoryResultTextGroup"
                : "searchHistoryResultTextGroupDark"
            }
          >
            <div>
              {data.name}, {data.sys.country}
            </div>
            <div
              className={
                !isDarkModeToggled
                  ? "searchHistoryResultDateTime"
                  : "searchHistoryResultDateTimeDark"
              }
            >
              {renderDateTime(data.dt)}
            </div>
          </div>
          <div className="flexColumnWithGap">
            <div
              className={
                !isDarkModeToggled
                  ? "searchHistoryResultActionDiv"
                  : "searchHistoryResultActionDivDark"
              }
              onClick={() => onCallWeatherApi(data.name, data.sys.country)}
            >
              <MdSearch
                className={
                  !isDarkModeToggled
                    ? "searchHistoryResultActionIcon"
                    : "searchHistoryResultActionIconDark"
                }
              />
            </div>
            <div
              className={
                !isDarkModeToggled
                  ? "searchHistoryResultActionDiv"
                  : "searchHistoryResultActionDivDark"
              }
              onClick={() => onRemoveFromSearchHistory(data.name)}
            >
              <BsFillTrashFill
                className={
                  !isDarkModeToggled
                    ? "searchHistoryResultActionIcon"
                    : "searchHistoryResultActionIconDark"
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherSearchHistory;
