import React from "react";
import ReactDOM from "react-dom/client.js";
import KakaoSendToken from "../reactLogin.js"; // Correct import path

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <KakaoSendToken /> {/* Correct component name */}
  </React.StrictMode>
);
