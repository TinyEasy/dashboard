// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";

function LearnIconLine({ color, size }) {
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
                d="M9.26,37c-2.34-.87-4.52-1.7-6.72-2.47C1.27,34,.09,33.51.05,31.93s1.11-2.14,2.4-2.6q13.35-4.8,26.69-9.64a8,8,0,0,1,5.78,0q13.26,4.83,26.54,9.59c.15.06.3.1.45.15C63.13,29.85,64,30.57,64,32s-.92,1.95-2.07,2.37L41.11,41.82c-2,.71-3.94,1.37-5.87,2.14a8.42,8.42,0,0,1-6.39,0C24,42.15,19,40.45,14.09,38.6a2.2,2.2,0,0,0-2.79.69A13.39,13.39,0,0,0,7.9,46.6a4.24,4.24,0,0,0,.29,2,25.34,25.34,0,0,1,1.3,13.27c-.3,2-.81,2.31-2.82,1.81-1.71-.41-3.43-.81-5.13-1.29C0,62-.45,60.89.47,59.63A24,24,0,0,0,5,46.45,14.24,14.24,0,0,1,8.3,38.24C8.59,37.88,8.86,37.5,9.26,37Zm9-1.74c4.57,1.64,8.62,3.16,12.73,4.53a4.37,4.37,0,0,0,2.62-.15c6.56-2.31,13.09-4.7,19.62-7.07.41-.15.79-.38,1.32-.64-.36-.2-.49-.3-.63-.36C47,29,40.11,26.49,33.2,24.07a4.57,4.57,0,0,0-2.78.13c-6.51,2.29-13,4.66-19.46,7-.42.15-.82.37-1.31.6,2.85,1.71,4,1.84,6.66.84L31,27.14c.94-.36,1.84-.5,2.3.61s-.18,1.81-1.22,2.2l-6,2.26Z"
              />
              <path
                className="color-background"
                d="M14.44,42.44a29.46,29.46,0,0,1,3.65,1.37,1.87,1.87,0,0,1,.56,1.53c-.27,3.15-.6,6.29-1,9.42-.14,1,.11,1.69,1.1,2A69,69,0,0,0,27.68,59a34,34,0,0,0,15.53-1.36c3.39-1.18,3.37-1.21,3-4.77-.29-2.61-.51-5.22-.84-7.83-.1-.83.06-1.29.91-1.53,1.07-.29,2.12-.68,3.35-1.08.12.79.25,1.46.32,2.13.38,3.56.63,7.15,1.15,10.69.33,2.26-.44,3.93-2.35,4.78a42.28,42.28,0,0,1-8.53,3.08,39.34,39.34,0,0,1-21.49-1.38,19,19,0,0,1-2.48-1.12c-2.92-1.54-3.5-2.68-3.15-5.92.39-3.61.76-7.23,1.15-10.85C14.25,43.43,14.34,43,14.44,42.44Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

// Setting default values for the props of Basket
LearnIconLine.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the Basket
LearnIconLine.propTypes = {
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

export default LearnIconLine;
