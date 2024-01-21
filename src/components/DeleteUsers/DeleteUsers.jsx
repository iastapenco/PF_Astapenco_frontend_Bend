import React, { useEffect, useState } from "react";

const DeleteUsers = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const deleteUsers = async () => {
      const response = await fetch(
        "https://appcoffee-deploy1.onrender.com/api/users/",
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
          credentials: "include",
        }
      );

      setStatus(response.status);
    };

    deleteUsers();
  }, []);

  if (status === 200) {
    return (
      <div>
        <h3>
          <strong>Usuarios Eliminados</strong>
        </h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>
          <strong>No hay usuarios para eliminar</strong>
        </h3>
      </div>
    );
  }
};

export default DeleteUsers;
