import React, { useContext } from "react";
import { CarritoContext } from "../App";
import "../css/Mped.css";

function Mped() {
  // Get the cart state and setter function from the context
  const { carrito, setCarrito } = useContext(CarritoContext);

  // Handler para eliminar un producto del carrito
  const eliminarProducto = (productoId) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== productoId);
    setCarrito(nuevoCarrito);
  };

  // Handler para mostrar la confirmación de eliminación de producto
  const confirmarEliminacionProducto = (productoId) => {
    const confirmarEliminacion = window.confirm(
      "¿Estás seguro de eliminar este producto del carrito?"
    );
    if (confirmarEliminacion) {
      eliminarProducto(productoId);
    }
  };

  return (
    <div className="mped-container">
      <h2>Pedidos de usuario</h2>
      <table className="mped-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.precio}</td>
              <td>
                <button onClick={() => confirmarEliminacionProducto(item.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Mped;


