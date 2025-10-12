import { Carousel } from 'react-bootstrap';

function Carrusel({ imagenes }) {
  // Array of carousel items - las primeras 3 con texto, las demás sin texto
  const itemsCarrusel = [
    {
      imagen: imagenes[0]?.src,
      titulo: 'Formando Jóvenes',
      descripcion: 'Educación integral que forma buenos cristianos y virtuosos ciudadanos'
    },
    {
      imagen: imagenes[1]?.src,
      titulo: 'Actividades Solidarias',
      descripcion: 'Compromiso con la comunidad y servicio a los más necesitados'
    },
    {
      imagen: imagenes[2]?.src,
      titulo: 'Instalaciones Modernas',
      descripcion: 'Espacios equipados para el desarrollo integral de nuestros estudiantes'
    }
  ];

  // Agregar las imágenes restantes sin texto (vida-escolar)
  const imagenesRestantes = imagenes.slice(3).map(img => ({
    imagen: img.src,
    titulo: null,
    descripcion: null
  }));

  const todasLasImagenes = [...itemsCarrusel, ...imagenesRestantes];

  return (
    <Carousel fade className="mb-5">
      {todasLasImagenes.map((item, indice) => (
        <Carousel.Item key={indice}>
          <img
            className="d-block w-100"
            src={item.imagen}
            alt={item.titulo || 'Vida Escolar'}
            style={{ height: '500px', objectFit: 'cover' }}
          />
          {item.titulo && (
            <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrusel;