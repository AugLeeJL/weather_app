import { Button, FloatingLabel, Form } from "react-bootstrap";
import { MdSearch } from "react-icons/md";
import { GrClear } from "react-icons/gr";

export const UserInputAndAction = ({
  onInvalidateUserInput,
  isUserInputValidated,
  onClearSearchError,
  searchError,
  onClearUserInput,
  onSetCityInput,
  cityInput,
  onSetCountryCodeInput,
  countryCodeInput,
  onSubmitForm,
  isDarkModeToggled,
}) => {
  // Handler
  const onCityInputChange = (item) => {
    onClearSearchError();
    onInvalidateUserInput();
    onSetCityInput(item.target.value);
  };

  const onCountryCodeInputChange = (item) => {
    onClearSearchError();
    onSetCountryCodeInput(item.target.value);
  };

  // Renderer
  return (
    <div className="userInputAndActionColumnDiv">
      <Form noValidate onSubmit={onSubmitForm}>
        <div className="userInputAndActionRowDiv">
          <Form.Group controlId="cityValidation" className="cityInput">
            <FloatingLabel
              label="City"
              controlId="floatingInputCity"
              className={!isDarkModeToggled ? "" : "floatingLabelTextDark"}
            >
              <Form.Control
                placeholder="City"
                required
                size="lg"
                className={
                  !isDarkModeToggled ? "cityFormControl" : "cityFormControlDark"
                }
                isInvalid={isUserInputValidated && !cityInput.length > 0}
                value={cityInput}
                onChange={(item) => {
                  onCityInputChange(item);
                }}
              />
              <Form.Control.Feedback
                type="invalid"
                tooltip
                className="cityError"
              >
                Please provide a city.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="countryCodeInput">
            <FloatingLabel
              label="Country Code"
              controlId="floatingInputCountryCode"
              className={!isDarkModeToggled ? "" : "floatingLabelTextDark"}
            >
              <Form.Control
                placeholder="Country Code"
                size="lg"
                className={
                  !isDarkModeToggled
                    ? "countryCodeFormControl"
                    : "countryCodeFormControlDark"
                }
                value={countryCodeInput}
                onChange={(item) => {
                  onCountryCodeInputChange(item);
                }}
              />
            </FloatingLabel>
          </Form.Group>
          <div className="flexColumnWithGap">
            <Button
              className={
                !isDarkModeToggled ? "searchButton" : "searchButtonDark"
              }
              type="submit"
            >
              <MdSearch className="searchButtonIcon" />
            </Button>
            <Button
              className={!isDarkModeToggled ? "clearButton" : "clearButtonDark"}
              onClick={onClearUserInput}
            >
              <GrClear className="clearButtonIcon" />
            </Button>
          </div>
        </div>
        {searchError && (
          <div
            className={!isDarkModeToggled ? "searchError" : "searchErrorDark"}
          >
            {searchError}
          </div>
        )}
      </Form>
    </div>
  );
};

export default UserInputAndAction;
