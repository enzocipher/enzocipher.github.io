# EnzoCipher — React + Vite conversion

Este directorio contiene una versión inicial de la web convertida a React con Vite.

Instrucciones rápidas:

1. Abrir terminal en `react-app`.
2. Ejecutar `npm install`.
3. Ejecutar `npm run dev` para iniciar el servidor de desarrollo.

Notas:
- Los estilos y scripts originales se copiaron a `public/` y se referencian desde `index.html`.
- La página `Proyectos` consume `public/repos.json` (cache estático) en lugar de consultar la API de GitHub desde el navegador.
- Actualización manual del cache: `npm run update:repos`.
- Actualización automática semanal: workflow de GitHub Actions en `.github/workflows/update-repos.yml`.
