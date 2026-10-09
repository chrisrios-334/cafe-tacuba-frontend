import { Link } from 'react-router-dom'
import ProductCard from './productCards'

function ProductSection({ productos }) {

  return (
    <section
      id="cafes"
      className="text-white py-5 my-4"
      style={{ backgroundImage: "url('/img/bg-menu.jpg')" }}
    >

      <div className="container">

        <h2 className="text-center mb-4">
          Nuestro menú
        </h2>

        <p className="text-center">
          Elegí tu café favorito
        </p>

        <div className="row g-4">

          {productos.map((cafe) => (

            <div
              className="col-6 col-md-4"
              key={cafe.id}
            >

              <ProductCard
                nombre={cafe.nombre}
                descripcion={cafe.descripcion}
                imagen={cafe.imagen}
              />

            </div>

          ))}

        </div>

      </div>

      <div className="text-center mt-4">

        <Link
          to="/cartilla"
          className="btn btn-dark d-block mx-auto w-75 py-2"
        >
          Ver cartilla
        </Link>

      </div>

    </section>
  )
}

export default ProductSection