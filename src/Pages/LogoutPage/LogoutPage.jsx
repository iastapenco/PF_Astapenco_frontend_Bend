import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("jwtCookie="))
    .split("=")[1];
  const inicioNavigate = useNavigate();
  const logout = () => {
    fetch("https://appcoffee-deploy1.onrender.com/api/sessions/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    localStorage.removeItem("dataUser");
    document.cookie =
      "jwtCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=https://appcoffee-deploy1.onrender.com";
    inicioNavigate("/");
  };

  return (
    <div>
      <h2>Cerrar sesión</h2>
      <p>Haga click para cerrar sesión</p>
      <button type="button" className="btn btn-dark" onClick={logout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default LogoutPage;
