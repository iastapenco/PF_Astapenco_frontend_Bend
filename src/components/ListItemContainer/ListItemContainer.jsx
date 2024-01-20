import React from "react";
import "./list_item_container.css";

const ListItemContainer = ({ first_name, last_name }) => {
  return (
    <>
      <h2 className="saludos">
        {`Bienvenido ${first_name} ${last_name} a nuestro coffee shop online!`}
      </h2>
    </>
  );
};

export default ListItemContainer;
