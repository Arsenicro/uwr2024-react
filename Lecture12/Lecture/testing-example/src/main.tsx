import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MoodProvider from "./providers/MoodProvider/MoodProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MoodProvider>
      <App />
    </MoodProvider>
  </React.StrictMode>
);
