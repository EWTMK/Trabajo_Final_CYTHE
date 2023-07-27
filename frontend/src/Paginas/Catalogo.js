

import React from "react";

import Encabezado from "../Componentes/Encabezado";

import "../css/Catalogo.css";

//2 

function Catalogo() {
    //3
    return (
        <>
            <Encabezado />
          
              
                <main>
                    <div className="contenedor">
                        <h1> plomeria</h1>
                        <img src={require("../images/plomeria.jpg")} alt="" class="plomeria"></img>
                        <p>*conecciones, valvulas y llaves
                            *tuberias, mangueras y conecciones flexibles
                            *Herrajes de instalacion sanitaria
                            *Tanques, cisternas y calentadores
                        </p>
                        <h1>acabado</h1>
                        <img src={require("../images/acabados.jpg")} alt="" class="acabado"></img>
                        <p>*pisos,muros, recubrimientos y elementos decorativos
                            *gifreria, accesorios y muebles para baños
                            *materiales para construccion,herrajes, aceros y molduras

                        </p>
                        <h1>electrico</h1>
                        <img src={require("../images/electrico.jpg")} alt="" class="electrico"></img>
                        <p>*focos e iluminacion
                            *cables, conectores, centros de carga y articulos de instalacion
                            *dispositivos electronicos

                        </p>
                        <h1>manual</h1>
                        <img src={require("../images/manual.jpg")} alt="" class="manual"></img>
                        <p>*cortadores, tijeras, cepillos
                            *prensas, cucharas y llanas
                            *atornilladores, pinzas y llaves
                            *basculas y niveles

                        </p>
                        <h1>neumatica</h1>
                        <img src={require("../images/neumatica.jpg")} alt="" class="neumatica"></img>
                        <p>*atornilladores, rotomartillos
                            *pistolas, clavadoras y pulidoras
                            *atornilladores, pinzas y llaves
                            *desbrosadoras, orilladoras y sierras

                        </p>
                        <h1> maquinaria </h1>
                        <img src={require("../images/maquinaria.jpg")} alt="" class="maquinaria"></img>
                        <p>*hidrolavadoras y aspiradoras
                            *plantas de luz y soldadoras
                            *bombas y morotes para riego agricola
                            *mezcladoras y equipo de corte
                        </p>
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

export default Catalogo;