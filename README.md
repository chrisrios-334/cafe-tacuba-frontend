# Café Tacuba

Proyecto de una cafetería desarrollado con React y Vite.

La página permite ver los productos disponibles, consultar recetas de café, registrarse, iniciar sesión y agregar productos a un comandero.

## Tecnologías

- React
- JavaScript
- Bootstrap
- React Router
- Axios
- SweetAlert2
- Vite

## Funcionalidades

- Home: página principal con productos e información de la cafetería.
- Login: permite registrar usuarios e iniciar sesión usando localStorage.
- Cartilla: muestra los productos y permite agregarlos o quitarlos del comandero.
- Recetas: muestra recetas de café obtenidas desde una API pública.

## TP7 - Hooks

Usamos useState para guardar y actualizar datos que cambian, como los productos del comandero, los formularios y las recetas.

También usamos useEffect para ejecutar funciones al cargar componentes, por ejemplo el carrusel de Nosotros y la petición a la API.

## TP8 - API

Para las recetas usamos una API pública de café.

La petición se hace con Axios dentro de useEffect y los datos se guardan usando useState.

Con map mostramos las recetas en tarjetas. También agregamos un mensaje de carga y usamos SweetAlert2 para mostrar errores.

La URL de la API se guarda en un archivo .env para no escribirla directamente en el componente.

## Instalación

1. Clonar el repositorio.
2. Entrar a la carpeta del proyecto.
3. Ejecutar npm install.
4. Crear un archivo .env con la variable VITE_API_URL, usando como referencia .env.example.
5. Ejecutar npm run dev.

## Repositorio

[GitHub Café Tacuba](https://github.com/chrisrios-334/cafe-tacuba-frontend)
