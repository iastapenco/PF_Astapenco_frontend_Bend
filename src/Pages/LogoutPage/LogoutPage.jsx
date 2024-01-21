import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const inicioNavigate = useNavigate();
  const logout = () => {
    fetch("https://appcoffee-deploy1.onrender.com/api/sessions/logout");
    localStorage.removeItem("dataUser");
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
