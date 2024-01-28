import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login/Login";
import InicioPage from "./Pages/InicioPage/InicioPage";
import Register from "./components/Register/Register";
import LogoutPage from "./Pages/LogoutPage/LogoutPage";
import { ShoppingCartProvider } from "./Context/CartContext";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<InicioPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
