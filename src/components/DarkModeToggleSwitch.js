import { Form } from "react-bootstrap";

export const DarkModeToggleSwitch = ({
  onToggleDarkMode,
  isDarkModeToggled,
}) => {
  //Renderer
  return (
    <div className="darkModeDiv">
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Dark Mode"
          checked={isDarkModeToggled}
          onChange={(event) => onToggleDarkMode(event)}
          className="darkModeToggleSwitch"
        />
      </Form>
    </div>
  );
};

export default DarkModeToggleSwitch;
