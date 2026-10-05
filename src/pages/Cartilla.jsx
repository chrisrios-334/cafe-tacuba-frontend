import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

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

  
  const cartilla = [
  {
    categoria: "Cafés calientes",
    clase: "",
    productos: [
      {
        nombre: "Espresso",
        descripcion: "Café intenso y aromático",
        imagen: "img/americano.webp",
        precio: 1500,
        contiene: `
        "Café molido fresco",
        "Agua filtrada",
        "Taza pequeña",
        "Aroma intenso",
        "Cuerpo fuerte"`
      },
      {
        nombre: "Latte",
        descripcion: "Espresso con leche vaporizada",
        imagen: "img/latte.webp",
        precio: 2200,
        contiene: `
        "Espresso",
        "Leche vaporizada",
        "Espuma ligera",
        "Taza grande",
        "Opcional: arte latte"`
      },
      {
        nombre: "Cappuccino",
        descripcion: "Espresso, leche espumosa y cacao",
        imagen: "img/cappuccino.webp",
        precio: 2400 ,
        contiene: `
        "Espresso",
        "Leche vaporizada",
        "Espuma abundante",
        "Cacao en polvo",
        "Taza mediana"` 
      },
      {
        nombre: "Mocha",
        descripcion: "Espresso, chocolate y leche",
        imagen: "img/cafe_mocha.jpg",
        precio: 2700,
        contiene: `
        "Espresso",
        "Chocolate derretido",
        "Leche vaporizada",
        "Crema opcional",
        "Cacao espolvoreado"` 
      },
      {
        nombre: "Macchiato",
        descripcion: "Espresso con un toque de leche espumada",
        imagen: "img/macchiato.jpeg",
        precio: 2100,
        contiene: `
        "Espresso",
        "Espuma de leche",
        "Taza pequeña",
        "Sabor intenso",
        "Toque cremoso"`
      },
    ],
  },
  {
    categoria: "Bebidas frías",
    clase: "bg-light",
    productos: [
      {
        nombre: "Affogato",
        descripcion: "Helado bañado en espresso caliente",
        imagen: "img/affogato.jpg",
        precio: 2800,
        contiene: `
        "Helado de vainilla",
        "Espresso caliente",
        "Taza o copa de postre",
        "Textura cremosa",
        "Contraste frío-caliente"`
      },
      {
        nombre: "Iced Latte",
        descripcion: "Latte con hielo y leche fría",
        imagen: "img/icedLatte.jpeg",
        precio: 2500,
        contiene: `
        "Espresso",
        "Leche fría",
        "Cubos de hielo",
        "Vaso alto",
        "Sabor suave y refrescante"`
      },
      {
        nombre: "Cold Brew",
        descripcion: "Extracción en frío 12 horas",
        imagen: "img/cafe.JPG",
        precio: 2600,
        contiene: `
        "Café molido grueso",
        "Agua filtrada fría",
        "Proceso de 12 horas",
        "Vaso con hielo",
        "Sabor menos ácido"`
      },
      {
        nombre: "Frappé de cacao",
        descripcion: "Hielo, cacao y crema batida",
        imagen: "img/Frappé de cacao.jpeg",
        precio: 3000,
        contiene: `
        "Cubos de hielo",
        "Cacao en polvo",
        "Leche fría",
        "Crema batida",
        "Textura espesa y dulce"`
      },
    ],
  },
  {
    categoria: "Infusiones y té",
    clase: "",
    productos: [
      {
        nombre: "Té negro de la casa",
        descripcion: "Con opción de leche o limón",
        imagen: "img/teNegro.jpeg",
        precio: 1800,
        contiene: `
        "Hojas de té negro",
        "Agua caliente",
        "Opción de leche",
        "Rodaja de limón",
        "Taza mediana"`
      },
      {
        nombre: "Té verde",
        descripcion: "Suave y refrescante",
        imagen: "img/teverde.jpeg",
        precio: 1800,
        contiene: `
        "Hojas de té verde",
        "Agua caliente",
        "Taza pequeña",
        "Aroma herbal",
        "Sabor ligero"`

      },
      {
        nombre: "Infusión de jazmín",
        descripcion: "Floral y delicada",
        imagen: "img/tedejazmin.jpeg",
        precio: 2000,
        contiene: `
        "Flores de jazmín",
        "Agua caliente",
        "Taza de porcelana",
        "Aroma floral",
        "Sabor delicado"`
      },
      {
        nombre: "Submarino",
        descripcion: "Cacao a la taza con leche",
        imagen: "img/submarino.jpeg",
        precio: 2200,
        contiene:`
        "Tableta de chocolate",
        "Leche caliente",
        "Taza grande",
        "Sabor intenso",
        "Textura cremosa"`
      },
    ],
  },
  {
    categoria: "Dulces y postres",
    clase: "bg-light",
    productos: [
      {
        nombre: "Medialuna",
        descripcion: "Recién horneada",
        imagen: "img/medialuna.jpeg",
        precio: 900,
        contiene: `
        "Harina de trigo",
        "Manteca",
        "Azúcar",
        "Levadura",
        "Glaseado ligero"`
      },
      {
        nombre: "Brownie",
        descripcion: "Con nueces y chocolate fundido",
        imagen: "img/brownie.jpg",
        precio: 2300,
        contiene: `
        "Chocolate amargo",
        "Manteca",
        "Azúcar",
        "Huevos",
        "Nueces picadas"`
      },
      {
        nombre: "Lemon Pie",
        descripcion: "Tarta de limón con merengue",
        imagen: "img/Lemon Pie.jpeg",
        precio: 2500,
        contiene: `
        "Base de masa",
        "Crema de limón",
        "Azúcar",
        "Huevos",
        "Merengue italiano"`
      },
      {
        nombre: "Cheesecake",
        descripcion: "Con salsa de frutos rojos",
        imagen: "img/Cheesecake.jpeg",
        precio: 2800,
        contiene: `
        "Queso crema",
        "Base de galletas",
        "Azúcar",
        "Huevos",
        "Salsa de frutos rojos"`
      },
      {
        nombre: "Alfajor de maicena",
        descripcion: "Clásico, con dulce de leche",
        imagen: "img/Alfajor de maicena.jpeg",
        precio: 1200,
        contiene: `
        "Maicena",
        "Harina",
        "Manteca",
        "Dulce de leche",
        "Coco rallado"`
      },
    ],
  },
];


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