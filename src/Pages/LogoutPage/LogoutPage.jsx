import React, { useEffect } from "react";

const LogoutPage = () => {
  const logout = () => {
    fetch("https://appcoffee-deploy1.onrender.com/api/sessions/logout");
  };

  useEffect(logout, []);

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
