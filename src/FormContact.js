import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Input, Button, message } from "antd";

import { DataStore } from "aws-amplify";

import { Contacto } from "./models";

function FormContact() {
  // const [valores, setValores] = useState(null);

  const onFinish = async values => {
    await DataStore.save(
      new Contacto({
        nombre: values.nombreCompleto,
        email: values.email,
        whatsapp: values.whatsapp,
        mensaje: values.mensaje,
      })
    );
    console.log("Post saved successfully!", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="descarga">Contáctanos para ayudarte con tu idea</h1>
        <Form
          layout="horizontal"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          labelCol={{ span: 2, offset: 0 }}
        >
          <Form.Item
            label="Nombre:"
            name="nombreCompleto"
            wrapperCol={{ offset: 1 }}
          >
            <Input size="middle" />
          </Form.Item>
          <Form.Item label="Email:" name="email" wrapperCol={{ offset: 1 }}>
            <Input size="middle" />
          </Form.Item>
          <Form.Item
            label="Whatsapp:"
            name="whatsapp"
            wrapperCol={{ offset: 1 }}
          >
            <Input size="middle" />
          </Form.Item>
          <Form.Item label="Mensaje:" name="mensaje" wrapperCol={{ offset: 1 }}>
            <Input.TextArea autoSize="true" size="middle" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="middle" block="true">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}

export default FormContact;
