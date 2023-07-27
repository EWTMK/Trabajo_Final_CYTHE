

import React from "react";

import Encabezado from "../Componentes/Encabezado";

import "../css/Formulario.css"

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

//2 

function Compra() {
    const [campos, setCampos] = useState({
        nombre_usuario: "",
        correo_electronico: "",
        contrasenia: ""
    });
    const [error, setError] = useState('');
  
    const navegacion = useNavigate();

    const registrar = (e) => {
        e.preventDefault(); 
        axios.post('http://localhost.8082/registrar', campos)
            .then(respuesta => {
                if (respuesta.data.Estatus === "Correcto") {
                    navegacion('/Acceso');

                } else {
                    setError(respuesta.data.error);
                }
            })

            .catch(error => console.log("Hay un error"));
    }
    return (
        <>
            <Encabezado />



            <main>
                <div id="formulario">
                    <div className="campo">
                        <label for="nombre-apellido">Nombre y Apellido:</label>
                        <input type="text" id="nombre-apellido" placeholder="Ingrese su nombre y apellido"></input>
                    </div>
                    <div className="campo">
                        <label for="numero">Correo:</label>
                        <input type="text" id="numero" placeholder="Ingrese su correo"></input>
                    </div>
                    <div className="campo">
                        <label for="numero-tarjeta">Contraseña:</label>
                        <input type="text" id="numero-tarjeta" placeholder="Ingrese su contraseña"></input>
                    </div>
                    <div className="campo">
                        <label for="cvv">Confirmar contraseña:</label>
                        <input type="text" id="cvv" placeholder="Repita su contraseña"></input>
                    </div>
                    <button id="comprar">Registrarse</button>
                </div>

            </main>

            <footer>
                <p>Copyright © 2023 CITHE tools and machines</p>
                <p>Correo: cithe@experts.com Telefono: 899736212</p>
            </footer>

        </>
    )
}

//4

export default Compra;