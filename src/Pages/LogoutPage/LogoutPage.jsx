import React from "react";
import { useEffect } from "react";

const LogoutPage = () => {
  useEffect(() => {
    fetch("https://appcoffee-deploy1.onrender.com/api/sessions/logout");
  }, [logout]);

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
