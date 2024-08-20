import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import SmoothScroll from "./libs/SmoothScroll.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <SmoothScroll> */}
      <Router>
        <App />
      </Router>
    {/* </SmoothScroll> */}
  </StrictMode>
);
