Café Tacuba

Proyecto web desarrollado con React y Vite para una cafetería ficticia. Permite explorar productos, consultar recetas de café, gestionar un comandero y utilizar formularios de registro e inicio de sesión.

Tecnologías utilizadas

React y Vite

JavaScript y JSX

React Router

Bootstrap 5

Axios

SweetAlert2

HTML5 y CSS3

Funcionalidades

Home: presentación de la cafetería, productos y sección Sobre nosotros.

Login: registro e inicio de sesión simulado mediante localStorage.

Cartilla: catálogo de productos con comandero interactivo para agregar y quitar productos y calcular el total.

Recetas: consulta de recetas de café mediante una API pública.

Navegación: rutas gestionadas con React Router.

TP7 — Hooks de React

Se utiliza useState para administrar estados como los productos del comandero, formularios, recetas, carga y errores.

Se utiliza useEffect para ejecutar efectos secundarios, como inicializar el carrusel de Bootstrap y realizar solicitudes a la API.

TP8 — Consumo de API

La página Recetas utiliza Axios para consultar la API pública de SampleAPIs.

Se implementan:

useEffect para ejecutar la solicitud.

useState para almacenar los datos, la carga y los errores.

map() para mostrar las recetas.

SweetAlert2 para informar errores.

Una variable de entorno para configurar la URL de la API.

Instalación

Clonar el repositorio:

git clone https://github.com/chrisrios-334/cafe-tacuba-frontend.git

Ingresar a la carpeta:

cd cafe-tacuba-frontend

Instalar las dependencias:

npm install

Crear un archivo .env en la raíz del proyecto con el siguiente contenido:

VITE_API_URL=https://api.sampleapis.com/coffee/hot

Iniciar el servidor de desarrollo:

npm run dev

Compilación

Para generar la versión de producción:

npm run build

Observaciones

El registro y el inicio de sesión utilizan localStorage con fines educativos. No representan un sistema de autenticación seguro para producción.

El proyecto está preparado para continuar incorporando funcionalidades y una futura integración con un backend.

Repositorio

https://github.com/chrisrios-334/cafe-tacuba-frontend