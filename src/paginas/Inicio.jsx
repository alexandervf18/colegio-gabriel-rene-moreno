import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carrusel from '../componentes/Carrusel';
import colegioImage from '../assets/images/colegio-gabriel-rene-moreno.jpg';
import personasColegio from '../assets/images/personas-colegio.jpeg';
import formandoJovenes from '../assets/images/formando-jovenes.jpg';
import actividadSolidaria1 from '../assets/images/actividad-solidaria1.png';
import instalaciones from '../assets/images/instalaciones.jpg';
import vidaEscolar1 from '../assets/images/vida-escolar1.jpeg';
import vidaEscolar2 from '../assets/images/vida-escolar2.jpeg';
import vidaEscolar3 from '../assets/images/vida-escolar3.jpeg';
import inicioEscolar from '../assets/images/inicio-escolar.png';
import campamentoTrabajo from '../assets/images/campamento-trabajo.png';
import eucaristia from '../assets/images/eucaristia.png'


function Inicio() {
  // Navigation hook
  const navigate = useNavigate();

  // State for modal
  const [mostrarModal, setMostrarModal] = useState(false);
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);

  // Handle modal open
  const abrirModal = (noticia) => {
    setNoticiaSeleccionada(noticia);
    setMostrarModal(true);
  };

  // Handle modal close
  const cerrarModal = () => {
    setMostrarModal(false);
    setNoticiaSeleccionada(null);
  };

  // News/announcements data
  const noticias = [
    {
      titulo: 'Bendición de Inicio del Año Escolar 2025',
      fecha: 'Febrero 2025',
      descripcion: 'Celebramos el inicio del año escolar con la bendición a estudiantes de Primaria y Secundaria.',
      imagen: inicioEscolar,
      contenidoCompleto: `
        <p>Con gran alegría y fervor espiritual, nuestra comunidad educativa se reunió en el patio principal del colegio para celebrar la tradicional Bendición de Inicio del Año Escolar 2025. Esta emotiva ceremonia marcó el comienzo de un nuevo ciclo académico lleno de esperanzas y desafíos.</p>
        
        <p>La celebración comenzó a las 8:00 de la mañana con la participación de estudiantes de todos los niveles, desde el primer año de primaria hasta el sexto de secundaria, acompañados de sus padres, docentes, personal administrativo y los Hermanos Maristas. El Hno. Gregorio Delgado Soler, Coordinador de la Obra Marista, presidió la ceremonia junto al párroco de Comarapa.</p>
        
        <p>Durante la bendición, se encomendaron a Dios las actividades del año escolar, pidiendo sabiduría para los maestros, entusiasmo para los estudiantes y paciencia para los padres de familia. Se bendijeron los materiales escolares, las aulas y todos los espacios educativos, invocando la protección divina para cada miembro de nuestra comunidad.</p>
        
        <p>La encargada de Pastoral, Jhenny Magali Claure Toledo, recordó a los presentes la importancia de iniciar el año escolar con el corazón abierto a Dios y con la disposición de vivir los valores maristas: presencia, sencillez, amor al trabajo, espíritu de familia y amor a María. "Que este año sea de crecimiento no solo académico, sino también espiritual y humano", expresó con emoción.</p>
        
        <p>Los estudiantes de 6to de secundaria compartieron sus testimonios sobre su experiencia en el colegio y animaron a los más pequeños a aprovechar cada oportunidad de aprendizaje. Posteriormente, se realizó la tradicional bendición con agua bendita y la entrega de una estampita de San Marcelino Champagnat a cada estudiante como recordatorio del carisma marista que nos inspira.</p>
        
        <p>La ceremonia concluyó con el canto del himno marista y un desayuno compartido en el que participaron todas las familias, fortaleciendo así el espíritu de comunidad que nos caracteriza. ¡Que este año escolar 2025 esté lleno de bendiciones, aprendizajes significativos y momentos memorables para toda nuestra familia marista!</p>
      `
    },
    {
      titulo: 'Eucaristías con Estudiantes',
      fecha: 'Todos los Miércoles',
      descripcion: 'Participación de todos los cursos en las eucaristías nocturnas, fortaleciendo nuestra fe.',
      imagen: eucaristia,
      contenidoCompleto: `
        <p>Cada miércoles por la noche, nuestra comunidad educativa se reúne en la iglesia parroquial de Comarapa para participar de la Santa Eucaristía, una tradición que ha marcado la identidad espiritual del Colegio Gabriel René Moreno durante décadas. Esta celebración semanal es un pilar fundamental de nuestra pastoral educativa y un espacio privilegiado para el encuentro con Jesús.</p>
        
        <p>Las eucaristías nocturnas, que inician a las 19:00 horas, están organizadas de manera rotativa para que todos los cursos de primaria y secundaria puedan participar activamente. Cada semana, un curso diferente se encarga de la animación litúrgica, preparando las lecturas, las peticiones, los cantos y las ofrendas bajo la guía de sus profesores tutores y los catequistas de pastoral.</p>
        
        <p>Esta actividad no es solo un acto religioso, sino una oportunidad para que nuestros estudiantes profundicen su relación con Dios, aprendan a vivir en comunidad y fortalezcan los valores cristianos que nos identifican como institución marista. Durante la homilía, el sacerdote comparte reflexiones adaptadas a la realidad de los jóvenes, abordando temas como la amistad, la familia, el respeto, la solidaridad y el sentido de la vida.</p>
        
        <p>Los estudiantes valoran especialmente estos momentos de oración comunitaria. "Las eucaristías de los miércoles me ayudan a encontrar paz en medio del estrés escolar y a recordar que no estoy solo en mis desafíos", comparte Adriana, estudiante de 5to de secundaria. Por su parte, los padres de familia también están invitados a acompañar a sus hijos, creando así un espacio de encuentro y fortalecimiento de la fe familiar.</p>
        
        <p>La encargada de Pastoral, Jhenny Magali Claure Toledo, destaca que "estas celebraciones eucarísticas son el corazón de nuestra propuesta educativa marista. Aquí los estudiantes experimentan la presencia viva de Jesús y aprenden que la fe no es solo teoría, sino una forma de vida que transforma y da sentido a todo lo que hacemos".</p>
        
        <p>Además de las eucaristías regulares, durante tiempos litúrgicos especiales como Adviento, Cuaresma y el Mes de María, se organizan celebraciones temáticas con actividades complementarias que enriquecen la experiencia espiritual de los participantes. Los grupos pastorales (Infancia Misionera, GAMA y MARCHA) colaboran activamente en la organización y animación de estas celebraciones especiales.</p>
        
        <p>Te invitamos a ser parte de esta hermosa tradición. Cada miércoles, la comunidad marista se congrega para dar gracias, pedir por nuestras necesidades y fortalecer los lazos de fraternidad que nos unen. ¡Tu presencia y tu oración son importantes para nuestra familia escolar!</p>
      `
    },
    {
      titulo: 'Campamento Trabajo - 6to Secundaria',
      fecha: 'Durante el Año Escolar',
      descripcion: 'Estudiantes de 6to realizan servicio comunitario durante una semana en comunidades necesitadas.',
      imagen: campamentoTrabajo,
      contenidoCompleto: `
        <p>El Campamento Trabajo es una de las experiencias más significativas y transformadoras que viven los estudiantes del Colegio Gabriel René Moreno. Esta actividad, tradicional en todas las instituciones maristas, es el culmen del proceso formativo pastoral y marca profundamente la vida de los jóvenes de 6to de secundaria antes de su graduación.</p>
        
        <p>Durante una semana completa, la promoción de 6to de secundaria se traslada a una comunidad rural cercana a Comarapa para realizar un intenso trabajo de servicio comunitario. Acompañados por docentes, catequistas y el equipo de pastoral, los estudiantes viven una experiencia única de entrega, solidaridad y descubrimiento del verdadero sentido del servicio cristiano.</p>
        
        <h5>¿En qué consiste el Campamento Trabajo?</h5>
        <p>Las actividades que realizan los estudiantes son variadas y responden a las necesidades concretas de la comunidad anfitriona. Entre las tareas más comunes se encuentran:</p>
        <ul>
          <li>Refacción y pintura de aulas escolares y capillas comunitarias</li>
          <li>Construcción o mejora de caminos y senderos de acceso</li>
          <li>Apoyo en actividades agrícolas y reforestación</li>
          <li>Organización de actividades recreativas y educativas con niños de la comunidad</li>
          <li>Limpieza y mantenimiento de espacios públicos</li>
          <li>Talleres de alfabetización y refuerzo escolar</li>
        </ul>
        
        <h5>Más allá del trabajo físico</h5>
        <p>El Campamento Trabajo no es solo trabajo físico; es también un espacio privilegiado para la reflexión, el crecimiento personal y la vivencia comunitaria. Cada día incluye momentos de oración, celebraciones eucarísticas, dinámicas grupales y espacios de diálogo donde los jóvenes pueden compartir sus sentimientos, dudas y descubrimientos.</p>
        
        <p>"Durante el campamento descubrí que la verdadera felicidad no está en tener más cosas, sino en darse a los demás. Ver la sonrisa de los niños de la comunidad y la gratitud de las familias que nos recibieron fue la mejor recompensa", comparte Rodrigo, estudiante de la promoción 2024.</p>
        
        <h5>Preparación previa</h5>
        <p>Los estudiantes no llegan sin preparación al campamento. Durante los meses previos, participan en sesiones de formación donde reflexionan sobre temas como el servicio, la pobreza, la justicia social y el compromiso cristiano. También realizan actividades de recaudación de fondos para financiar materiales y alimentos que llevarán a la comunidad.</p>
        
        <h5>Frutos del Campamento Trabajo</h5>
        <p>Esta experiencia marca un antes y un después en la vida de los jóvenes. Muchos ex alumnos recuerdan el Campamento Trabajo como uno de los momentos más importantes de su paso por el colegio. Los valores de solidaridad, sencillez, trabajo en equipo y sensibilidad social que se vivencian durante esa semana permanecen para toda la vida.</p>
        
        <p>Como institución marista, seguimos el ejemplo de San Marcelino Champagnat, quien siempre tuvo una especial predilección por los más necesitados. El Campamento Trabajo es nuestra manera concreta de formar "buenos cristianos y virtuosos ciudadanos" comprometidos con la construcción de una sociedad más justa y fraterna.</p>
        
        <p>Los invitamos a apoyar esta hermosa iniciativa, ya sea con su oración, con donaciones o con palabras de aliento para nuestros jóvenes que pronto vivirán esta experiencia inolvidable. ¡Que Dios bendiga su generosidad y compromiso!</p>
      `
    }
  ];

  return (
    <div>
      {/* Hero section with background image */}
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
        <h1 className="display-3 fw-bold mb-4" style={{color: '#ffffff', textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
          Formando buenos cristianos y virtuosos ciudadanos
        </h1>
        <p className="lead fs-4" style={{color: '#ffffff', textShadow: '0 0 20px rgba(255,193,7,0.8), 2px 2px 8px rgba(0,0,0,0.9)'}}>
          Educación católica marista de excelencia desde 1971
        </p>
        <Button variant="warning" size="lg" className="mt-3 fw-bold" onClick={() => navigate('/nosotros')}>
          Conoce más sobre nosotros
        </Button>
      </Container>
      </div>

      {/* Introduction section */}
      <Container className="seccion">
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="mb-4">Bienvenidos al Colegio Gabriel René Moreno</h2>
            <p className="lead">
              Somos un centro educativo católico que la iglesia - a través del Instituto de los 
              Hermanos Maristas y Fe y Alegría - ofrece a la sociedad comarapeña desde 1971, 
              para promover la formación integral de niños, adolescentes y jóvenes.
            </p>
            <p>
              Proponen a las familias un proyecto educativo que armoniza fe, cultura y vida, 
              según el pensamiento de Marcelino Champagnat, nuestro Fundador. Nuestra comunidad 
              educativa trabaja día a día con sencillez, presencia y espíritu de familia.
            </p>
          </Col>
          <Col md={6}>
            <img 
              src={personasColegio}
              alt="Estudiantes del Colegio Gabriel Rene Moreno"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>

      {/* Mission, Vision, and Values section */}
      <div className="seccion seccion-alternativa">
        <Container>
          <h2 className="text-center mb-5">Nuestra Identidad Marista</h2>
          <Row>
            {/* Mission card */}
            <Col md={4} className="mb-4">
              <Card className="tarjeta-personalizada shadow h-100">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-bullseye fs-1 texto-dorado"></i>
                  </div>
                  <Card.Title className="h4 mb-3">Misión</Card.Title>
                  <Card.Text>
                    Proporcionar una educación integral de calidad, basada en los principios 
                    pedagógicos maristas y en el evangelio, promoviendo el desarrollo intelectual, 
                    espiritual, social y emocional de cada estudiante, cultivando talentos y 
                    fomentando el pensamiento crítico para ser ciudadanos responsables y solidarios.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            {/* Vision card */}
            <Col md={4} className="mb-4">
              <Card className="tarjeta-personalizada shadow h-100">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-eye fs-1 texto-dorado"></i>
                  </div>
                  <Card.Title className="h4 mb-3">Visión</Card.Title>
                  <Card.Text>
                    Ser un centro de excelencia educativa que forme líderes éticos y comprometidos 
                    con el desarrollo de su comunidad y del país. Buscamos que nuestros estudiantes 
                    sean agentes de cambio, con una sólida base académica y humana, capaces de 
                    enfrentar los desafíos del futuro.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            {/* Values card */}
            <Col md={4} className="mb-4">
              <Card className="tarjeta-personalizada shadow h-100">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-heart fs-1 texto-dorado"></i>
                  </div>
                  <Card.Title className="h4 mb-3">Valores Maristas</Card.Title>
                  <Card.Text>
                    Amor al trabajo, presencia, sencillez, espíritu de familia y amor a María. 
                    Educamos como lo hizo María con Jesús, desde la sencillez, la vida de familia 
                    y la profunda relación con Dios. Somos sensibles a toda situación de pobreza, 
                    debilidad y marginación.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

     {/* Image carousel section */}
      <Container className="seccion">
        <h2 className="text-center mb-5">Nuestra Vida Escolar en Comarapa</h2>
        <Carrusel 
          imagenes={[
            { src: formandoJovenes, alt: 'Formando Jóvenes' },
            { src: actividadSolidaria1, alt: 'Actividad Solidaria' },
            { src: instalaciones, alt: 'Instalaciones del Colegio' },
            { src: vidaEscolar1, alt: 'Vida Escolar' },
            { src: vidaEscolar2, alt: 'Vida Escolar' },
            { src: vidaEscolar3, alt: 'Vida Escolar' }
          ]}
        />
      </Container>

      {/* News and announcements section */}
      <div className="seccion seccion-alternativa">
        <Container>
          <h2 className="text-center mb-5">Actividades Pastorales y Anuncios</h2>
          <Row>
            {noticias.map((noticia, indice) => (
              <Col md={4} key={indice} className="mb-4">
                <Card className="tarjeta-personalizada shadow">
                  <Card.Img 
                    variant="top" 
                    src={noticia.imagen} 
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{noticia.titulo}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      <i className="bi bi-calendar3 me-2"></i>
                      {noticia.fecha}
                    </Card.Subtitle>
                    <Card.Text>{noticia.descripcion}</Card.Text>
                    <Button variant="primary" onClick={() => abrirModal(noticia)}>
                      Leer más
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Modal for news details */}
      <Modal show={mostrarModal} onHide={cerrarModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{noticiaSeleccionada?.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {noticiaSeleccionada && (
            <>
              <img 
                src={noticiaSeleccionada.imagen} 
                alt={noticiaSeleccionada.titulo}
                className="img-fluid rounded mb-3 w-100"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
              <p className="text-muted mb-3">
                <i className="bi bi-calendar3 me-2"></i>
                {noticiaSeleccionada.fecha}
              </p>
              <div dangerouslySetInnerHTML={{ __html: noticiaSeleccionada.contenidoCompleto }} />
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Inicio;