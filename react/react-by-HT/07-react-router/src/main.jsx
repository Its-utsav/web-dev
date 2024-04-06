import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/Header/Header.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Header />} />)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
