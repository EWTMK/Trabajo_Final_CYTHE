import React, { useState } from "react";
import Encabezado from "../Componentes/Encabezado";
import "../css/Contactanos.css";

function Contactanos() {
  const [comentarios, setComentarios] = useState("");
  const [correo, setCorreo] = useState("");

  // Función para enviar el formulario al servidor
  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar la solicitud POST al servidor para insertar los datos en la tabla "formularios"
    fetch("http://localhost:8081/insertarFormulario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comentarios, correo }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.mensaje === "Datos insertados correctamente en la tabla \"formularios\"") {
          alert("¡Formulario enviado con éxito!");
          // Limpia los campos del formulario después de enviarlo
          setComentarios("");
          setCorreo("");
        }
      })
      .catch((error) => console.error("Error al enviar el formulario:", error));
  };

  return (
    <>
      <Encabezado />
      <main>
        <section>
          <h2 id="contact-title">Contáctanos</h2>
          <div id="contact-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan, ligula sit amet aliquam dictum, diam leo fringilla est, vel consequat velit tellus eu lectus. Sed sed felis quis turpis iaculis bibendum. Etiam ut libero vitae felis rhoncus pharetra. Suspendisse ut enim ac ipsum iaculis accumsan. Nunc malesuada condimentum magna id lobortis. Ut dignissim auctor convallis. Pellentesque tristique placerat diam ac venenatis.
            </p>
          </div>
          <div id="social-media">
            <img src={require("../images/facebook.png")} alt="Facebook"></img>
            <img src={require("../images/twitter.png")} alt="Twitter"></img>
            <img src={require("../images/instagram.png")} alt="Instagram"></img>
            <img src={require("../images/watsap.png")} alt="watsap"></img>
          </div>
        </section>
        
        <section id="contact-form-section">
          <h2>Contacto</h2>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="comentarios">Comentarios:</label>
              <textarea
                id="comentarios"
                name="comentarios"
                placeholder="Escribe tus comentarios aquí"
                value={comentarios}
                onChange={(e) => setComentarios(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="correo">Correo:</label>
              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="Tu correo electrónico"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              ></input>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Contactanos;
