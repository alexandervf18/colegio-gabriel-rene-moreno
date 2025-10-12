# Recursos (Resources)

This folder is intended for storing school images and media files.

## Suggested Structure

```
recursos/
├── logos/
│   ├── logo-principal.png
│   └── logo-blanco.png
├── banners/
│   ├── hero-inicio.jpg
│   ├── hero-nosotros.jpg
│   └── hero-niveles.jpg
├── instalaciones/
│   ├── aulas.jpg
│   ├── laboratorios.jpg
│   ├── biblioteca.jpg
│   └── deportes.jpg
├── actividades/
│   ├── pastoral-1.jpg
│   ├── pastoral-2.jpg
│   └── eventos.jpg
└── equipo/
    ├── director.jpg
    ├── subdirector.jpg
    └── coordinadores.jpg
```

## Image Guidelines

- **Format**: Use JPG for photos, PNG for logos with transparency
- **Size**: Optimize images for web (max 1920px width for banners)
- **Quality**: Balance between quality and file size (70-80% compression)
- **Naming**: Use descriptive names in Spanish with hyphens (e.g., `aula-primaria.jpg`)

## Current Placeholders

All current images use placeholder services (picsum.photos). Replace them with actual school photos by:

1. Adding images to this folder
2. Importing them in the respective component files
3. Replacing the placeholder URLs with the imported images

Example:
```javascript
import heroImage from '../recursos/banners/hero-inicio.jpg';
// Then use: src={heroImage}
```
