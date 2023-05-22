import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "pages/404/NotFound";

import AuthLayout from "layouts/AuthLayout";
import Login from "auth/Login";
import Register from "auth/Register";

import ProtectedRoute from "utils/ProtectedRoute";
import About from "pages/dashboard/About";
import Users from "pages/dashboard/Users";
import UserDetail from "pages/dashboard/UserDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/" element={<App />}>
          <Route
            path=""
            element={
              <ProtectedRoute>
                <About title="About" />
              </ProtectedRoute>
            }
          />
          <Route
            path="users"
            element={
              <ProtectedRoute>
                <Users title="Users" />
              </ProtectedRoute>
            }
          />
          <Route
            path="user-detail/:userID"
            element={
              <ProtectedRoute>
                <UserDetail title="Users" />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
