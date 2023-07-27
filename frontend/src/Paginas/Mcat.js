import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../css/Mcat.css";

function Mcat() {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState(null);
    const [mensaje, setMensaje] = useState("");
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        obtenerCategorias();
    }, []);

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    const handleDescripcionChange = (e) => {
        setDescripcion(e.target.value);
    };

    const handleImagenChange = (e) => {
        const imageFile = e.target.files[0];
        setImagen(imageFile);
    };

    const agregarCategoria = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nombre", nombre);
        formData.append("descripcion", descripcion);
        formData.append("imagen", imagen);

        axios.post('http://localhost:8081/agregarCategoria', formData)
            .then(respuesta => {
                if (respuesta.data.Estatus === "Correcto") {
                    setMensaje("Se ha agregado una nueva categoría");
                    setNombre("");
                    setDescripcion("");
                    setImagen(null);
                    obtenerCategorias();
                } else {
                    setMensaje("Error al agregar la categoría");
                }
            })
            .catch(error => console.log("Hay un error", error));
    };

    const eliminarCategoria = (id) => {
        const confirmarEliminacion = window.confirm("¿Estás seguro de eliminar esta categoría?");
        if (confirmarEliminacion) {
            axios.post('http://localhost:8081/eliminarCategoria', { id })
                .then(respuesta => {
                    if (respuesta.data.Estatus === "Correcto") {
                        setMensaje("Se ha eliminado la categoría");
                        setCategorias(prevCategorias => prevCategorias.filter(categoria => categoria.id !== id));
                    } else {
                        setMensaje("Error al eliminar la categoría");
                    }
                })
                .catch(error => console.log("Hay un error", error));
        }
    };

    const obtenerCategorias = () => {
        axios.get('http://localhost:8081/obtenerCategorias')
            .then(respuesta => {
                if (respuesta.data.mensaje === "exitoso") {
                    setCategorias(respuesta.data.contenido);
                } else {
                    setMensaje("Error al obtener las categorías");
                }
            })
            .catch(error => console.log("Hay un error", error));
    };

    return (
        <>
            <div className="form-container">
                <h1>Agregar Categorías</h1>
                <form onSubmit={agregarCategoria}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={handleNombreChange}
                    />
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        value={descripcion}
                        onChange={handleDescripcionChange}
                        rows={4}
                    />
                    <label htmlFor="imagen">Imagen:</label>
                    <input
                        type="file"
                        id="imagen"
                        name="imagen"
                        onChange={handleImagenChange}
                    />
                    <button type="submit">Agregar</button>
                </form>
                <p>{mensaje}</p>
            </div>

            <div className="table-container">
                <h2>Categorías existentes:</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorias.map((categoria) => (
                            <tr key={categoria.id}>
                                <td>{categoria.nombre}</td>
                                <td>{categoria.descripcion}</td>
                                <td>
                                    <button onClick={() => eliminarCategoria(categoria.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Mcat;








