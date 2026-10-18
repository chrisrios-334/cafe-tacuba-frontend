import { useEffect } from "react";
import Carousel from "bootstrap/js/dist/carousel";
import Modal from "bootstrap/js/dist/modal";

function Nosotros() {
  useEffect(() => {
    const carouselElement = document.getElementById("carouselFondo");
    if (!carouselElement) return;
    const carousel = Carousel.getOrCreateInstance(carouselElement, {
      interval: 2000,
      ride: "carousel"
    });
    return () => carousel.dispose();
  }, []);

  const mostrarInfo = () => {
    const modalElement = document.getElementById("modalNosotros");
    const modal = Modal.getOrCreateInstance(modalElement);
    modal.show();
  };

  return (
    <section id="nosotros" className="position-relative my-5">
      <div id="carouselFondo" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/img/bg-nosotros1.jpg"
              className="d-block w-100"
              style={{ height: "400px", objectFit: "cover" }}
              alt="Interior de Café Tacuba"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/bg-nosotros2.avif"
              className="d-block w-100"
              style={{ height: "400px", objectFit: "cover" }}
              alt="Preparando café en Café Tacuba"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/bg-nosotros3.jpg"
              className="d-block w-100"
              style={{ height: "400px", objectFit: "cover" }}
              alt="Ambiente de Café Tacuba"
            />
          </div>
        </div>
      </div>
      <div className="container position-absolute top-50 start-50 translate-middle text-white text-center">
        <h2 className="mb-4">Sobre nosotros</h2>
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
        <button className="btn btn-light" onClick={mostrarInfo}>
          Más info
        </button>
      </div>
      <div
        className="modal fade"
        id="modalNosotros"
        tabIndex="-1"
        aria-labelledby="tituloModalNosotros"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="tituloModalNosotros">
                Sobre Café Tacuba
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                En Café Tacuba buscamos ofrecer un espacio cálido donde
                nuestros clientes puedan disfrutar de un buen café.
              </p>
              <p>
                Nos apasionan los productos artesanales, la calidad de
                nuestros ingredientes y los momentos compartidos.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Nosotros;