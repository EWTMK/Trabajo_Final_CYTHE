import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../css/Mcat.css";

function Mostrar_usuarios() {
    const [correo_electronico, setCorreoElectronico] = useState("");
    const [contrasenia, setContrasenia] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        obtenerUsuarios();
    }, []);

    const handleCorreoElectronicoChange = (e) => {
        setCorreoElectronico(e.target.value);
    };

    const handleContraseniaChange = (e) => {
        setContrasenia(e.target.value);
    };

    const agregarUsuario = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/agregarUsuario', { correo_electronico, contrasenia })
            .then(respuesta => {
                if (respuesta.data.Estatus === "Correcto") {
                    setMensaje("Se ha agregado un nuevo usuario");
                    setCorreoElectronico("");
                    setContrasenia("");
                    obtenerUsuarios();
                } else {
                    setMensaje("Error al agregar el usuario");
                }
            })
            .catch(error => {
                setMensaje("Error al agregar el usuario");
                console.log("Hay un error", error);
            });
    };

    const eliminarUsuario = (id) => {
        const confirmarEliminacion = window.confirm("¿Estás seguro de eliminar este usuario?");
        if (confirmarEliminacion) {
            axios.post('http://localhost:8081/eliminarUsuario', { id })
                .then(respuesta => {
                    if (respuesta.data.Estatus === "Correcto") {
                        setMensaje("Se ha eliminado el usuario");
                        obtenerUsuarios();
                    } else {
                        setMensaje("Error al eliminar el usuario");
                    }
                })
                .catch(error => {
                    setMensaje("Error al eliminar el usuario");
                    console.log("Hay un error", error);
                });
        }
    };

    const obtenerUsuarios = () => {
        axios.get('http://localhost:8081/obtenerUsuarios')
            .then(respuesta => {
                if (respuesta.data.mensaje === "exitoso") {
                    setUsuarios(respuesta.data.contenido);
                } else {
                    setMensaje("Error al obtener los usuarios");
                }
            })
            .catch(error => {
                setMensaje("Error al obtener los usuarios");
                console.log("Hay un error", error);
            });
    };

    return (
        <>
            <div className="form-container">
                <h1>Agregar Usuarios</h1>
                <form onSubmit={agregarUsuario}>
                    <label htmlFor="correo">Correo Electrónico:</label>
                    <input
                        type="text"
                        id="correo"
                        name="correo"
                        value={correo_electronico}
                        onChange={handleCorreoElectronicoChange}
                    />
                    <label htmlFor="contrasenia">Contraseña:</label>
                    <input
                        type="password"
                        id="contrasenia"
                        name="contrasenia"
                        value={contrasenia}
                        onChange={handleContraseniaChange}
                    />
                    <button type="submit">Agregar</button>
                </form>
                <p>{mensaje}</p>
            </div>

            <div className="table-container">
                <h2>Usuarios existentes:</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Correo Electrónico</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.correo_electronico}</td>
                                <td>
                                    <button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Mostrar_usuarios;


