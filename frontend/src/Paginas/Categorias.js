import React, { useState, useEffect } from "react";
import Encabezado from "../Componentes/Encabezado";
import "../css/categorias.css";

function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // Realizar la solicitud HTTP para obtener las categorías del servidor
    fetch("http://localhost:8081/obtenerCategorias")
      .then((response) => response.json())
      .then((data) => {
        if (data.mensaje === "exitoso") {
          setCategorias(data.contenido);
        }
      })
      .catch((error) => console.error("Error al obtener las categorías:", error));
  }, []);

  return (
    <>
      <Encabezado />
      <main>
        <div className="categorias-container">
          <h2>Nuestras Categorías</h2>
          <div className="categorias-list">
            {categorias.map((categoria) => (
              <div key={categoria.id} className="categoria-item">
                <img
                  src={`http://localhost:8081/uploads/${categoria.imagen}`}
                  alt={categoria.nombre}
                />
                <h3>{categoria.nombre}</h3>
                <p>{categoria.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Categorias;







