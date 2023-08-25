import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import App from "./App"

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(
    <Router>
      <App />
    </Router>
  );
});