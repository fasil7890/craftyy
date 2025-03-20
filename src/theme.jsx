import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333300", // Change this to your primary color
    },
    secondary: {
      main: "#ffe6cc",
    },
    background: {
      default: "#FFF",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    // h1: {
    //   fontSize: "2.5rem",
    //   fontWeight: 600,
    // },
    // button: {
    //   textTransform: "none",
    // },
  },
});

export default theme;
