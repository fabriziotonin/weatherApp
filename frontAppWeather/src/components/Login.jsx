import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export default function Login({ setLoginData, login }) {

  // paso los parametros a la ruta login para validar el ingreso 
  const handleLogIn = (event) => {
    event.preventDefault()
    login("fabrizio", "pass12345", setLoginData);
    console.log("asd")
  }

  return (
    <Container fluid>
      <Row className="justify-content-center mt-5">
        <Col xs="6">
          <Form onSubmit={(event) => handleLogIn(event)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text" placeholder="Usuario" />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
       </Button>
          </Form>
        </Col>
      </Row>
    </Container>

  )
}
