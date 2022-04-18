import { Button } from "antd";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CotizaBanner() {
  return (
    <section className="jumbotron text-center ">
      <div className="container">
        <h1 className="descarga">
          ¿Quieres saber cuanto te cuesta apróximadamentu tu idea en una APP?
        </h1>
        <p className="lead text-muted">
          Somos el único lugar que te permite tener un aproximado de tu
          desarrollo
        </p>
        <div className="container d-flex justify-content-center col-lg-2 col-md-3 col-6">
          <Button type="sucess">Cotiza tu APP</Button>
        </div>
      </div>
    </section>
  );
}

export default CotizaBanner;
