

import React from "react";

import Encabezado from "../Componentes/Encabezado";

import "../css/inicio.css";



//2 

function Inicio() {
  //3
  return (
    <>
      <Encabezado />





      <main>
        <div
          className="modal fade bg-white"
          id="templatemo_search"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="w-100 pt-1 mb-5 text-right">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form
              action=""
              method="get"
              className="modal-content modal-body border-0 p-0"
            >
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="inputModalSearch"
                  name="q"
                  placeholder="Search ..."
                />
                <button
                  type="submit"
                  className="input-group-text bg-success text-light"
                >
                  <i className="fa fa-fw fa-search text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Start Banner Hero */}
        <section className="template-mo-zay-hero-carousel">
          <div class="container">
            <div class="row p-5">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img src={require("../images/banner_img_01.png")} alt="bannimg" id="bannimg"></img>
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left align-self-center">
                  <h1 class="titulo-tienda"><b>CITHE</b> FERRETERIA</h1>
                  <h3 class="h2">La mejor distribuidora de herramientas en línea</h3>
                  <p>
                    Cithe, tu destino ideal para todas tus necesidades de herramientas y materiales de construcción.
                    Somos una ferretería comprometida con ofrecer productos de alta calidad y un servicio excepcional
                    tanto a profesionales del sector como a aficionados del bricolaje. Nuestra amplia selección de productos y
                    accesorios te permitirá llevar a cabo tus proyectos con facilidad y éxito.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Banner Hero */}
        {/* Start Categories of The Month */}
        <section className="container py-5">
          <div className="row text-center pt-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Categorias del mes</h1>
              <p>
                Organizamos nuestros productos en categorías para que puedas encontrar
                rápidamente lo que necesitas.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 p-5 mt-3">
              <a href="#">
                <img src={require("../images/category_img_01.jpg")} alt="Categoriaimg" id="categoriaimg"></img>
              </a>
              <h5 className="text-center mt-3 mb-3">Electricas</h5>
              <p className="text-center">
                <a className="btn btn-success">Go Shop</a>
              </p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
              <a href="#">
                <img src={require("../images/category_img_02.jpg")} alt="Categoriaimg2" id="categoriaimg2"></img>
              </a>
              <h2 className="h5 text-center mt-3 mb-3">Manuales</h2>
              <p className="text-center">
                <a className="btn btn-success">Go Shop</a>
              </p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
              <a href="#">
                <img src={require("../images/category_img_03.jpg")} alt="Categoriaimg3" id="categoriaimg3"></img>
              </a>
              <h2 className="h5 text-center mt-3 mb-3">De Golpe</h2>
              <p className="text-center">
                <a className="btn btn-success">Go Shop</a>
              </p>
            </div>
          </div>
        </section>
        {/* End Categories of The Month */}
        {/* Start Featured Product */}
        <section className="bg-light">
          <div className="container py-5">
            <div className="row text-center py-3">
              <div className="col-lg-6 m-auto">
                <h1 className="h1">Productos</h1>
                <p>
                  En Cithe, entendemos lo importante que es para ti obtener tus
                  productos de forma rápida y sencilla.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4 mb-4">
                <div className="card h-100">
                  <a href="shop-single.html">
                    <img src={require("../images/feature_prod_01.jpeg")} alt="Procimg1" id="procimg1"></img>
                  </a>
                  <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-muted fa fa-star" />
                        <i className="text-muted fa fa-star" />
                      </li>
                      <li className="text-muted text-right">$240.00</li>
                    </ul>
                    <a
                      href="shop-single.html"
                      className="h2 text-decoration-none text-dark"
                    >
                      Slot 1
                    </a>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                      in culpa qui officia deserunt.
                    </p>
                    <p className="text-muted">Reviews (24)</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <div className="card h-100">
                  <a href="shop-single.html">
                    <img src={require("../images/feature_prod_02.jpeg")} alt="Procimg2" id="procimg2"></img>
                  </a>
                  <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-muted fa fa-star" />
                        <i className="text-muted fa fa-star" />
                      </li>
                      <li className="text-muted text-right">$480.00</li>
                    </ul>
                    <a
                      href="shop-single.html"
                      className="h2 text-decoration-none text-dark"
                    >
                      Slot 2
                    </a>
                    <p className="card-text">
                      Aenean gravida dignissim finibus. Nullam ipsum diam, posuere
                      vitae pharetra sed, commodo ullamcorper.
                    </p>
                    <p className="text-muted">Reviews (48)</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <div className="card h-100">
                  <a href="shop-single.html">
                    <img src={require("../images/feature_prod_03.jpeg")} alt="Procimg3" id="procimg3"></img>
                  </a>
                  <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                      </li>
                      <li className="text-muted text-right">$360.00</li>
                    </ul>
                    <a
                      href="shop-single.html"
                      className="h2 text-decoration-none text-dark"
                    >
                      Slot 3
                    </a>
                    <p className="card-text">
                      Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar
                      sagittis diam, et scelerisque ipsum lobortis nec.
                    </p>
                    <p className="text-muted">Reviews (74)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



      </main>
      <footer>
        <p>Copyright © 2023 CITHE tools and machines</p>
        <p>Correo: cithe@experts.com Telefono: 899736212</p>
      </footer>


    </>
  )
}

//4

export default Inicio;