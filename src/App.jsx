import React from "react";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
import HomePage from "./components/HomePage";
import { CssBaseline } from "@mui/material";
import RoutesPage from "../Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <RoutesPage />
    </ThemeProvider>
  );
}

export default App;
