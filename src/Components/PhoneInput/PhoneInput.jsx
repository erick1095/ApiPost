import React, { useState } from "react";
import {
  Row,
  Col,
  Label,
  Input,
  FormGroup,
  FormFeedback,
  Form,
  Button,
} from "reactstrap";

const PhoneInput = () => {
  const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (regex.test(e.target.PhoneNumber.value)) {
      setPhoneNumberIsValid(true);
    } else {
      setPhoneNumberIsValid(false);
    }
  };
  return (
    <div>
      <Form handleSubmit={handleSubmit}>
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label for="name">Número de teléfono</Label>
              <Input
                name="PhoneNumber"
                placeholder="(333) 333-3333"
                type="text"
              />
              {phoneNumberIsValid === null ? (
                ""
              ) : phoneNumberIsValid ? (
                <FormFeedback valid>Número de teléfono correcto</FormFeedback>
              ) : (
                <FormFeedback invalid>
                  Número de teléfono incorrecto
                </FormFeedback>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Button>Enviar</Button>
      </Form>
    </div>
  );
};

export default PhoneInput;
