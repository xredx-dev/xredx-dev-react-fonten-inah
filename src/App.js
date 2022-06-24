import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Inventario from "./pages/Inventario";
import Factura from "./pages/Factura";
import Resguardo from "./pages/Resguardo";
import Perfil from "./pages/Perfil";
import Responsable from "./pages/Responsable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Inventario" element={<Inventario />} />
        <Route path="/responsable" element={<Responsable />} />
        <Route path="/factura" element={<Factura />} />
        <Route path="/resguardo" element={<Resguardo />} />
        <Route path="/perfil" element={<Perfil />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
