import { Button } from "antd";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashLink } from "react-router-hash-link";

function CotizaBanner() {
  return (
    <section className="jumbotron text-center">
      <h1 className="descarga">
        ¿Quieres saber cuanto te cuesta apróximadamentu tu idea en una APP?
      </h1>
      <p className="lead text-muted">
        Somos el único lugar que te permite tener un aproximado de tu desarrollo
      </p>
      <div className="container d-flex justify-content-center col-lg-2 col-md-3 col-6">
        <HashLink smooth to="#formContact2">
          <Button type="sucess">Cotiza tu APP</Button>
        </HashLink>
      </div>
    </section>
  );
}

export default CotizaBanner;
