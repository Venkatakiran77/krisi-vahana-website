import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProviderWrapper from "./theme/ThemeProviderWrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProviderWrapper>
      <App />
    </ThemeProviderWrapper>
  </BrowserRouter>
);
