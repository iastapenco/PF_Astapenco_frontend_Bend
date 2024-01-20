import { useState, useEffect } from "react";
import CardProducts from "../../components/CardProducts/CardProducts";
import { Link } from "react-router-dom";
import "./inicio.css";

function InicioPage() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://appcoffee-deploy1.onrender.com/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
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
      <br />
      <h2 className="center">Lista de productos</h2>
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
  );
}

export default InicioPage;
