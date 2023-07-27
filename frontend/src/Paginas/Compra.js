import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Encabezado from "../Componentes/Encabezado";
import { useLocation } from "react-router-dom";
import "../css/Compra.css";

function Compra() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const total = queryParams.get("total");

  // Estado local para almacenar los productos del carrito
  const [productosCarrito, setProductosCarrito] = useState([]);

  // Obtener los productos del carrito desde la query string
  useEffect(() => {
    const productos = [];
    queryParams.forEach((value, key) => {
      if (key.startsWith("producto=")) {
        productos.push(value);
      }
    });
    setProductosCarrito(productos);
  }, [queryParams]);


  const handlePayPalPayment = (details, data) => {

    console.log("Pago realizado con éxito", details);
  };

  return (
    <>
      <Encabezado />
      <main>
        <PayPalScriptProvider options={{ "client-id": "TU_CLIENT_ID_DE_PAYPAL" }}>
          <div id="formulario">
            <div className="campo">
              <label htmlFor="nombre-apellido">Nombre y Apellido:</label>
              <input type="text" id="nombre-apellido" placeholder="Ingrese su nombre y apellido"></input>
            </div>
            <div className="campo">
              <label htmlFor="numero">Número:</label>
              <input type="text" id="numero" placeholder="Ingrese su número de teléfono"></input>
            </div>
            <div className="campo">
              <label htmlFor="numero-tarjeta">Número de Tarjeta:</label>
              <input type="text" id="numero-tarjeta" placeholder="Ingrese el número de su tarjeta"></input>
            </div>
            <div className="campo">
              <label htmlFor="cvv">CVV:</label>
              <input type="text" id="cvv" placeholder="Ingrese el CVV de su tarjeta"></input>
            </div>
            { }
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        currency_code: "USD",
                        value: total,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then(function (details) {
                  handlePayPalPayment(details, data);
                });
              }}
              onError={(err) => console.log("Error en el pago", err)}
            />
          </div>
        </PayPalScriptProvider>

        { }
        <h1 id="mensaje">DISFRUTA TU PRODUCTO!</h1>
        <div>
          <ul>
            {productosCarrito.map((producto, index) => (
              <li key={index}>{producto}</li>
            ))}
          </ul>
        </div>

        {/* Mostrar el total */}
        <p id="textopago">Total a pagar: {total}</p>
      </main>
    </>
  );
}

export default Compra;


