import React from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login";

export default function Auth() {
  const location = useLocation();

  const auth = useSelector((state) => state.auth);
  if (auth.isAuth) return <Navigate to="/" state={{ from: location }} />;

  return (
    <div className="auth-page">
      <div className="header-menu">
        <Link
          className={`menu-link ${
            location.pathname === "/login" ? "is-active" : ""
          }`}
          to="/login"
        >
          Login
        </Link>
      </div>
      <div className="auth-component">
        <Login />
      </div>
    </div>
  );
}
