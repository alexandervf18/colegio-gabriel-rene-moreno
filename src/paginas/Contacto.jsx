import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useState } from "react";
import colegioImage from '../assets/images/colegio-gabriel-rene-moreno.jpg';

function Contacto() {
  // Form state management
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  // Handle input changes
  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatosFormulario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission (frontend only)
  const manejarEnvio = (evento) => {
    evento.preventDefault();
    alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
    // Reset form
    setDatosFormulario({
      nombre: "",
      correo: "",
      mensaje: "",
    });
  };

  return (
    <div>
      {/* Page header */}
      <div
        className="hero-seccion d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 61, 130, 0.3), rgba(0, 61, 130, 0.3)), url(${colegioImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px",
        }}
      >
        <Container>
          <h1 className="display-4 fw-bold mb-3" style={{color: '#ffffff', textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
            Contacto
          </h1>
          <p className="lead" style={{color: '#ffffff', textShadow: '0 0 20px rgba(255,193,7,0.8), 2px 2px 8px rgba(0,0,0,0.9)'}}>
            Estamos aquí para ayudarte
          </p>
        </Container>
      </div>

      {/* Contact information and form section */}
      <Container className="seccion">
        <Row>
          {/* Contact information cards */}
          <Col md={4} className="mb-4">
            <Card className="tarjeta-personalizada shadow h-100 text-center">
              <Card.Body className="p-4">
                <div className="mb-3">
                  <i className="bi bi-geo-alt-fill fs-1 texto-dorado"></i>
                </div>
                <Card.Title className="h5">Dirección</Card.Title>
                <Card.Text>
                  Colegio Marista
                  <br />
                  Gabriel René Moreno
                  <br />
                  3FPF+G73, Comarapa
                  <br />
                  Santa Cruz, Bolivia
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="tarjeta-personalizada shadow h-100 text-center">
              <Card.Body className="p-4">
                <div className="mb-3">
                  <i className="bi bi-telephone-fill fs-1 texto-dorado"></i>
                </div>
                <Card.Title className="h5">Teléfono</Card.Title>
                <Card.Text>+591 69014360</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="tarjeta-personalizada shadow h-100 text-center">
              <Card.Body className="p-4">
                <div className="mb-3">
                  <i className="bi bi-envelope-fill fs-1 texto-dorado"></i>
                </div>
                <Card.Title className="h5">Correo Electrónico</Card.Title>
                <Card.Text>elmeralexandervf18@gmail.com</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Contact form and map section */}
      <div className="seccion seccion-alternativa">
        <Container>
          <Row>
            {/* Contact form */}
            <Col md={6} className="mb-4">
              <h2 className="mb-4">Envíanos un Mensaje</h2>
              <Form onSubmit={manejarEnvio}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre Completo</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={datosFormulario.nombre}
                    onChange={manejarCambio}
                    placeholder="Ingresa tu nombre"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    name="correo"
                    value={datosFormulario.correo}
                    onChange={manejarCambio}
                    placeholder="ejemplo@gmail.com"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="mensaje"
                    value={datosFormulario.mensaje}
                    onChange={manejarCambio}
                    rows={5}
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  className="w-100"
                >
                  <i className="bi bi-send me-2"></i>
                  Enviar Mensaje
                </Button>
              </Form>
            </Col>

            {/* Map and office hours */}
            <Col md={6} className="mb-4">
              <h2 className="mb-4">Ubicación</h2>
              {/* Embedded map iframe - Ubicación exacta del colegio */}
              <div className="mb-3 rounded overflow-hidden shadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.27460072227984!2d-64.52688511616184!3d-17.913786186946886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fab1d7e3c0d24b%3A0xd025def912d49dfc!2sColegio%20Gabriel%20Ren%C3%A9%20Moreno%20Fe%20y%20Alegr%C3%ADa!5e0!3m2!1ses!2sus!4v1759898845800!5m2!1ses!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del Colegio Marista Gabriel René Moreno"
                ></iframe>
              </div>

              {/* Office hours card */}
              <Card className="shadow">
                <Card.Body className="p-3">
                  <h6 className="mb-2">
                    <i className="bi bi-clock texto-dorado me-2"></i>
                    Horario de Atención
                  </h6>
                  <div className="mb-1">
                    <strong>Lunes a Viernes:</strong> 8:00 AM - 4:00 PM
                  </div>
                  <div className="mb-1">
                    <strong>Sábados:</strong> 9:00 AM - 1:00 PM
                  </div>
                  <div className="mb-0">
                    <strong>Domingos y Feriados:</strong> Cerrado
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Contacto;