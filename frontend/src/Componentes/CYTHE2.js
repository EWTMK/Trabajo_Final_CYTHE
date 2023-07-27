import React, { useEffect, useState } from "react";

import axios from 'axios';

import "../css/cythe2.css";


function Categorias() {
    const [Categorias, setCategorias] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/obtenerCategorias') // URl de postman de nuestro loca host para la base de datos 
            .then(respuesta => {
                if (respuesta.data.mensaje === 'exitoso') {
                    setCategorias(respuesta.data.contenido);
                    console.log(respuesta.data.contenido);
                }
            })
            .catch(error => console.log("error al recuperar los datos"));

    });
    return (

        <div className="database-results">
        <h1>Estas son las categorias de la empresa</h1>
        {Categorias.map((losProductos, index) => {
            return (
                <div key={index} className="category-block">
                    <h1>{losProductos.nombre}</h1>
                    <p>{losProductos.edad}</p>
                </div>
            );
        })}
    </div>
    

    )
}

export default Categorias;