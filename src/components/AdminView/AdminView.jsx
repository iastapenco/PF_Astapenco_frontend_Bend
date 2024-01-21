import { useState } from "react";
import UsersList from "../UsersList/UsersList";
import "./admin_view.css";

const AdminView = () => {
  const user = JSON.parse(localStorage.getItem("dataUser"));
  const [showUsersList, setShowUsersList] = useState(false);

  const toggleUsersList = () => {
    setShowUsersList(!showUsersList);
  };

  if (user && user.rol === "admin") {
    return (
      <>
        <button className="btn btn-primary" onClick={toggleUsersList}>
          Ver usuarios
        </button>
        {showUsersList && <UsersList />}
      </>
    );
  }

  return (
    <>
      <h2>Usted no tiene los permisos necesarios para acceder</h2>
    </>
  );
};

export default AdminView;
