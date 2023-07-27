import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';



import "../css/acceso.css";

import {Link} from 'react-router-dom';






function Acceso() {
    //declarar mi variable que cambia de estado 

    const [campos, setCampos] = useState({
        correo_electronico: "",
        contrasenia: ""
    });
    const [error, setError] = useState('');
    // redireccionamiento
    const navegacion = useNavigate();

    const acceder = (e) => {
        e.preventDefault(); // previene que la pagina se regarge al enviar el formulario 
        axios.post('http://localhost.8082/acceso', campos)
            .then(respuesta => {
                if (respuesta.data.Estatus === "Correcto") {
                    localStorage.setItem('Usuario', respuesta.data);
                    navegacion('/');

                } else {
                    setError(respuesta.data.error);
                }
            })

            .catch(error => console.log("Hay un error"));
    }

    return (
        <form className="login-form" onSubmit={acceder}>
            <h2>Registrarse</h2>
            {error && <p className="error-message">{error}</p>}
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" placeholder="Nombre" name="nombre" onChange={(e) => setCampos({ ...campos, nombre_usuario: e.target.value })} />
            <label htmlFor="correo_electronico">Email:</label>
            <input type="email" id="correo_electronico" placeholder="Email" name="correo_electronico" className="email-input" onChange={(e) => setCampos({ ...campos, correo_electronico: e.target.value })} />
            <label htmlFor="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" placeholder="Contraseña" name="contrasena" onChange={(e) => setCampos({ ...campos, contrasenia: e.target.value })} />
            <Link to="/Dashboard1">
            <button type="submit">Registrarse</button>
            </Link>
        </form>

    )

}




export default Acceso;