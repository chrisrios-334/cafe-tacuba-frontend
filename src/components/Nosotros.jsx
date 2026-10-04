import { useEffect } from 'react'
import Carousel from 'bootstrap/js/dist/carousel'

function Nosotros() {

  useEffect(() => {
    const carouselElement = document.getElementById('carouselFondo')

    if (carouselElement) {
      new Carousel(carouselElement, {
        interval: 4000,
        ride: 'carousel'
      })
    }
  }, [])

  return (
    <section id="nosotros" className="position-relative my-5">

      <div
        id="carouselFondo"
        className="carousel slide"
      >

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="/img/bg-nosotros1.jpg"
              className="d-block w-100"
              style={{ height: '400px', objectFit: 'cover' }}
              alt="Interior de Café Tacuba"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/img/bg-nosotros2.avif"
              className="d-block w-100"
              style={{ height: '400px', objectFit: 'cover' }}
              alt="Preparando café en Café Tacuba"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/img/bg-nosotros3.jpg"
              className="d-block w-100"
              style={{ height: '400px', objectFit: 'cover' }}
              alt="Ambiente de Café Tacuba"
            />
          </div>

        </div>

      </div>

      <div className="container position-absolute top-50 start-50 translate-middle text-white text-center">

        <h2 className="mb-4">
          Sobre nosotros
        </h2>

        <p>
          Café Tacuba nació como un espacio pensado para disfrutar de un buen
          café, productos artesanales y momentos compartidos.
        </p>

        <p>
          Seleccionamos cuidadosamente nuestros ingredientes para ofrecer
          una experiencia sencilla y agradable en cada visita.
        </p>

        <p>
          Creemos que una taza de café puede transformar cualquier momento del
          día.
        </p>

        <button className="btn btn-light">
          Más info
        </button>

      </div>

    </section>
  )
}

export default Nosotros