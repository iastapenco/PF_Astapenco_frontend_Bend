import { useRef } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();
    const datForm = new FormData(formRef.current);
    const data = Object.fromEntries(datForm);

    const response = await fetch(
      "https://appcoffee-deploy1.onrender.com/api/sessions/login",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      }
    );

    if (response.status == 200) {
      const datos = await response.json();
      document.cookie = `jwtCookie=${datos.token}; expires${new Date(
        Date.now() + 1 * 24 * 60 * 60 * 1000
      ).toUTCString()};path=/;httponly=true`;
      localStorage.setItem("dataUser", JSON.stringify(datos.payload));
      navigate("/");
    } else {
      console.log(response);
    }
  };

  return (
    <div className="container">
      <h2>Formulario de Login</h2>
      <form onSubmit={handleSumbit} ref={formRef}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
};