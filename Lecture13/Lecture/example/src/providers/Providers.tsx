import React from "react";
import QueryProvider from "./QueryProvider";
import ThemeProvider from "./ThemeProvider";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
}

export default Providers;
