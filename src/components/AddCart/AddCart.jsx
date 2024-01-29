import { useRef, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const AddCart = ({ data }) => {
  const formRef = useRef(null);
  const [cart, setCart] = useContext(CartContext);
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const { _id } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datForm = new FormData(formRef.current);
    const dataForm = Object.fromEntries(datForm);
    const quantity = dataForm.quantity;
    setCart(quantity);

    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("jwtCookie="))
      .split("=")[1];

    console.log("quantity:", quantity);
    console.log("cart:", dataUser.cart);
    console.log("_id:", _id);
    console.log("token:", token);

    const response = await fetch(
      `https://appcoffee-deploy1.onrender.com/api/carts/${dataUser.cart}/products/${_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(quantity),
      }
    );
    console.log("response:", response);

    if (response.status == 200) {
      console.log("Producto agregado al carrito");
      return alert("Producto agregado al carrito");
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <label htmlFor="quantity">Introduzca la cantidad que desea comprar</label>
      <input
        id="quantity"
        type="number"
        placeholder="1"
        defaultValue={1}
        name="quantity"
        autocomplete="off"
      />
      <button type="submit" class="btn btn-primary mt-3">
        Agregar al carrito
      </button>
    </form>
  );
};

export default AddCart;
