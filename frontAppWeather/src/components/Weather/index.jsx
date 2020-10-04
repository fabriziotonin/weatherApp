import React from 'react';
import { Col, Container, Row, Card, Form, Button } from 'react-bootstrap';
import './Weather.css';

export default function Weather({ setClima,clima ,weather }) {
  // Mando los parametros a la ruta con el id y la autenticacion

  const handleSearch = () => {
    weather(setClima, parseInt(clima.id))
    }
    // obtengo los valores del select 
    const handleChange = (event) => {
      setClima({
        ...clima,
        [event.target.name]:event.target.value
      });
  }
  return (
    <Container fluid>
      <Row className="py-4 justify-content-center">
        {/* aqui coloco las ciudades con su identificador para poder traerlo desde el back, si fueran mas haria un map con el array de ciudades para no escribirlos todos */}
        <Col xs="4">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Elige una ciudad</Form.Label>
            <Form.Control name="id" onChange={handleChange} as="select" defaultValue={clima.id}>
              <option value="1">Tucuman</option>
              <option value="2">Buenos Aires</option>
              <option value="3">Montevideo</option>
              <option value="4">Londres</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col className="align-self-center" xs="3">
          <Button onClick={handleSearch}>Buscar</Button>
        </Col>

      </Row>
      {
        !clima.content?
        ( <Row className="justify-content-center">
        <Col className="align-self-center" xs="10" md="7">
          <Card>
            <Card.Header as="h5">{clima.country}  {clima.province}</Card.Header>
            <Card.Body>
              <div>
                <Row>
                  <Col>{clima.day}</Col>
                  <Col>Icono</Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col>Temperatura Actual</Col>
                  <Col>{clima.temp}</Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col>Maxima</Col>
                  <Col>{clima.max_temp}</Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col>Minima</Col>
                  <Col>{clima.min_temp}</Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="10" md="5">

          <iframe title="Weather map" className="iframe" src={`https://maps.google.com/?ll=${clima.longitud},${clima.latitud}&z=11&t=m&output=embed`} height="400" frameBorder="0" style={{ border: 0, width: "100%" }} allowFullScreen></iframe>
        </Col>
      </Row>)
        :
        (<div></div>)
      }
     
    </Container>
  )
}
