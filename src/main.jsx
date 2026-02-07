import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import YourContext from "./context/YourContext.jsx";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <StrictMode>
    <YourContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </YourContext>
  </StrictMode>,
);
