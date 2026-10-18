import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import ProductCard from "../components/productCards";

const API_URL = import.meta.env.VITE_API_URL;

function Recetas() {
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const traerCafes = async () => {
      try {
        const response = await axios.get(API_URL, {
          signal: controller.signal
        });
        if (!Array.isArray(response.data)) {
          throw new Error("Respuesta inválida de la API");
        }
        setCafes(response.data);
      } catch (err) {
        if (controller.signal.aborted) return;
        setError(err.message);
        Swal.fire("Error", "No se pudieron cargar las recetas", "error");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };
    traerCafes();
    return () => controller.abort();
  }, []);

  return (
    <>
      <NavBar />
      <main className="container py-5">
        <h2 className="text-center mb-4">Recetas</h2>
        {loading && (
          <p className="text-center">Cargando recetas...</p>
        )}
        {error && (
          <p className="text-center text-danger">
            No se pudieron cargar las recetas.
          </p>
        )}
        {!loading && !error && cafes.length === 0 && (
          <p className="text-center">
            No hay recetas disponibles.
          </p>
        )}
        {!loading && !error && cafes.length > 0 && (
          <div className="row g-4">
            {cafes.map((cafe) => (
              <div className="col-6 col-md-4" key={cafe.id}>
                <ProductCard
                  nombre={cafe.title}
                  descripcion={cafe.description}
                  imagen={cafe.image}
                  ingredientes={cafe.ingredients}
                />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
export default Recetas;