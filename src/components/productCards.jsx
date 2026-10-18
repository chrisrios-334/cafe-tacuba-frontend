function ProductCard({ nombre, descripcion, imagen }) {

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
    </article>
  )
}

export default ProductCard