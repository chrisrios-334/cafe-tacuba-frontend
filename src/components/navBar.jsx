import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar({ mostrarIngresar = true }) {
  const navigate = useNavigate()
  const [usuarioActivo, setUsuarioActivo] = useState(() => {
    return JSON.parse(localStorage.getItem('usuarioActivo'))
  })
  function cerrarSesion() {
    localStorage.removeItem('usuarioActivo')
    setUsuarioActivo(null)
    navigate('/')
  }
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm sticky-top px-3 px-md-4">
      <div className="container-fluid px-0 py-2">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <i className="fa-solid fa-mug-hot"></i> Café Tacuba
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNavegacion"
          aria-controls="menuNavegacion"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menuNavegacion">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="/#inicio">
                <i className="fa-solid fa-house"></i> Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#nosotros">
                <i className="fa-solid fa-users"></i> Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#cafes">
                <i className="fa-solid fa-mug-hot"></i> Nuestros cafés
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contacto">
                <i className="fa-solid fa-envelope"></i> Contacto
              </a>
            </li>
            {mostrarIngresar && (
              <li className="nav-item dropdown">
                {usuarioActivo ? (
                  <>
                    <button
                      className="btn btn-light rounded-pill dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {usuarioActivo.nombre}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={cerrarSesion}
                        >
                          Cerrar sesión
                        </button>
                      </li>
                    </ul>
                  </>
                ) : (
                  <Link className="btn btn-light rounded-pill" to="/login">
                    Ingresar
                  </Link>
                )}
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar