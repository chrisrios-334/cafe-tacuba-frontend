import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ProductCard from "../components/productCards";

function Recetas() {
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Traemos la URL desde el .env
 const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const traerCafes = async () => {
      try {
        const response = await axios.get(API_URL);
        setCafes(response.data);
      } catch (err) {
        setError(err.message);
        Swal.fire("Error", "No se pudieron cargar los recomendados", "error");
      } finally {
        setLoading(false);
      }
    };

    traerCafes();
  }, [API_URL]);

  if (loading) return <p className="text-center mt-5">Cargando recetas...</p>;
  if (error) return <p className="text-center mt-5">Error: {error}</p>;

  return (
    <section
      className="container py-5"
      style={{ backgroundImage: "url('/img/bg-main.jpg')" }}
    >
      <h2 className="text-center mb-4">Recetas</h2>
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
    </section>
  );
}

export default Recetas;