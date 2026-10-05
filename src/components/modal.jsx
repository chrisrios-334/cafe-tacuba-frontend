function Modal({ titulo, children, cerrar }) {

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">
              {titulo}
            </h2>
            <button
              type="button"
              className="btn-close"
              onClick={cerrar}
              aria-label="Cerrar"
            ></button>
          </div>
          <div className="modal-body text-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal