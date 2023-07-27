import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import React from "react";
import axios from 'axios';

function Registro() {
    const [campos, setCampos] = useState({
        correo_electronico: "",
        contrasenia: "",
    });
    const [error, setError] = useState('');
    const navegacion = useNavigate();

    const registrarUsuario = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/registrar', campos)
            .then(respuesta => {
                if (respuesta.data.Estatus === "Correcto") {
                    navegacion('/Inicio');
                } else {
                    setError("Error al registrar el usuario");
                }
            })
            .catch(error => console.log("Hay un error", error));
    }

    return (
        <>
            <form className="login-form" onSubmit={registrarUsuario}>
                <h2>Registro de usuario</h2>
                {error && <p className="error-message">{error}</p>}
                <label htmlFor="correo_electronico">Email:</label>
                <input type="email" id="correo_electronico" placeholder="Email" name="correo_electronico" className="email-input" onChange={(e) => setCampos({ ...campos, correo_electronico: e.target.value })} />
                <label htmlFor="contrasenia">Contraseña:</label>
                <input type="password" id="contrasenia" placeholder="Contraseña" name="contrasenia" onChange={(e) => setCampos({ ...campos, contrasenia: e.target.value })} />
                <button type="submit">Registrarse</button>
            </form>
            <div className="form-footer">
                
            </div>
        </>
    )
}

export default Registro;



