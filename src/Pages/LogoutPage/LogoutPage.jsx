import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const inicioNavigate = useNavigate();
  const logout = async () => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("jwtCookie="))
      .split("=")[1];
    try {
      await fetch(
        `https://appcoffee-deploy1.onrender.com/api/sessions/logout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("dataUser");
      document.cookie =
        "jwtCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; ";
      inicioNavigate("/");
    } catch (error) {
      console.error("Hubo un error al cerrar la sesión:", error);
    }
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
