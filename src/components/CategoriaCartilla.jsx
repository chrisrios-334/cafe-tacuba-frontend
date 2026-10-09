import CartillaCard from "./CartillaCard";

function CategoriaCartilla({ categoria, verMas }) {
  return (
    <section className={`py-5 ${categoria.clase}`}>
      <div className="container">
        <h2 className="text-center fw-bold mb-4">
          {categoria.categoria}
        </h2>
        <div className="row g-4">
          {categoria.productos.map((producto, j) => (
            <div key={j} className="col-12 col-md-4 col-lg-3">
              <CartillaCard
                producto={producto}
                verMas={verMas}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriaCartilla