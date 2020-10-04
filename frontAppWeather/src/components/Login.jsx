import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export default function Login({ setLoginData,loginData,login }) {


  //a traves del boton paso los parametros a la ruta login para validar el ingreso 
  const handleLogIn = (event) => {
    event.preventDefault()
    if(!loginData.usuario || !loginData.password){
      alert("complete los datos")
    }else{
      login(loginData, setLoginData);
    }
  }

  // traigo el valor de los inputs, con el spred mantengo los valores para poder escribir  y los seteo en el estado de login 
  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value.toLowerCase()
    })
  }

  return (
    <Container fluid>
      <Row className="justify-content-center mt-5">
        <Col xs="6">
          <Form onSubmit={(event) => handleLogIn(event)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Usuario"
                name="usuario"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
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
