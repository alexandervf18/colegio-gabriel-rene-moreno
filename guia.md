# 📚 Guía del Proyecto - Para Estudiantes

## ¿Qué es este proyecto?

Este es un *sitio web* para el Colegio Marista hecho con tecnologías modernas de programación web. Es como crear una página de Facebook o Instagram, pero desde cero.

## 🛠 ¿Qué tecnologías usamos?

### React
Es como los bloques de LEGO para hacer páginas web. En vez de escribir todo el código de una vez, creamos "piezas" (componentes) que podemos reutilizar.

*Ejemplo:* El menú de navegación es una pieza que aparece en todas las páginas.

### Vite
Es la herramienta que "construye" nuestro proyecto. Piensa en ella como el horno que cocina todos los ingredientes para hacer un pastel.

### Bootstrap
Es como tener un catálogo de diseños ya hechos. En vez de diseñar botones y menús desde cero, usamos los que ya están bonitos.

### React Router
Es el "GPS" de nuestra página. Nos ayuda a ir de una página a otra (Inicio → Nosotros → Contacto).

## 📁 ¿Cómo está organizado el proyecto?


colegio-marista/
│
├── src/                          ← Aquí está TODO nuestro código
│   │
│   ├── componentes/              ← Piezas reutilizables
│   │   ├── BarraNavegacion.jsx  ← El menú de arriba
│   │   ├── PieDePagina.jsx      ← El footer de abajo
│   │   └── Carrusel.jsx         ← Las fotos que se mueven solas
│   │
│   ├── paginas/                  ← Las 5 páginas del sitio
│   │   ├── Inicio.jsx           ← Página principal
│   │   ├── Nosotros.jsx         ← Quiénes somos
│   │   ├── Niveles.jsx          ← Inicial, Primaria, Secundaria
│   │   ├── Pastoral.jsx         ← Actividades religiosas
│   │   └── Contacto.jsx         ← Formulario y mapa
│   │
│   ├── assets/                   ← Aquí van las IMÁGENES
│   │
│   ├── App.jsx                   ← El "cerebro" que conecta todo
│   ├── App.css                   ← Estilos personalizados
│   └── main.jsx                  ← El punto de inicio
│
├── public/                       ← Archivos públicos (favicon, etc)
├── package.json                  ← Lista de herramientas instaladas
└── index.html                    ← La página HTML principal


## 🚀 ¿Cómo empezó este proyecto?

### Paso 1: Crear el proyecto
bash
npm create vite@latest colegio-marista -- --template react

Esto creó la estructura básica del proyecto.

### Paso 2: Instalar herramientas
bash
npm install
npm install bootstrap react-bootstrap bootstrap-icons react-router-dom

Instalamos Bootstrap (para diseño) y React Router (para navegación).

### Paso 3: Crear los componentes
Creamos las "piezas" del sitio:
- *BarraNavegacion*: El menú de arriba
- *PieDePagina*: El footer de abajo
- *Carrusel*: Las fotos que cambian automáticamente

### Paso 4: Crear las páginas
Creamos 5 páginas diferentes:
1. *Inicio*: La página principal con bienvenida
2. *Nosotros*: Historia del colegio
3. *Niveles*: Inicial, Primaria, Secundaria
4. *Pastoral*: Actividades religiosas
5. *Contacto*: Formulario y mapa

### Paso 5: Conectar todo
En App.jsx conectamos las páginas con React Router para poder navegar entre ellas.

## 🎨 ¿Qué colores usamos?

- *Azul Marista*: #003d82 (el color principal del colegio)
- *Azul Claro*: #0066cc (para cuando pasas el mouse)
- *Dorado*: #d4af37 (para detalles especiales)
- *Blanco*: #ffffff
- *Gris Claro*: #f8f9fa (para fondos)

## 💻 ¿Cómo usar el proyecto?

### Para ver el sitio en tu computadora:

1. *Abrir la terminal* (el cuadro negro donde escribes comandos)

2. *Ir a la carpeta del proyecto:*
   bash
   cd colegio-marista
   

3. *Instalar todo lo necesario* (solo la primera vez):
   bash
   npm install
   

4. *Iniciar el proyecto:*
   bash
   npm run dev
   

5. *Abrir en el navegador:*
   - Ve a: http://localhost:5173
   - ¡Ya puedes ver tu sitio web!

### Para detener el proyecto:
- Presiona Ctrl + C en la terminal

## 📝 ¿Qué tiene cada página?

