// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";

function CameraIcon({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 450"
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
                d="M511.64,130.24c-.22-38.43-27.43-64.89-66.1-65.8-16-.38-32.05.14-48.07-.12-30-.49-22.84,4.51-32.45-23.53-9.43-27.5-24.08-40-51-40.38q-58.49-.79-117,0C172,.81,156.41,13.19,148.15,37,146.23,42.52,144,48,142.76,53.73c-1.78,8.3-6.31,11-14.71,10.79C109.37,64,90.66,64.3,72,64.38,26.3,64.55.17,90.37.1,135.81Q-.09,256.76.1,377.7C.17,423.1,26.32,449,72,449.07q92.16.15,184.31,0c62.5,0,125,.25,187.51-.09,39.94-.22,67.57-26.61,67.8-65.66Q512.38,256.79,511.64,130.24ZM255.54,352.91c-53.34-.08-97.07-44-96.52-97,.55-53.15,44.23-95.62,98.11-95.39,52.45.23,95.72,43.69,95.72,96.17C352.86,309.79,309.16,353,255.54,352.91Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

// Setting default values for the props of Basket
CameraIcon.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the Basket
CameraIcon.propTypes = {
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

export default CameraIcon;