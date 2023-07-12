// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";

function StripeCheckoutIcon({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 150 150"
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
                d="M146,0H3.73A3.73,3.73,0,0,0,0,3.73H0V30.27A3.73,3.73,0,0,0,3.73,34H146a4,4,0,0,0,4-4V4A4,4,0,0,0,146,0Zm3,30a3,3,0,0,1-3,3H3.73A2.74,2.74,0,0,1,1,30.27V3.73A2.74,2.74,0,0,1,3.73,1H146a3,3,0,0,1,3,3Z"
              />
              <path
                className="color-background"
                d="M17.07,11.24h-4.3V22h1.92V17.84h2.38c2.4,0,3.9-1.16,3.9-3.3S19.47,11.24,17.07,11.24Zm-.1,5H14.69v-3.3H17c1.38,0,2.11.59,2.11,1.65s-.76,1.6-2.11,1.6Z"
              />
              <path
                className="color-background"
                d="M25.1,14a3.77,3.77,0,0,0-3.81,3.73c0,.12,0,.24,0,.36a3.81,3.81,0,0,0,7.59.68,3.86,3.86,0,0,0,0-.68A3.77,3.77,0,0,0,25.47,14Zm0,6.67c-1.22,0-2-1-2-2.58s.76-2.58,2-2.58,2,1,2,2.58-.79,2.57-2,2.57Z"
              />
              <polygon
                className="color-background"
                points="36.78 19.35 35.37 14.13 33.89 14.13 32.49 19.35 31.07 14.13 29.22 14.13 31.59 22.01 33.15 22.01 34.59 16.85 36.03 22.01 37.59 22.01 39.96 14.13 38.18 14.13 36.78 19.35"
              />
              <path
                className="color-background"
                d="M44,14a3.84,3.84,0,0,0-3.76,3.9c0,.06,0,.13,0,.19a3.79,3.79,0,0,0,3.48,4.08h.35A3.47,3.47,0,0,0,47.49,20L46,19.38a1.77,1.77,0,0,1-1.83,1.26A2.12,2.12,0,0,1,42,18.57v-.1h5.52v-.6C47.54,15.71,46.32,14,44,14Zm-1.93,3.13A1.91,1.91,0,0,1,44,15.5a1.57,1.57,0,0,1,1.69,1.42v.2Z"
              />
              <path
                className="color-background"
                d="M50.69,15.3V14.13h-1.8V22h1.8V17.87a1.89,1.89,0,0,1,1.77-2h.23a3.64,3.64,0,0,1,.66,0v-1.8h-.51A2.27,2.27,0,0,0,50.69,15.3Z"
              />
              <path
                className="color-background"
                d="M57.48,14a3.84,3.84,0,0,0-3.76,3.9c0,.06,0,.13,0,.19a3.79,3.79,0,0,0,3.48,4.08h.35A3.48,3.48,0,0,0,60.93,20l-1.54-.59a1.77,1.77,0,0,1-1.83,1.26,2.12,2.12,0,0,1-2.1-2.14v0H61v-.6C61,15.71,59.76,14,57.48,14Zm-1.93,3.13a1.93,1.93,0,0,1,1.92-1.62,1.57,1.57,0,0,1,1.69,1.42v.2Z"
              />
              <path
                className="color-background"
                d="M67.56,15a2.83,2.83,0,0,0-2.26-1c-2.21,0-3.47,1.85-3.47,4.09s1.26,4.09,3.47,4.09a2.83,2.83,0,0,0,2.26-1V22h1.8V11.24h-1.8Zm0,3.35a2,2,0,0,1-1.7,2.26l-.3,0c-1.31,0-2-1-2-2.52s.7-2.52,2-2.52a2,2,0,0,1,2,2.29Z"
              />
              <path
                className="color-background"
                d="M79.31,14A2.88,2.88,0,0,0,77,15V11.24H75.2V22H77v-.83a2.87,2.87,0,0,0,2.27,1c2.2,0,3.46-1.86,3.46-4.09S81.51,14,79.31,14ZM79,20.6a2,2,0,0,1-2-2c0-.1,0-.2,0-.3v-.47c0-1.48.84-2.29,2-2.29s2,1,2,2.52S80.25,20.6,79,20.6Z"
              />
              <path
                className="color-background"
                d="M86.93,19.66,85,14.13H83.1L86,21.72l-.3.74a1,1,0,0,1-1.14.79q-.3,0-.6,0v1.51a4.48,4.48,0,0,0,.73,0,2.67,2.67,0,0,0,2.78-2l3.24-8.62H88.82Z"
              />
              <path
                className="color-background"
                d="M125,12.43a3,3,0,0,0-2.13.87l-.14-.69h-2.39V25.53l2.72-.59V21.81a3,3,0,0,0,1.93.7c1.94,0,3.72-1.59,3.72-5.11C128.71,14.18,126.91,12.43,125,12.43Zm-.65,7.63a1.6,1.6,0,0,1-1.28-.52V15.43a1.65,1.65,0,0,1,1.3-.55c1,0,1.68,1.13,1.68,2.58S125.36,20.06,124.35,20.06Z"
              />
              <path
                className="color-background"
                d="M133.73,12.43c-2.62,0-4.21,2.26-4.21,5.11,0,3.37,1.88,5.08,4.56,5.08a6,6,0,0,0,3-.73V19.64a5.88,5.88,0,0,1-2.7.62c-1.08,0-2-.39-2.14-1.7h5.38v-1C137.71,14.69,136.35,12.43,133.73,12.43Zm-1.47,4.07c0-1.26.77-1.79,1.45-1.79s1.4.53,1.4,1.79Z"
              />
              <path
                className="color-background"
                d="M113,13.36l-.17-.82h-2.32v9.71h2.68V15.67a1.88,1.88,0,0,1,2-.58V12.54A1.8,1.8,0,0,0,113,13.36Z"
              />
              <path
                className="color-background"
                d="M99.46,15.46c0-.44.36-.61.93-.61a6,6,0,0,1,2.7.72V12.94a7,7,0,0,0-2.7-.51c-2.21,0-3.68,1.18-3.68,3.16,0,3.1,4.14,2.6,4.14,3.93,0,.52-.44.69-1,.69a6.76,6.76,0,0,1-3-.9V22a7.38,7.38,0,0,0,3,.64c2.26,0,3.82-1.15,3.82-3.16C103.62,16.12,99.46,16.72,99.46,15.46Z"
              />
              <path
                className="color-background"
                d="M107.28,10.24l-2.65.58v8.93a2.77,2.77,0,0,0,2.67,2.87h.15a4.18,4.18,0,0,0,1.91-.37V20c-.35.15-2.06.66-2.06-1V15h2.06V12.66H107.3Z"
              />
              <polygon
                className="color-background"
                points="116.25 11.7 118.98 11.13 118.98 8.97 116.25 9.54 116.25 11.7"
              />
              <rect className="color-background" x="116.25" y="12.61" width="2.73" height="9.64" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

// Setting default values for the props of Basket
StripeCheckoutIcon.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the Basket
StripeCheckoutIcon.propTypes = {
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

export default StripeCheckoutIcon;
