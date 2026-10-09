function ComanderoModal({ comandero, total, agregarProducto, quitarProducto, hacerPedido, cerrar }) {
  return (
    <div className="modal fade show d-block" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content ventana-modal">
          <div className="modal-header">
            <h2 className="modal-title">Mi comandero</h2>
            <button
              type="button"
              className="btn-close"
              onClick={cerrar}
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
                      >
                        -
                      </button>
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
  )
}
export default ComanderoModal