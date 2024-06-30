# Like Me - DESAFIO LATAM

Este proyecto es una aplicación de red social donde los usuarios pueden crear, eliminar y dar "like" a las publicaciones.

## Requisitos previos

- Node.js y npm instalados
- PostgreSQL en funcionamiento

## Configuración

1. Clona el repositorio.
2. Navega al directorio del proyecto.
3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```env
   PG_USER=postgres
   PG_HOST=localhost
   PG_DATABASE=likeme
   PG_PASSWORD=tu_contraseña
   PG_PORT=5432
   ```

- EJECUTA npm install y luego npm run start para levatar servidor y app react.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
