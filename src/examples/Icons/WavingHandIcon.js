// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";

function WavingHandIcon({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>basket</title>
      <g id="Basic-Elements" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="Rounded-Icons"
          transform="translate(-1869.000000, -741.000000)"
          fill={colors[color] ? colors[color].main : colors.dark.main}
          fillRule="nonzero"
        >
          <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)">
            <g id="homeicon" transform="translate(153.000000, 450.000000)">
              <path
                className="color-background"
                d="M6.84,29.85c-.28-.36-.51-.67-.74-1A7.73,7.73,0,0,1,7.91,17.61a1.81,1.81,0,0,0,1-2c-.79-5.49,3.16-9.62,8.75-9.18a2.36,2.36,0,0,0,2.48-1c3.15-4.18,8.23-4.55,12-.89C36.49,8.71,40.74,13,45,17.34c.51.52.94,1.11,1.78,2.11.23-1.15.34-1.68.43-2.21A8,8,0,0,1,55,10.49a7.88,7.88,0,0,1,7.63,6.67,20.17,20.17,0,0,1,.17,3.39c0,5.94,0,11.88,0,17.82,0,10.74-5.77,19.85-15.28,23.52-10.38,4-19.93,2.39-28.08-5.45C14.9,52.05,10.47,47.5,6,43c-4.1-4.14-4-8.48.27-12.52C6.46,30.31,6.61,30.1,6.84,29.85ZM57,29.42h.16V19c0-1.54-.55-2.71-2.27-2.66S52.8,17.52,52.82,19a55,55,0,0,1-.08,6.8A4.77,4.77,0,0,1,51,28.84c-1.2.86-2.48.15-3.53-.91-2.84-2.92-5.74-5.78-8.62-8.65L29.39,9.79l-1-1c-1-1-2.2-1.43-3.34-.34s-.76,2.27.27,3.31c3.76,3.79,7.53,7.57,11.26,11.4,1.44,1.48,1.53,3.08.38,4.27s-2.87,1.17-4.4-.34c-3.1-3.05-6.15-6.13-9.22-9.2-1.7-1.7-3.37-3.42-5.11-5.08a2.06,2.06,0,0,0-3.19,0c-.95,1-.7,2.07.2,3,.32.33.66.66,1,1L29,29.57a10.84,10.84,0,0,1,1.21,1.33,2.68,2.68,0,0,1-.4,3.79,2.54,2.54,0,0,1-3.63.08,16.76,16.76,0,0,1-1.31-1.23C21.3,30,17.76,26.46,14.21,22.93c-1-1-2.16-1.49-3.33-.33s-.71,2.3.31,3.32l.7.71,9.87,10c2.08,2.1,2.4,3.79,1,5.16s-2.88,1.08-5-1q-2.49-2.48-5-5c-1-1-2.08-1.58-3.3-.43s-.68,2.37.38,3.43c4.61,4.64,9.11,9.4,13.86,13.9,6,5.67,13.18,6.83,20.81,4.15,7.43-2.62,11.57-8.22,12.37-16A114,114,0,0,0,57,29.42Z"
              />
              <path
                className="color-background"
                d="M11.25,57.9a2,2,0,0,1-1.17,0C7,56.86,5.46,56.37,4,54.92c-.39-.38-3.69-3.65-2.85-6.76,0-.14.51-1.79,1.5-1.93.77-.11,1.47.77,1.95,1.4,1.68,2.18.83,3.34,2.06,4.56a7.8,7.8,0,0,0,4.58,2,1.92,1.92,0,0,1,0,3.67Z"
              />
              <path
                className="color-background"
                d="M36.66,0A12.1,12.1,0,0,1,43.4,2.89c.47.41,4,3.59,3.32,6.76-.21.89-.83,2.13-1.6,2.16-.6,0-1.3-.69-1.63-1.19a1.65,1.65,0,0,1-.25-.46c-.64-3.79-2.66-5.92-6.53-6.46a2.47,2.47,0,0,1-1.42-2C35.37,1,36.35.36,36.66,0Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

// Setting default values for the props of Basket
WavingHandIcon.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the Basket
WavingHandIcon.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "white",
  ]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default WavingHandIcon;
