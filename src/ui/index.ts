import { extendTheme } from "@chakra-ui/react";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  orange: {
    100: "#FFFFFF",
    200: "#F2EAE1",
    300: "#FFFFFF",
    400: "#F8D442",
    500: "#FEAF00",
    600: "#FFFFFF",
    700: "#FFFFFF",
    800: "#FFFFFF",
    900: "#FFFFFF",
  },
  gray: {
    100: "#FFFFFF",
    200: "#F8F8F8",
    300: "#E5E5E5",
    400: "#CDCDCD",
    500: "#6C6C6C",
    600: "#ACACAC",
    700: "#9FA2B4",
    800: "#4B506D",
    900: "#FFFFFF",
  },
};

const fonts = {
  heading: `'Montserrat', sans-serif`,
  body: `'Montserrat', sans-serif`,
};

// const fontWeights = {
//   hairline: 100,
//   thin: 200,
//   light: 300,
//   normal: 400,
//   medium: 500,
//   semibold: 600,
//   bold: 700,
//   extrabold: 800,
//   black: 900,
// };

export const theme = extendTheme({ colors, fonts });
