import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BarraNavegacion() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        {/* School name with cross */}
        <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center" style={{ color: '#003d82' }}>
          <span className="me-2" style={{ fontSize: '1.5rem', color: '#ffc107' }}>✟</span>
          Colegio Gabriel René Moreno
        </Navbar.Brand>
        
        {/* Mobile menu toggle */}
        <Navbar.Toggle aria-controls="navbar-principal" />
        
        {/* Navigation links */}
        <Navbar.Collapse id="navbar-principal">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="mx-2">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/nosotros" className="mx-2">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/niveles" className="mx-2">Niveles Educativos</Nav.Link>
            <Nav.Link as={Link} to="/pastoral" className="mx-2">Pastoral</Nav.Link>
            <Nav.Link as={Link} to="/contacto" className="mx-2">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;