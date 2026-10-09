import { useState } from 'react'
import Modal from './modal'

function Footer() {

  const [mostrarUbicacion, setMostrarUbicacion] = useState(false)

  function volverArriba() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <>
      <footer id="contacto" className="bg-dark text-light py-4">
        <div className="container text-start">
          <h2 className="fw-bold">
            Café Tacuba
          </h2>
          <p>
            Café artesanal y buenos momentos.
          </p>
          <div className="d-flex flex-column flex-sm-row flex-sm-wrap align-items-start align-items-sm-center gap-2 mb-2">
            <h5 className="mb-0">
              Encontranos:
            </h5>
            <p className="mb-0">
              Av. Siempre Viva 123 - San Miguel de Tucumán
            </p>
          </div>
          <div className="d-flex flex-column flex-sm-row flex-sm-wrap align-items-start align-items-sm-center gap-2 gap-sm-3 mb-4">
            <h5 className="mb-0">
              Contacto:
            </h5>
            <p className="mb-0">
              cafetacuba26@gmail.com | 3816609713
            </p>
            <button
              className="btn btn-outline-light"
              onClick={() => setMostrarUbicacion(true)}
            >
              <i className="fa-solid fa-location-dot"></i>
              {' '}Ubicación
            </button>
          </div>
          <p className="small">
            © 2026 Café Tacuba - Todos los derechos reservados
          </p>
          <button
            className="btn btn-secondary"
            onClick={volverArriba}
          >
            Ir arriba
          </button>
        </div>
      </footer>
      {mostrarUbicacion && (
        <Modal
          titulo="Nuestra ubicación"
          cerrar={() => setMostrarUbicacion(false)}
        >
          <iframe
            title="Ubicación de Café Tacuba"
            width="100%"
            height="300"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.7356183428565!2d-65.2267221!3d-26.784696200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225da2e380fe9d%3A0xc722accfa749c7f1!2sSiempreviva%2C%20T4103%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1789476154877!5m2!1ses-419!2sar"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Modal>
      )}
    </>
  )
}

export default Footer