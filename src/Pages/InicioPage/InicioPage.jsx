import { useState, useEffect } from "react";
import CardProducts from "../../components/CardProducts/CardProducts";
import { Link } from "react-router-dom";

function InicioPage() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://appcoffee-deploy1.onrender.com/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h2>Productos</h2>
      <div className="container">
        {products &&
          products.mensaje &&
          products.mensaje.docs &&
          products.mensaje.docs.map((product) => {
            return (
              <div key={product._id} className="product_container">
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
