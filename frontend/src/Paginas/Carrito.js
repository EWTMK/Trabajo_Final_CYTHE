import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Importa el componente Link
import Encabezado from "../Componentes/Encabezado";
import { CarritoContext } from "../App";
import "../css/Carrito.css";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

function Carrito() {
  // Get the cart state and setter function from the context
  const { carrito, setCarrito } = useContext(CarritoContext);

  // Handler para eliminar un producto del carrito
  const eliminarProducto = (productoId) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== productoId);
    setCarrito(nuevoCarrito);
  };

  // Función para calcular el total del carrito y mostrar solo 3 decimales
  const calcularTotal = () => {
    let total = 0;
    carrito.forEach((item) => {
      total += item.precio;
    });
    return total.toFixed(3); // Mostrar solo 3 decimales
  };

  return (
    <>
      <Encabezado />
      <main>
        {/* Render the cart items */}
        <div className="carrito-container">
          <h2>Carrito de Compra</h2>
          <div className="carrito-items">
            {carrito.map((item) => (
              <div key={item.id} className="carrito-item">
                <img
                  src={`http://localhost:8081/uploads/${item.imagen}`}
                  alt={item.nombre}
                />
                <h3>{item.nombre}</h3>
                <p>Precio: {item.precio}</p>

                {/* Botón "Eliminar" */}
                <button onClick={() => eliminarProducto(item.id)}>
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          {/* Mostrar la tabla con el total */}
          <div className="carrito-total">
            <h3>TOTAL</h3>
            <p>Precio Total: {calcularTotal()}</p>
          </div>
          <PayPalScriptProvider>
            <PayPalButtons></PayPalButtons>
          </PayPalScriptProvider>

          {/* Mostrar el botón "Comprar ahora" si hay productos en el carrito */}
          {carrito.length > 0 ? (
            <Link to={{ pathname: "/compra", search: `?total=${calcularTotal()}&${carrito.map((item) => `producto=${item.nombre}`).join('&')}` }}>
              <button className="comprar-ahora-btn">Comprar ahora</button>
            </Link>
          ) : (
            <p>Agrega Productos</p>
          )}
        </div>
      </main>
    </>
  );
}

export default Carrito;





