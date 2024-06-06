import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";

const theme = createTheme();

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
      <CssBaseline />
    </MuiThemeProvider>
  );
}

export default ThemeProvider;
