import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login/Login";
import InicioPage from "./Pages/InicioPage/InicioPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<InicioPage />} />
      </Routes>
    </>
  );
}

export default App;
