import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import primaria from '../assets/images/primaria.jpg';
import secundaria from '../assets/images/secundaria.jpg';
import colegioImage from '../assets/images/colegio-gabriel-rene-moreno.jpg';


function Niveles() {
  // Educational levels data
  const nivelesEducativos = [
    {
      nivel: 'Educación Primaria',
      edades: '6 a 11 años',
      descripcion: 'La educación primaria en nuestro colegio se centra en consolidar las competencias básicas de lectura, escritura y matemáticas, mientras desarrollamos el pensamiento crítico y los valores maristas. Acompañamos a cada estudiante en su crecimiento académico, espiritual y personal.',
      caracteristicas: [
        '14 cursos en turno tarde',
        'Currículo integral basado en valores cristianos',
        'Participación en grupos de Infancia Misionera (1ro a 5to)',
        'Acompañamiento tutorial personalizado',
        'Formación en el espíritu de familia marista',
        'Actividades pastorales: eucaristías, celebraciones marianas'
      ],
      requisitos: [
        'Tener 6 años cumplidos hasta junio (si cumple después de julio, debe tener 7 años)',
        'Certificado de nacimiento',
        'Libreta de kínder',
        'Certificado de vacunas',
        'Carnet de padre o madre (y del niño si lo tiene)',
        'Pase directo si tiene hermanos estudiando en el colegio'
      ],
      imagen: primaria,
      icono: 'book',
      directora: 'Lidia Céspedes Rojas'
    },
    {
      nivel: 'Educación Secundaria',
      edades: '12 a 17 años',
      descripcion: 'En secundaria, preparamos a nuestros estudiantes para los desafíos académicos y personales del futuro. Fortalecemos su identidad, autonomía y proyecto de vida, brindándoles herramientas para su desarrollo integral y formación como buenos cristianos y virtuosos ciudadanos.',
      caracteristicas: [
        '20 cursos en total',
        'Preparación académica sólida',
        'Grupos pastorales: GAMA (6to Primaria a 2do Sec.) y MARCHA (3ro a 6to Sec.)',
        'Retiros espirituales para 5to y 6to de secundaria',
        'Campamento Trabajo: servicio comunitario de una semana',
        'Formación vocacional y proyecto de vida',
        'Liderazgo y servicio a la comunidad'
      ],
      requisitos: [
        'Aprobar 6to de Primaria para ingresar a 1ro de Secundaria',
        'Si viene de otro colegio: certificado de nacimiento',
        'Carnet del estudiante',
        'Libretas de años anteriores'
      ],
      imagen: secundaria,
      icono: 'mortarboard',
      directora: 'Cristina Salguero Sandoval'
    }
  ];

  return (
    <div>
      {/* Page header */}
      <div 
        className="hero-seccion d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 61, 130, 0.3), rgba(0, 61, 130, 0.3)), url(${colegioImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '400px'
        }}
      >
        <Container>
          <h1 className="display-4 fw-bold mb-3" style={{color: '#ffffff', textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
            Niveles Educativos
          </h1>
          <p className="lead" style={{color: '#ffffff', textShadow: '0 0 20px rgba(255,193,7,0.8), 2px 2px 8px rgba(0,0,0,0.9)'}}>
            Formación integral en cada etapa
          </p>
        </Container>
      </div>

      {/* Educational levels sections */}
      {nivelesEducativos.map((nivel, indice) => (
        <div 
          key={indice} 
          className={`seccion ${indice % 2 === 1 ? 'seccion-alternativa' : ''}`}
        >
          <Container>
            <Row className="align-items-center">
              {/* Image column - alternates position */}
              <Col 
                md={6} 
                className={`mb-4 mb-md-0 ${indice % 2 === 1 ? 'order-md-2' : ''}`}
              >
                <img 
                  src={nivel.imagen} 
                  alt={nivel.nivel}
                  className="img-fluid rounded shadow"
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover'
                  }}
                />
              </Col>
              
              {/* Content column */}
              <Col md={6}>
                <div className="mb-3">
                  <i className={`bi bi-${nivel.icono} fs-1 texto-dorado`}></i>
                </div>
                <h2 className="mb-3">{nivel.nivel}</h2>
                <p className="lead texto-dorado mb-2">
                  <i className="bi bi-people me-2"></i>
                  {nivel.edades}
                </p>
                <p className="text-muted mb-3">
                  <i className="bi bi-person-badge me-2"></i>
                  <strong>Directora:</strong> {nivel.directora}
                </p>
                <p className="mb-4">{nivel.descripcion}</p>
                
                {/* Characteristics list */}
                <h5 className="mb-3">Características:</h5>
                <ul className="list-unstyled mb-4">
                  {nivel.caracteristicas.map((caracteristica, idx) => (
                    <li key={idx} className="mb-2">
                      <i className="bi bi-check-circle-fill texto-dorado me-2"></i>
                      {caracteristica}
                    </li>
                  ))}
                </ul>

                {/* Requirements section */}
                <h5 className="mb-3">Requisitos de Admisión:</h5>
                <ul className="list-unstyled">
                  {nivel.requisitos.map((requisito, idx) => (
                    <li key={idx} className="mb-2">
                      <i className="bi bi-clipboard-check texto-dorado me-2"></i>
                      {requisito}
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      ))}

      {/* Infrastructure and facilities section */}
      <Container className="seccion">
        <h2 className="text-center mb-5">Infraestructura y Equipamiento</h2>
        <p className="text-center mb-5">
          Contamos con instalaciones diseñadas para ofrecer un entorno propicio para el 
          aprendizaje y el desarrollo integral de nuestros estudiantes.
        </p>
        <Row>
          <Col md={3} className="mb-4">
            <Card className="tarjeta-personalizada shadow text-center h-100">
              <Card.Body className="p-4">
                <i className="bi bi-building fs-1 texto-dorado mb-3"></i>
                <Card.Title>Aulas Equipadas</Card.Title>
                <Card.Text>
                  Aulas con buena iluminación natural y ventilación, equipadas con pizarras 
                  y mobiliario adecuado para cada nivel.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={3} className="mb-4">
            <Card className="tarjeta-personalizada shadow text-center h-100">
              <Card.Body className="p-4">
                <i className="bi bi-laptop fs-1 texto-dorado mb-3"></i>
                <Card.Title>Laboratorios</Card.Title>
                <Card.Text>
                  Laboratorios de Física, Química e Informática equipados con 
                  material didáctico y tecnología educativa.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={3} className="mb-4">
            <Card className="tarjeta-personalizada shadow text-center h-100">
              <Card.Body className="p-4">
                <i className="bi bi-trophy fs-1 texto-dorado mb-3"></i>
                <Card.Title>Áreas Deportivas</Card.Title>
                <Card.Text>
                  Canchas paras las disciplinas deportivas, fomentando la 
                  actividad física y el trabajo en equipo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={3} className="mb-4">
            <Card className="tarjeta-personalizada shadow text-center h-100">
              <Card.Body className="p-4">
                <i className="bi bi-house-heart fs-1 texto-dorado mb-3"></i>
                <Card.Title>Espacios Múltiples</Card.Title>
                <Card.Text>
                  Salón de usos múltiples para eventos culturales y áreas verdes recreativas 
                  para el bienestar emocional de los estudiantes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Niveles;