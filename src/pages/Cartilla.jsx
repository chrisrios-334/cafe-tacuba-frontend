import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import cartilla from "../data/cartilla";

function Cartilla() {


const [showModal, setShowModal] = useState(false);
const [comandero, setComandero] = useState([]);
const [total, setTotal] = useState(0);
const [productoSeleccionado, setProductoSeleccionado] = useState(null);
const [showProductoModal, setShowProductoModal] = useState(false);
const [showComanderoModal, setShowComanderoModal] = useState(false);

const agregarProducto = (producto) => {
  const existe = comandero.find((p) => p.nombre === producto.nombre);
  if (existe) {
    // si ya está, aumento la cantidad
    setComandero(
      comandero.map((p) =>
        p.nombre === producto.nombre
          ? { ...p, cantidad: p.cantidad + 1 }
          : p
      )
    );
  } else {
    // si no está, lo agrego con cantidad 1
    setComandero([...comandero, { ...producto, cantidad: 1 }]);
  }
  setTotal(total + producto.precio);
};

const quitarProducto = (producto) => {
  const existe = comandero.find((p) => p.nombre === producto.nombre);
  if (!existe) return;

  if (existe.cantidad === 1) {
    // si queda en 1, lo saco del array
    setComandero(comandero.filter((p) => p.nombre !== producto.nombre));
  } else {
    // si hay más de 1, bajo la cantidad
    setComandero(
      comandero.map((p) =>
        p.nombre === producto.nombre
          ? { ...p, cantidad: p.cantidad - 1 }
          : p
      )
    );
  }
  setTotal(total - producto.precio);
};

const hacerPedido = () => {
  setComandero([]); 
  setTotal(0); 
  setShowComanderoModal(false); 
};

const verMas = (producto) => {
  setProductoSeleccionado(producto);
  setShowProductoModal(true);
};

  



  return (
    <>
      <NavBar />

      <main>
        {cartilla.map((categoria, index) => (
          <section key={index} className={`py-5 ${categoria.clase}`}>
            <div className="container">
              <h2 className="text-center fw-bold mb-4">
                {categoria.categoria}
              </h2>
              <div className="row g-4">
                {categoria.productos.map((producto, j) => (
                  <div key={j} className="col-12 col-md-4 col-lg-3">
                    <div className="card h-100 shadow-sm border-0">
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text text-secondary small">
                          {producto.descripcion}
                        </p>
                      </div>
                      <div className="card-footer bg-transparent border-0">
                        <span className="fw-bold d-block mb-2">
                          ${producto.precio.toLocaleString("es-AR")}
                        </span>
                        <div className="text-end">
                          <button
                            className="btn btn-sm btn-dark"
                            onClick={() => verMas(producto)}
                          >
                            Ver más
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />

      {/* Botón flotante */}
      <div>
        <button
          className="btn btn-dark rounded-pill shadow-lg position-fixed bottom-0 end-0 m-3 fs-5 px-4 py-3"
          onClick={() => setShowComanderoModal(true)}
        >
          Ver comandero
          <span className="badge rounded-pill text-bg-light ms-1">
            {comandero.length}
          </span>
        </button>
      </div>

      {/* Modal */}
      {showModal && productoSeleccionado && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content ventana-modal">
              <div className="modal-header">
                <h2 className="modal-title">{productoSeleccionado.nombre}</h2>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={productoSeleccionado.imagen}
                  alt={productoSeleccionado.nombre}
                  className="img-fluid rounded mb-3"
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
                <h6 className="mb-2">Contiene:</h6>
                <ul className="list-group list-group-flush">
                  {productoSeleccionado.contiene.split(",").map((item, idx) => (
                    <li key={idx} className="list-group-item">
                      {item.replace(/"/g, "").trim()}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <span className="fw-bold">
                  Precio: ${productoSeleccionado.precio.toLocaleString("es-AR")}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Modal de producto */}
      {showProductoModal && productoSeleccionado && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content ventana-modal">
              <div className="modal-header">
                <h2 className="modal-title">{productoSeleccionado.nombre}</h2>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowProductoModal(false)}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={productoSeleccionado.imagen}
                  alt={productoSeleccionado.nombre}
                  className="img-fluid rounded mb-3"
                />
                <h6>Contiene:</h6>
                <ul>
                  {productoSeleccionado.contiene.split(",").map((item, idx) => (
                    <li key={idx}>{item.replace(/"/g, "").trim()}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <span className="fw-bold">
                  Precio: ${productoSeleccionado.precio.toLocaleString("es-AR")}
                </span>
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    agregarProducto(productoSeleccionado);
                    setShowProductoModal(false);
                  }}
                >
                  Agregar al comandero
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Modal del comandero */}
      {showComanderoModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content ventana-modal">
              <div className="modal-header">
                <h2 className="modal-title">Mi comandero</h2>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowComanderoModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                {comandero.length === 0 ? (
                  <p>Tu comandero está vacío.</p>
                ) : (
                  <ul className="list-group">
                    {comandero.map((p, idx) => (
                      <li
                        key={idx}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        <span>
                          {p.nombre} (x{p.cantidad})
                        </span>
                        <div>
                          <button
                            className="btn btn-sm btn-outline-dark me-2"
                            onClick={() => quitarProducto(p)}
                          > - </button>
                          <button
                            className="btn btn-sm btn-dark"
                            onClick={() => agregarProducto(p)}
                          >
                            +
                          </button>
                          <span className="ms-3">
                            ${(p.precio * p.cantidad).toLocaleString("es-AR")}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
        <div className="modal-footer d-flex justify-content-between">
          <span className="fw-bold fs-5">
            Total: ${total.toLocaleString("es-AR")}
          </span>
          <button
            type="button"
            className="btn btn-dark rounded-pill px-4"
            onClick={hacerPedido}
          >
            Hacer pedido
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
}


export default Cartilla