import React from "react";
import { useNavigate, Link } from "react-router-dom";

import "../css/Dashboard1.css";

function Dashboard() {
  const navegacion = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("Usuario");
    navegacion("/Inicio");
  };

  return (
    <div className="dashboard-container">
      <button onClick={cerrarSesion} className="logout-button">
        Cerrar Sesión
      </button>
      <h1>Dashboard</h1>
      <div className="image-container">
        {}
        <div className="item">
          <img src={require("../images/categoria.png")} alt="Categoría" />
          <div className="item-overlay">
            <Link to="/Mcat">
              <button className="button">Ver categoría</button>
            </Link>
          </div>
        </div>
        <div className="item">
          <img src={require("../images/productos.png")} alt="Productos" />
          <div className="item-overlay">
            <Link to="/Mpro">
              <button className="button">Ver productos</button>
            </Link>
          </div>
        </div>
        <div className="item">
          <img src={require("../images/pedidos.png")} alt="Pedidos" />
          <div className="item-overlay">
            <Link to="/Mped">
              <button className="button">Ver pedidos</button>
            </Link>
          </div>
        </div>
        <div className="item">
          <img src={require("../images/usuarios.png")} alt="Usuarios" />
          <div className="item-overlay">
            <Link to="/Musu">
              <button className="button">Ver usuarios</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


