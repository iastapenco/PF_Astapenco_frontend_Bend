import { useRef } from "react";

const ChangeUserRol = ({ dataUser }) => {
  const formRef = useRef(null);
  let { first_name, last_name, email, age, password, _id } = dataUser;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datForm = new FormData(formRef.current);
    const dataForm = Object.fromEntries(datForm);
    const rol = dataForm.rol;
    console.log("Rol seleccionado: ", rol);

    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("jwtCookie="))
      .split("=")[1];

    const dataToSend = {
      _id,
      first_name,
      last_name,
      age,
      email,
      password,
      rol,
    };

    console.log("Datos enviados: ", dataToSend); // Imprime los datos enviados

    fetch(`https://appcoffee-deploy1.onrender.com/api/users/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataToSend),
    });
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <select
        name="rol"
        class="form-select"
        aria-label="Default select example"
      >
        <option selected>Seleccione un rol</option>
        <option value="1">user</option>
        <option value="2">admin</option>
      </select>
      <button type="submit" class="btn btn-primary mt-3">
        Enviar
      </button>
    </form>
  );
};

export default ChangeUserRol;
