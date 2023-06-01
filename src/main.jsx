import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { UserNameProvider } from "./context/UserNameContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserNameProvider>
      {/* Comonenete que viene desde REACT-ROUTER que se llama RouterProvider y en la prop router recibe el router que va a proveer y se creó en index.jsx*/}
      <RouterProvider router={router} />
    </UserNameProvider>
  </React.StrictMode>
);
