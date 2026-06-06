import React from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // 1. Import the metadata provider

const rootElement = document.getElementById("root");

// 2. Wrap application layout structure with the Helmet provider
const AppStructure = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

// 3. Mount or hydrate the app tree based on whether react-snap static HTML is detected
if (rootElement && rootElement.hasChildNodes()) {
  hydrate(AppStructure, rootElement);
} else {
  render(AppStructure, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();