### 🏠 Inicio
- Banner grande de bienvenida
- Misión, Visión y Valores
- Carrusel con 3 fotos
- Noticias recientes

### 👥 Nosotros
- Historia del colegio
- Qué es el estilo Marista
- Organigrama (Director, Coordinadores, etc.)
- Equipo de profesores

### 📚 Niveles
- *Inicial*: Para niños de 3-5 años
- *Primaria*: Para niños de 6-11 años
- *Secundaria*: Para adolescentes de 12-16 años
- Servicios extras: laboratorios, biblioteca, deportes

### ⛪ Pastoral
- Actividades religiosas
- Valores cristianos
- Espiritualidad Marista

### 📞 Contacto
- Formulario para enviar mensajes
- Mapa de Google Maps
- Dirección, teléfono, email
- Horarios de atención

## 🔧 ¿Cómo funciona?

### Componentes (las piezas)
Imagina que cada componente es como una pieza de LEGO:

javascript
function BarraNavegacion() {
  return (
    <nav>
      <a href="/">Inicio</a>
      <a href="/nosotros">Nosotros</a>
      <a href="/contacto">Contacto</a>
    </nav>
  );
}


### Páginas
Las páginas usan los componentes:

javascript
function Inicio() {
  return (
    <>
      <BarraNavegacion />    {/* El menú */}
      <h1>Bienvenidos</h1>   {/* Contenido */}
      <PieDePagina />        {/* El footer */}
    </>
  );
}


### Navegación
React Router nos permite cambiar de página sin recargar:

javascript
<Routes>
  <Route path="/" element={<Inicio />} />
  <Route path="/nosotros" element={<Nosotros />} />
  <Route path="/contacto" element={<Contacto />} />
</Routes>


## 🎯 ¿Qué puedes personalizar?

### 1. Cambiar textos
Abre cualquier archivo .jsx y cambia el texto entre <h1> o <p>:

javascript
<h1>Bienvenidos al Colegio Marista</h1>
// Cámbialo por:
<h1>¡Hola! Somos el Colegio Marista</h1>


### 2. Agregar imágenes
1. Guarda tu imagen en src/assets/
2. Impórtala en tu componente:
   javascript
   import miImagen from './assets/mi-foto.jpg'
   
3. Úsala:
   javascript
   <img src={miImagen} alt="Descripción" />
   

### 3. Cambiar colores
Abre App.css y modifica:

css
.navbar {
  background-color: #003d82;  /* Cambia este color */
}


## 📱 ¿Funciona en celulares?

¡Sí! El sitio es *responsive*, significa que se adapta automáticamente a:
- 📱 Celulares
- 📱 Tablets
- 💻 Computadoras

Bootstrap hace esto automáticamente usando su sistema de "grid" (cuadrícula).

## ❓ Preguntas Frecuentes

### ¿Qué es npm?
Es como una "tienda de aplicaciones" para programadores. Nos permite descargar herramientas (como Bootstrap o React).

### ¿Qué es un componente?
Es una pieza reutilizable de código. Como un molde de galletas: usas el mismo molde para hacer muchas galletas.

### ¿Por qué usamos React?
Porque hace más fácil crear sitios web interactivos. Es como tener superpoderes para programar.

### ¿Puedo romper algo?
¡No te preocupes! Si algo sale mal:
1. Presiona Ctrl + Z para deshacer
2. O usa Git para volver a una versión anterior

## 🎓 Conceptos que aprendiste

✅ *HTML*: La estructura de las páginas
✅ *CSS*: Los estilos y colores
✅ *JavaScript*: La programación e interactividad
✅ *React*: Crear componentes reutilizables
✅ *Responsive Design*: Que funcione en todos los dispositivos
✅ *Navegación*: Ir de una página a otra
✅ *Git*: Control de versiones (guardar cambios)

## 🏆 ¡Felicidades!

Ahora sabes cómo funciona un sitio web moderno. Esto es lo que usan empresas como:
- Facebook (usa React)
- Instagram (usa React)
- Netflix (usa React)
- Airbnb (usa React)

## 📚 ¿Quieres aprender más?

### Tutoriales recomendados:
- *React*: https://react.dev/learn
- *Bootstrap*: https://getbootstrap.com/docs/
- *JavaScript*: https://javascript.info/

### Videos en YouTube:
- Busca: "React para principiantes"
- Busca: "Bootstrap tutorial español"
- Busca: "Cómo hacer una página web"

---

*¡Sigue practicando y experimentando! 🚀*

La mejor forma de aprender es haciendo. No tengas miedo de cambiar cosas y ver qué pasa.