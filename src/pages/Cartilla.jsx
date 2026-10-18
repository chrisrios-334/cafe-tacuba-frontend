import { useState } from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import cartilla from "../data/cartilla.js";
import CategoriaCartilla from "../components/CategoriaCartilla";
import ProductoModal from "../components/ProductoModal";
import ComaderoModal from "../components/ComaderoModal";
import BotonComadero from "../components/BotonComadero";

function Cartilla() {

  const [comandero, setComandero] = useState([]);
  const [total, setTotal] = useState(0);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [showComanderoModal, setShowComanderoModal] = useState(false);

  const agregarProducto = (producto) => {
    const existe = comandero.find((p) => p.nombre === producto.nombre);
    if (existe) {
      // si ya está, aumento la cantidad a 1

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
  }

  return (
    <>
      <NavBar />

      <main>
        {cartilla.map((categoria, index) => (
          <CategoriaCartilla
            key={index}
            categoria={categoria}
            verMas={verMas}
          />
        ))}
      </main>
      <Footer />
      <BotonComadero
        cantidad={comandero.length}
        abrir={() => setShowComanderoModal(true)}
      />
      {productoSeleccionado && (
        <ProductoModal
          producto={productoSeleccionado}
          agregarProducto={agregarProducto}
          cerrar={() => setProductoSeleccionado(null)}
        />
      )}
      {showComanderoModal && (
        <ComaderoModal
          comandero={comandero}
          total={total}
          agregarProducto={agregarProducto}
          quitarProducto={quitarProducto}
          hacerPedido={hacerPedido}
          cerrar={() => setShowComanderoModal(false)}
        />
      )}
    </>
  );
}

export default Cartilla