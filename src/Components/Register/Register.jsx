import React from "react";
import { Form, Row, Col, Label, Input, FormGroup, Button } from "reactstrap";
import Swal from "sweetalert2";
const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    data["name"] = e.target.name.value;
    data["lastName"] = e.target.lastName.value;
    data["email"] = e.target.email.value;
    data["phoneNumber"] = e.target.phoneNumber.value;
    data["password"] = e.target.password.value;
    data["image"] = "urlImage";
    data["role"] = "NUTRIOLOGIST";
    if (data.password === e.target.repeatPassword.value) {
      // Realizo la solicitud
      const url = "https://localhost:7245/api/Account/Register";
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" },
      })
        .then((r) => {
          return r.json().then((data) => ({
            status: r.status,
            body: data,
          }));
        })
        .then((response) => {
          if (response.status === 200) {
            Swal.fire({
              title: "Su cuenta ha sido creada exitosamente",
              icon: "success",
              confirmButtonText: "Ok",
            });
          } else {
            Swal.fire({
              icon: "info",
              title: "Mensaje",
              text: response.body.error,
            });
          }
        })
        .catch((error) => {
          const err = error.message;
          Swal.fire({
            icon: "info",
            title: "Error",
            text: err,
          });
        });
    } else {
      Swal.fire({
        icon: "info",
        title: "Mensaje",
        text: "Las contraseñas no coinciden.",
      });
    }
  };
  return (
    <div className="registerContent">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Nombre</Label>
              <Input name="name" placeholder="Nombre" type="text" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lastName">Apellido</Label>
              <Input name="lastName" placeholder="Apellido" type="text" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Correo</Label>
              <Input name="email" placeholder="email@gmail.com" type="email" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="phoneNumber">Telefono</Label>
              <Input
                name="phoneNumber"
                placeholder="(675) 746-6475"
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="password">Contraseña</Label>
              <Input name="password" type="password" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="repeatPassword">Repetir contraseña</Label>
              <Input name="repeatPassword" type="password" />
            </FormGroup>
          </Col>
        </Row>
        <Button>Registrarme</Button>
      </Form>
    </div>
  );
};

export default Register;
