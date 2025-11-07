import { Container, Row, Col } from 'react-bootstrap';

function PieDePagina() {
  return (
    <footer className="py-5 mt-5   ">
      <Container>
        <Row>
          {/* Contact information section */}
          <Col md={4} className="mb-4">
            <h5 className="texto-dorado">Contacto</h5>
            <p className="mb-1">
              <i className="bi bi-geo-alt-fill me-2"></i>
              3FPF+G73, Comarapa
            </p>
            <p className="mb-1">
              <i className="bi bi-telephone-fill me-2"></i>
              +591 69014360
            </p>
            <p className="mb-1">
              <i className="bi bi-envelope-fill me-2"></i>
              elmeralexandervf18@gmail.com
            </p>
             <p className="mb-1">
              <i className="bi bi-envelope-fill me-2"></i>
              breidyrojascotrina10@gmail.com
               </p>
          </Col>
          {/* Quick links section */}
          <Col md={4} className="mb-4">
            <h5 className="texto-dorado">Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li><a href="/">Inicio</a></li>
              <li><a href="/nosotros">Nosotros</a></li>
              <li><a href="/niveles">Niveles Educativos</a></li>
              <li><a href="/pastoral">Pastoral</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </Col>
          
          {/* Social media section */}
          <Col md={4} className="mb-4">
            <h5 className="texto-dorado">Síguenos</h5>
            <div className="d-flex gap-3 fs-4">
              <a href="https://www.facebook.com/share/1E8wSWRCUF/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </Col>
        </Row>
        
        {/* Copyright section */}
        <Row className="mt-4 pt-4 border-top border-secondary">
          <Col className="text-center">
            <p className="mb-0">
              &copy; 2025 Colegio Gabriel Rene Moreno. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default PieDePagina;