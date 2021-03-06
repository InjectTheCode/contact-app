import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContactProvider } from "./context/ContactContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContactProvider>
    <App />
  </ContactProvider>
);
