import { useState, useEffect } from "react";
import CardProducts from "../../components/CardProducts/CardProducts";
import ListItemContainer from "../../components/ListItemContainer/ListItemContainer";
import Spinner from "../../components/Spinner/Spinner";
import LoginAndRegister from "../../components/LoginAndRegister/LoginAndRegister";
import AdminView from "../../components/AdminView/AdminView";
import "./inicio.css";

function InicioPage() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://appcoffee-deploy1.onrender.com/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  const user = JSON.parse(localStorage.getItem("dataUser"));

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <LoginAndRegister />
      <ListItemContainer />
      if (user && user.rol !="admin")
      {
        <>
          <div>
            <h2 className="center">Lista de productos</h2>
          </div>
          <div className="container row-gap-3 column-gap-3 d-flex flex-row justify-content-around align-content-around flex-wrap bg-primary mb-4">
            {products &&
              products.mensaje &&
              products.mensaje.docs &&
              products.mensaje.docs.map((product) => {
                return (
                  <div key={product._id} className="product_container ">
                    <div className="card">
                      <CardProducts data={product} />
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      }
      else {<AdminView />}
    </>
  );
}

export default InicioPage;
