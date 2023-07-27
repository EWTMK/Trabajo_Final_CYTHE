// importar react 

import React, { useEffect, useState } from "react";

import axios from 'axios';

import "../css/cythe.css";


function Productos() {
    const [Productos, setProductos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/obtenerProductos') // URl de postman de nuestro loca host para la base de datos 
            .then(respuesta => {
                if (respuesta.data.mensaje === 'exitoso') {
                    setProductos(respuesta.data.contenido);
                    console.log(respuesta.data.contenido);
                }
            })
            .catch(error => console.log("error al recuperar los datos"));

    });
    return (
        <div className="database-results">
            <h1 className="title">Estos son los productos disponibles:</h1>
            {Productos.map((losProductos, index) => {
                return (
                    <div key={index} className="product-block">
                        <h1>Nombre del Producto: {losProductos.nombre}</h1>
                        <p>{losProductos.edad}</p>
                    </div>
                );
            })}
        </div>

    )
}

export default Productos;





