import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Header.css';
const Header = ({ loginData, setLoginData }) => {

  // Limpio el state y el local storage para deslogear al usuario y cerrar sesion 
  const handleLogOut = () => {
    setLoginData([])
    localStorage.removeItem('token')
  }


  console.log(loginData.usuario)
  return (
    <Container fluid>
      <Row className="text-center background">
        <Col xs={12}>
          <h2>AppClima</h2>
        </Col>
        <Col xs={12}>
          {
            loginData.token ? (
              <>
                <p>Bienvenido <strong>{loginData.usuario}</strong></p>
                <Button
                  variant="outline-primary"
                  onClick={handleLogOut}
                >Salir</Button>
              </>
            )
              :
              (
                <p>Logueate para ver el clima</p>

              )
          }

        </Col>
      </Row>
    </Container>
  )
}

export default Header