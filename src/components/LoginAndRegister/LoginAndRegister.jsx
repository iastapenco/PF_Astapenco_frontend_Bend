import React from "react";
import { Link } from "react-router-dom";

const LoginAndRegister = () => {
  const user = JSON.parse(localStorage.getItem("dataUser"));

  if (!user) {
    return (
      <div className="container position-absolute top-0 start-100 translate-middle">
        <Link to={"/login"}>
          <button id="login" type="button" className="btn btn-primary p-2">
            Iniciar sesión
          </button>
        </Link>
        <Link to={"/register"}>
          <button id="register" type="button" className="btn btn-primary p-2">
            Registarse
          </button>
        </Link>
      </div>
    );
  } else {
    <Link to={"/logout"}>
      <button id="logout" type="button" className="btn btn-primary p-2">
        Logout
      </button>
    </Link>;
  }
};

export default LoginAndRegister;
