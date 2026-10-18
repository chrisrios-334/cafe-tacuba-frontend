function CartillaCard({ producto, verMas }) {
  
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text text-secondary small">{producto.descripcion}</p>
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
  );
}

export default CartillaCard;
