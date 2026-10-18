function Hero() {
  return (
    <section
      id="inicio"
      className="bg-light"
      style={{ backgroundImage: "url('/img/bg-main.jpg')" }}
    >
      <div className="container py-5">
        <div className="row align-items-center justify-content-center gx-3 gy-5 py-lg-5">

          <div className="col-lg-6 text-center text-lg-start">

            <h1 className="display-3 fw-bold lh-1 mb-4">
              Un buen café comienza con un buen momento
            </h1>
            <p className="lead fw-semibold text-secondary mb-3">
              Cafetería artesanal en San Miguel de Tucumán
            </p>
            <p className="fs-5 text-secondary mb-4">
              En Café Tacuba creemos que una taza de café puede transformar
              cualquier momento del día.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <a
                href="#cafes"
                className="btn btn-dark btn-lg px-4 shadow-sm"
              >
                Conocé nuestros cafés
              </a>
              <a
                href="#contacto"
                className="btn btn-outline-dark btn-lg px-4"
              >
                Contactanos
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <img
                src="/img/cafe.JPG"
                className="img-fluid rounded-4 shadow-lg"
                alt="Taza de café artesanal de Café Tacuba"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero