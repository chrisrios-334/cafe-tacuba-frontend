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
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [showComanderoModal, setShowComanderoModal] = useState(false);

  const total = comandero.reduce(
    (acumulado, producto) =>
      acumulado + producto.precio * producto.cantidad,
    0
  );

  const cantidadTotal = comandero.reduce(
    (acumulado, producto) => acumulado + producto.cantidad,
    0
  );

  const agregarProducto = (producto) => {
    setComandero((anterior) => {
      const existe = anterior.find((p) => p.nombre === producto.nombre);
      if (existe) {
        return anterior.map((p) =>
          p.nombre === producto.nombre
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      }
      return [...anterior, { ...producto, cantidad: 1 }];
    });
  };

  const quitarProducto = (producto) => {
    setComandero((anterior) => {
      const existe = anterior.find((p) => p.nombre === producto.nombre);
      if (!existe) return anterior;

      if (existe.cantidad === 1) {
        return anterior.filter((p) => p.nombre !== producto.nombre);
      }

      return anterior.map((p) =>
        p.nombre === producto.nombre
          ? { ...p, cantidad: p.cantidad - 1 }
          : p
      );
    });
  };

  const hacerPedido = () => {
    setComandero([]);
    setShowComanderoModal(false);
  };

  const verMas = (producto) => {
    setProductoSeleccionado(producto);
  };

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
        cantidad={cantidadTotal}
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

export default Cartilla;