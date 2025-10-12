# Colegio Marista - Website

A complete informational website for Colegio Marista, built with React, Vite, Bootstrap, and React Router.

## Features

- **Fully Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional layout with blue, white, and gold color palette
- **Multi-page Navigation**: React Router implementation with 5 main pages
- **Bootstrap Components**: Cards, Carousel, Forms, and more
- **Spanish Language**: All components and variables named in Spanish
- **Educational Theme**: Designed for a Catholic educational institution

## Pages

1. **Inicio (Home)**: Hero section, mission/vision/values, carousel, news section
2. **Nosotros (About Us)**: School history, organizational structure, staff information
3. **Niveles Educativos (Educational Levels)**: Initial, Primary, and Secondary education details
4. **Pastoral**: Religious activities, Christian values, Marista spirituality
5. **Contacto (Contact)**: Contact form, map, office hours, FAQ

## Project Structure

```
src/
├── componentes/
│   ├── BarraNavegacion.jsx    # Navigation bar
│   ├── PieDePagina.jsx        # Footer
│   └── Carrusel.jsx           # Image carousel
├── paginas/
│   ├── Inicio.jsx             # Home page
│   ├── Nosotros.jsx           # About page
│   ├── Niveles.jsx            # Educational levels page
│   ├── Pastoral.jsx           # Pastoral page
│   └── Contacto.jsx           # Contact page
├── App.jsx                     # Main app with routes
├── App.css                     # Custom styles
├── main.jsx                    # Entry point
└── index.css                   # Global styles
```

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **React Router DOM**: Client-side routing
- **Bootstrap 5**: CSS framework
- **React Bootstrap**: Bootstrap components for React
- **Bootstrap Icons**: Icon library

## Color Palette

- **Primary Blue**: #003d82 (Marista blue)
- **Light Blue**: #0066cc
- **Gold**: #d4af37
- **White**: #ffffff
- **Light Gray**: #f8f9fa

## Customization

To replace placeholder content with real data:

1. **Images**: Replace placeholder images (picsum.photos) with actual school photos
2. **Text**: Update Lorem ipsum text with real school information
3. **Contact Info**: Update addresses, phone numbers, and email addresses
4. **Map**: Replace the embedded map iframe with your actual location
5. **Logo**: Replace the placeholder logo in BarraNavegacion.jsx

## Notes

- All variable names, component names, and function names are in Spanish as requested
- Code comments are in English for clarity
- The contact form is frontend-only (no backend integration)
- All images use placeholder services - replace with actual images
- The website is fully functional and ready to run with `npm run dev`

## License

This project is created for educational purposes.
# colegio-gabriel-rene-moreno
