function ProductCard({ nombre, descripcion, imagen, ingredientes }) {

  return (
    <article className="card h-100 shadow-sm overflow-hidden">
      <div className="ratio ratio-4x3">
        <img
          src={imagen}
          className="object-fit-cover"
          alt={nombre}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          {nombre}
        </h5>
        <p className="card-text">
          {descripcion}
        </p>
      </div>
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        {ingredientes && ingredientes.length > 0 && (
          <div className="mt-3">
            <h6>Ingredientes:</h6>
            {ingredientes.map((ing, i) => (
              <span key={i} className="badge bg-secondary me-2">
                {ing}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProductCard