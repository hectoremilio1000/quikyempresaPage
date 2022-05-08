import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import "./styles.css";

function Cotizador() {
  return (
    <Container>
      <Row>
        <h1>Cotizador</h1>
      </Row>
      <Row>
        <h3>
          Con este cotizador en tiempo real, tratamos de ayudarte para que
          tengas un presupuesto apróximado de acuerdo a tus necesidades{" "}
        </h3>
      </Row>
      <Row>
        <h4>Selecciona</h4>
      </Row>
      <Row>
        <Col>
          <p className="blockquote-footer">hola</p>
        </Col>
        <Col>
          <div class="card" style={{ width: "18rem" }}>
            <a href="#" class="btn btn-outline-primary">
              <img
                class="card-img-top"
                src="https://t-position.com/wp-content/uploads/2010/01/Paginas-web.jpg"
                alt="Card image cap"
                style={{ width: "200", height: "150" }}
              />

              <div class="card-body">
                <h5 class="card-title tex text-center">Card title</h5>
                <p class="card-text text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </a>
          </div>
        </Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default Cotizador;
