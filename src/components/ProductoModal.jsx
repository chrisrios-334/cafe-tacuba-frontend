function ProductoModal({ producto, agregarProducto, cerrar }) {
  return (
    <div className="modal fade show d-block" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-sm">
        <div className="modal-content ventana-modal">
          <div className="modal-header">
            <h2 className="modal-title">{producto.nombre}</h2>
            <button
              type="button"
              className="btn-close"
              onClick={cerrar}
            ></button>
          </div>
          <div className="modal-body text-center">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="img-fluid rounded mb-3"
            />
            <h6>Contiene:</h6>
            <ul>
              {producto.contiene.split(",").map((item, idx) => (
                <li key={idx}>{item.replace(/"/g, "").trim()}</li>
              ))}
            </ul>
          </div>
          <div className="modal-footer">
            <span className="fw-bold">
              Precio: ${producto.precio.toLocaleString("es-AR")}
            </span>
            <button
              className="btn btn-dark"
              onClick={() => {
                agregarProducto(producto);
                cerrar();
              }}
            >
              Agregar al comandero
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductoModal