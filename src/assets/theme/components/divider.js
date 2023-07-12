// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";

// Soft UI Dashboard React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { dark, transparent, white } = colors;

const divider = {
  styleOverrides: {
    root: {
      backgroundColor: dark.main,
      
      height: pxToRem(2),
      margin: `${pxToRem(16)} 0`,
      borderBottom: "none",
      opacity: 0.10,
    },

    vertical: {
      backgroundColor: dark.main,
      width: pxToRem(1),
      height: "100%",
      margin: `0 ${pxToRem(16)}`,
      borderRight: "none",
    },

    light: {
      backgroundColor: white.main,
      // "&.MuiDivider-vertical": {
      //   backgroundImage: `linear-gradient(to bottom, ${rgba(white.main, 0)}, ${rgba(
      //     white.main,
      //     0.5
      //   )}, ${rgba(white.main, 0)}) !important`,
      // },
    },
  },
};

export default divider;
