function LoginForm({ iniciarSesion, cambiarARegistro, usuario, setUsuario, contrasena, setContrasena, mensaje, tipoMensaje }) {
  return (
    <form onSubmit={iniciarSesion}>
      <div className="mb-3">
        <label htmlFor="usuario" className="form-label fw-semibold">
          Usuario
        </label>
        <input
          type="text"
          id="usuario"
          className="form-control form-control-lg"
          placeholder="Ingresá tu usuario"
          value={usuario}
          onChange={(event) => setUsuario(event.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contrasena" className="form-label fw-semibold">
          Contraseña
        </label>
        <input
          type="password"
          id="contrasena"
          className="form-control form-control-lg"
          placeholder="Ingresá tu contraseña"
          value={contrasena}
          onChange={(event) => setContrasena(event.target.value)}
          required
        />
      </div>
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-dark btn-lg">
          Iniciar sesión
        </button>
        <button
          type="button"
          className="btn btn-outline-dark btn-lg"
          onClick={cambiarARegistro}
        >
          Registrarse
        </button>
      </div>
      <p className={`${tipoMensaje} text-center mt-3`}>
        {mensaje}
      </p>
    </form>
  )
}
export default LoginForm