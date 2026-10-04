function Footer() {
  return (
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
          <button className="btn btn-outline-light">
            <i className="fa-solid fa-location-dot"></i>
            {' '}Ubicación
          </button>
        </div>
        <p className="small">
          © 2026 Café Tacuba - Todos los derechos reservados
        </p>
        <button className="btn btn-secondary">
          Ir arriba
        </button>
      </div>
    </footer>
  )
}

export default Footer