// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";

function TickmarkIcon({ color, size }) {
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
                d="M0,32.07A32,32,0,1,1,31.87,64,32,32,0,0,1,0,32.07Zm27.88,12L48,24l-4.35-4.41-16,16.16L20.3,27.9l-4.58,4Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

// Setting default values for the props of Basket
TickmarkIcon.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the Basket
TickmarkIcon.propTypes = {
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

export default TickmarkIcon;