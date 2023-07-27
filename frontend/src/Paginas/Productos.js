import React, { useState, useEffect, useContext } from "react";
import Encabezado from "../Componentes/Encabezado";
import "../css/producto.css";
import { CarritoContext } from "../App";

function Productos() {
  const [productos, setProductos] = useState([]);
  const { carrito, setCarrito } = useContext(CarritoContext);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch("http://localhost:8081/obtenerProductos")
      .then((response) => response.json())
      .then((data) => {
        if (data.mensaje === "exitoso") {
          setProductos(data.contenido);
        }
      })
      .catch((error) =>
        console.error("Error al obtener los productos:", error)
      );
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    setMensaje("¡Se ha agregado al carrito!");
    setTimeout(() => {
      setMensaje("");
    }, 2000); // Oculta el mensaje después de 2 segundos
  };

  return (
    <>
      <Encabezado />
      <main>
        <div className="productos-container">
          <h2>Nuestros Productos</h2>
          <div className="productos-list">
            {productos.map((producto) => (
              <div key={producto.id} className="producto-item">
                <img
                  src={`http://localhost:8081/uploads/${producto.imagen}`}
                  alt={producto.nombre}
                />
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <p>Precio: {producto.precio}</p>

                {/* Botón "Agregar al carrito" */}
                <button
                  onClick={() => agregarAlCarrito(producto)}
                  className="agregar-al-carrito-btn"
                >
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Mensaje de confirmación */}
        {mensaje && <div className="mensaje">{mensaje}</div>}
      </main>
    </>
  );
}

export default Productos;




