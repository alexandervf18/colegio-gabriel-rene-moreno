import { Container, Row, Col, Card } from 'react-bootstrap';
import pastoral from '../assets/images/pastoral.png';
import colegioImage from '../assets/images/colegio-gabriel-rene-moreno.jpg';

function Pastoral() {
  // Pastoral activities data
  const actividadesPastorales = [
    {
      titulo: 'Eucaristías Semanales',
      descripcion: 'Participación de todos los cursos en eucaristías cada miércoles por la noche, fortaleciendo nuestra fe comunitaria.',
      icono: 'plus-circle-fill'
    },
    {
      titulo: 'Retiros Espirituales',
      descripcion: 'Retiros con estudiantes de 5to y 6to de Secundaria para interiorización personal, formación vocacional e inicio de proyecto de vida.',
      icono: 'tree'
    },
    {
      titulo: 'Campamento Trabajo',
      descripcion: 'Estudiantes de 6to de Secundaria se trasladan a una comunidad durante una semana para realizar servicio comunitario.',
      icono: 'backpack'
    },
    {
      titulo: 'Grupos Pastorales',
      descripcion: 'Infancia Misionera (1ro-5to Primaria), GAMA (6to Primaria-2do Sec.) y MARCHA (3ro-6to Sec.) para descubrir a Jesús en la vida cotidiana.',
      icono: 'people'
    },
    {
      titulo: 'Actividades Solidarias',
      descripcion: 'Donación de ropa para Fundación Calentando Corazones, apoyo al adulto mayor, recaudación de alimentos para comunidades afectadas.',
      icono: 'heart-fill'
    },
    {
      titulo: 'Mes Mariano',
      descripcion: 'Actividades especiales con niños de Primaria durante el mes de mayo en honor a María, nuestra Buena Madre.',
      icono: 'star-fill'
    },
    {
      titulo: 'Bendiciones Escolares',
      descripcion: 'Bendiciones de inicio del año escolar tanto en Primaria como en Secundaria para comenzar con la protección de Dios.',
      icono: 'hand-thumbs-up'
    },
    {
      titulo: 'Talleres de Valores',
      descripcion: 'Talleres de fortalecimiento de valores maristas realizados 1 o 2 veces al año para guiar a los jóvenes por el buen camino.',
      icono: 'award'
    },
    {
      titulo: 'Kermés Solidarias',
      descripcion: 'Rifas y recaudaciones curso por curso para ayudar a estudiantes con enfermedades graves o que necesitan apoyo económico.',
      icono: 'gift'
    }
  ];

  // Pastoral groups description
  const gruposPastorales = [
    {
      grupo: 'Infancia Misionera',
      nivel: '1ro a 5to de Primaria',
      descripcion: 'Se incentiva a crear pequeños líderes y misioneros para que ayuden en la comunidad con pequeñas acciones, descubriendo el amor de Dios desde temprana edad.',
      icono: 'balloon-heart',
      color: '#4CAF50'
    },
    {
      grupo: 'GAMA',
      nivel: '6to de Primaria a 2do de Secundaria',
      descripcion: 'El objetivo es trabajar en comunidad y hacer amigos mientras se descubren a sí mismos, promoviendo valores y el compañerismo cristiano.',
      icono: 'people-fill',
      color: '#2196F3'
    },
    {
      grupo: 'Movimiento MARCHA',
      nivel: '3ro a 6to de Secundaria',
      descripcion: 'Es un compromiso más serio donde se tocan temas de la realidad y se hacen Servicios de Amor Concretos para beneficiar a los más vulnerables.',
      icono: 'compass',
      color: '#FF9800'
    }
  ];

  // Campamentos description
  const campamentos = [
    {
      nombre: 'Travesía',
      participantes: 'Adolescentes de 14-15 años de MARCHA',
      objetivo: 'Conocer el mundo y el propósito de su catequesis, fortaleciendo su identidad marista.'
    },
    {
      nombre: 'CEL',
      participantes: 'Peregrinos de MARCHA',
      objetivo: 'Formarse como líderes, llevan a cabo los temas de cada día del campamento y fortalecen su liderazgo.'
    },
    {
      nombre: 'Misión',
      participantes: 'Peregrinos de MARCHA',
      objetivo: 'Trabajo para comunidades alejadas: rozar caminos, pintar escuelas, arreglar caminos, entre otros.'
    },
    {
      nombre: 'Trabajo',
      participantes: 'Promoción de 6to Secundaria',
      objetivo: 'Similar al Misión, asiste la promoción de cada colegio marista realizando servicio comunitario.'
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
            Pastoral Educativa
          </h1>
          <p className="lead" style={{color: '#ffffff', textShadow: '0 0 20px rgba(255,193,7,0.8), 2px 2px 8px rgba(0,0,0,0.9)'}}>
            Formando buenos cristianos y virtuosos ciudadanos
          </p>
        </Container>
      </div>

      {/* Introduction section */}
      <Container className="seccion">
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="mb-4">Nuestra Pastoral</h2>
            <p className="lead">
              El objetivo principal de la pastoral del colegio marista de Comarapa es la 
              formación integral de los estudiantes, tanto en lo académico como en lo 
              espiritual y social.
            </p>
            <p>
              Buscamos formar a los estudiantes en los valores humanos y cristianos y abrirlos 
              a su propia trascendencia para reconocer el sentido de las cosas, de los otros 
              y de Dios.
            </p>
            <p>
              La pastoral asume el llamado a colaborar en el crecimiento armónico de cada una 
              de estas instancias para lograr de los niños y jóvenes educar "buenos cristianos 
              y virtuosos ciudadanos" como es el sueño de la Congregación Marista.
            </p>
            <p className="text-muted">
              <i className="bi bi-person-badge me-2"></i>
              <strong>Encargada de Pastoral:</strong> Jhenny Magali Claure Toledo
            </p>
          </Col>
          <Col md={6}>
            <img 
              src={pastoral}
              alt="Pastoral Educativa Gabriel René Moreno"
              className="img-fluid rounded shadow"
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover'
              }}
            />
          </Col>
        </Row>
      </Container>

      {/* Pastoral activities section */}
      <div className="seccion seccion-alternativa">
        <Container>
          <h2 className="text-center mb-5">Actividades Pastorales</h2>
          <p className="text-center mb-5">
            Actividades con estudiantes para transmitir la fe en cada uno de ellos
          </p>
          <Row>
            {actividadesPastorales.map((actividad, indice) => (
              <Col md={4} key={indice} className="mb-4">
                <Card className="tarjeta-personalizada shadow h-100">
                  <Card.Body className="text-center p-4">
                    <div className="mb-3">
                      <i className={`bi bi-${actividad.icono} fs-1 texto-dorado`}></i>
                    </div>
                    <Card.Title className="h5 mb-3">{actividad.titulo}</Card.Title>
                    <Card.Text>{actividad.descripcion}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Pastoral groups section */}
      <Container className="seccion">
        <h2 className="text-center mb-4">Grupos de Pastoral Infantil Juvenil Marista</h2>
        <p className="text-center lead mb-5">
          Ofrecemos grupos para niños, adolescentes y jóvenes con el propósito de 
          descubrir a Jesús en su vida cotidiana y reconocer la voluntad de Dios en sus vidas.
        </p>
        <Row>
          {gruposPastorales.map((grupo, indice) => (
            <Col md={4} key={indice} className="mb-4">
              <Card className="tarjeta-personalizada shadow h-100 border-0">
                <Card.Body className="p-4">
                  <div className="text-center mb-3">
                    <div 
                      className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: grupo.color,
                        color: 'white'
                      }}
                    >
                      <i className={`bi bi-${grupo.icono} fs-1`}></i>
                    </div>
                  </div>
                  <Card.Title className="text-center h4 mb-3">{grupo.grupo}</Card.Title>
                  <Card.Subtitle className="text-center text-muted mb-3">
                    <i className="bi bi-people me-2"></i>
                    {grupo.nivel}
                  </Card.Subtitle>
                  <Card.Text>{grupo.descripcion}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Campamentos section */}
      <div className="seccion seccion-alternativa">
        <Container>
          <h2 className="text-center mb-5">Campamentos y Convivencias</h2>
          <p className="text-center mb-5">
            Experiencias de formación, servicio y comunidad que transforman vidas
          </p>
          <Row>
            {campamentos.map((campamento, indice) => (
              <Col md={6} key={indice} className="mb-4">
                <Card className="tarjeta-personalizada shadow h-100">
                  <Card.Body className="p-4">
                    <Card.Title className="h4 mb-3">
                      <i className="bi bi-compass texto-dorado me-2"></i>
                      Campamento {campamento.nombre}
                    </Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">
                      <i className="bi bi-people me-2"></i>
                      {campamento.participantes}
                    </Card.Subtitle>
                    <Card.Text>
                      <strong>Objetivo:</strong> {campamento.objetivo}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Additional activities section */}
      <Container className="seccion">
        <h2 className="text-center mb-5">Formación de Catequistas y Líderes</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="tarjeta-personalizada shadow h-100">
              <Card.Body className="p-4">
                <div className="text-center mb-3">
                  <i className="bi bi-mortarboard fs-1 texto-dorado"></i>
                </div>
                <Card.Title className="text-center h5">Convivencias de Catequistas</Card.Title>
                <Card.Text>
                  Para el crecimiento y formación de los catequistas, se hacen cursillos donde 
                  se ven dinámicas, la biblia y distintos temas entorno a la catequesis.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4} className="mb-4">
            <Card className="tarjeta-personalizada shadow h-100">
              <Card.Body className="p-4">
                <div className="text-center mb-3">
                  <i className="bi bi-star fs-1 texto-dorado"></i>
                </div>
                <Card.Title className="text-center h5">Encuentros de Líderes</Card.Title>
                <Card.Text>
                  Se habla de vocación y formación personal, se enseña a ser líderes para 
                  servir a la comunidad con el ejemplo de Cristo y San Marcelino Champagnat.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4} className="mb-4">
            <Card className="tarjeta-personalizada shadow h-100">
              <Card.Body className="p-4">
                <div className="text-center mb-3">
                  <i className="bi bi-calendar-check fs-1 texto-dorado"></i>
                </div>
                <Card.Title className="text-center h5">Coordinadores</Card.Title>
                <Card.Text>
                  En los encuentros de coordinadores y subcoordinadores se planifican las 
                  catequesis, se hacen análisis de problemas y se buscan soluciones.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Pastoral;