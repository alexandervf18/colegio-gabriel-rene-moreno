import { Container, Row, Col, Card } from 'react-bootstrap';
import logoMarista from '../assets/images/logo-marista.jpeg';
import docentesComprometidos from '../assets/images/docentes-comprometidos.jpg';
import personalAdministrativo from '../assets/images/personal-administrativo.jpg';
import gruposPastoral from '../assets/images/grupos-pastoral.jpg';
import carismaMarista2 from '../assets/images/carisma-marista2.jpg';
import colegioImage from '../assets/images/colegio-gabriel-rene-moreno.jpg';

function Nosotros() {
  // Organizational structure data
  const estructuraOrganizacional = [
    { cargo: 'Coordinador de la Obra Marista', nombre: 'Hno. Gregorio Delgado Soler', icono: 'person-badge' },
    { cargo: 'Directora de Secundaria', nombre: 'Lic. Cristina Salguero Sandoval', icono: 'mortarboard' },
    { cargo: 'Directora de Primaria', nombre: 'Lidia Céspedes Rojas', icono: 'pencil' },
    { cargo: 'Encargada de Pastoral', nombre: 'Jhenny Magali Claure Toledo', icono: 'heart' },
    { cargo: 'Consejo de Docentes', nombre: 'Todo el profesorado', icono: 'people' },
    { cargo: 'Comité de Padres de Familia', nombre: 'Representantes de padres', icono: 'house-heart' }
  ];

  // Community data with images
  const comunidadEducativa = [
    {
      titulo: 'Docentes Comprometidos',
      imagen: docentesComprometidos,
      descripcion: 'Contamos con un equipo de profesionales comprometidos con la pedagogía marista, que educan con el ejemplo y acompañan espiritualmente a los estudiantes. Formamos parte del Consejo de Docentes y la Comisión Pedagógica.'
    },
    {
      titulo: 'Personal Administrativo y de Apoyo',
      imagen: personalAdministrativo,
      descripcion: 'Nuestro equipo está conformado por el portero, regente y personal administrativo que garantizan el buen funcionamiento diario de la institución, apoyando en organización, control y disciplina.'
    },
    {
      titulo: 'Equipo Pastoral',
      imagen: gruposPastoral,
      descripcion: 'La Pastoral Infantil Juvenil Marista ofrece grupos de formación (Infancia Misionera, GAMA y MARCHA) y organiza actividades espirituales, solidarias y de servicio para descubrir a Jesús en la vida cotidiana.'
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
            Nosotros
          </h1>
          <p className="lead" style={{color: '#ffffff', textShadow: '0 0 20px rgba(255,193,7,0.8), 2px 2px 8px rgba(0,0,0,0.9)'}}>
            Conoce nuestra historia, equipo y carisma marista
          </p>
        </Container>
      </div>

      {/* History section */}
      <Container className="seccion">
        <h2 className="text-center mb-5">Nuestra Historia</h2>
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <div 
              className="d-flex align-items-center justify-content-center rounded shadow"
              style={{
                width: '100%',
                height: '400px',
                backgroundColor: '#ffffff'
              }}
            >
              <img 
                src={logoMarista}
                alt="Historia del Colegio Gabriel René Moreno"
                style={{
                  maxWidth: '90%',
                  maxHeight: '90%',
                  objectFit: 'contain'
                }}
              />
            </div>
          </Col>
          <Col md={6}>
            <h3 className="mb-3">Más de 50 años educando en Comarapa</h3>
            <p>
              La Unidad Educativa Gabriel René Moreno, Marista - Fe y Alegría fue fundada en 
              <strong> 1971</strong> por el Instituto de los Hermanos Maristas y Fe y Alegría. 
              Desde sus inicios, nuestra institución se ha caracterizado por su compromiso con 
              la formación integral de niños, adolescentes y jóvenes de Comarapa.
            </p>
            <p>
              A lo largo de estas décadas, hemos formado a miles de estudiantes que hoy son 
              profesionales destacados y, sobre todo, "buenos cristianos y virtuosos ciudadanos" 
              comprometidos con la construcción de una sociedad más justa, fraterna y solidaria.
            </p>
            <p>
              El nombre <strong>"Gabriel René Moreno"</strong> honra al ilustre pensador boliviano, 
              mientras que el distintivo <strong>"Marista"</strong> refleja nuestra filosofía 
              educativa centrada en la formación integral inspirada en San Marcelino Champagnat.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6} className="order-md-2">
            <img 
              src={carismaMarista2}
              alt="El Carisma Marista"
              className="img-fluid rounded shadow"
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover'
              }}
            />
          </Col>
          <Col md={6} className="order-md-1">
            <h3 className="mb-3">El Carisma Marista y Nuestra Pastoral</h3>
            <p>
              San Marcelino Champagnat, fundador de los Hermanos Maristas, nos legó un estilo 
              educativo basado en la <strong>presencia, sencillez, amor al trabajo, espíritu 
              de familia y amor a María</strong>.
            </p>
            <p>
              María, inspiradora de la obra marista, nos guía a educar como ella educó a Jesús: 
              desde la vida de familia, la profunda relación con Dios y la sensibilidad hacia 
              toda situación de pobreza, debilidad y marginación.
            </p>
            <p>
              <strong>Nuestra Pastoral</strong> tiene como objetivo principal la formación 
              integral de los estudiantes en lo académico, espiritual y social, abriendo a 
              los jóvenes a su propia trascendencia para reconocer el sentido de las cosas, 
              de los otros y de Dios.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Organizational structure section */}
      <div className="seccion seccion-alternativa">
        <Container>
          <h2 className="text-center mb-5">Estructura Organizacional</h2>
          <p className="text-center mb-5">
            Nuestro equipo directivo trabaja coordinadamente para garantizar una educación 
            de calidad y el cumplimiento de nuestra misión evangelizadora.
          </p>
          <Row>
            {estructuraOrganizacional.map((miembro, indice) => (
              <Col md={4} key={indice} className="mb-4">
                <Card className="tarjeta-personalizada shadow text-center h-100">
                  <Card.Body className="p-4">
                    <div className="mb-3">
                      <i className={`bi bi-${miembro.icono} fs-1 texto-dorado`}></i>
                    </div>
                    <Card.Title className="h5">{miembro.cargo}</Card.Title>
                    <Card.Text className="text-muted">{miembro.nombre}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Staff and community section */}
      <Container className="seccion">
        <h2 className="text-center mb-5">Nuestra Comunidad Educativa</h2>
        <p className="text-center mb-5">
          Esta apasionante tarea de educar exige el acuerdo conjunto de todos los que están 
          implicados en ella: estudiantes, familias, educadores, directivos, hermanos maristas, 
          personal administrativo y ex-alumnos.
        </p>
        <Row>
          {comunidadEducativa.map((grupo, indice) => (
            <Col md={4} key={indice} className="mb-4">
              <Card className="tarjeta-personalizada shadow h-100">
                <Card.Img 
                  variant="top" 
                  src={grupo.imagen} 
                  alt={grupo.titulo}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{grupo.titulo}</Card.Title>
                  <Card.Text>
                    {grupo.descripcion}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Nosotros;