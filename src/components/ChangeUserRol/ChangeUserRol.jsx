import { useRef, useState, useEffect } from "react";

const ChangeUserRol = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch("https://appcoffee-deploy1.onrender.com/api/users/")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container">
      {users &&
        users.mensaje &&
        Array.isArray(users.mensaje) &&
        users.mensaje.map((user) => {
          return (
            <ul key={user._id} className="list-group">
              <li className="list-group-item">
                Usuario: {user.first_name} {user.last_name}
              </li>
              <li className="list-group-item">Rol: {user.rol}</li>
            </ul>
          );
        })}
    </div>
  );
};

export default ChangeUserRol;
