import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { ThemeProvider } from "@emotion/react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { green, lime } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const f = (style: any) => {
  if (style.variant === "contained" && style.color === "primary") {
    return { fontSize: "2rem" };
  }
  return {};
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: lime,
    secondary: green,
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              fontSize: "2rem",
            }),
        }),
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
