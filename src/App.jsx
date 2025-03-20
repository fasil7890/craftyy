import React from "react";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
import HomePage from "./components/HomePage";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
