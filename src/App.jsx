import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
