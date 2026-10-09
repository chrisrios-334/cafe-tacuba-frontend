function RegisterForm({ registrarUsuario, volverAlLogin, nombre, setNombre, apellido, setApellido, nuevoUsuario, setNuevoUsuario, nuevaContrasena, setNuevaContrasena, mensaje, tipoMensaje }) {
  return (
    <form onSubmit={registrarUsuario}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label fw-semibold">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          className="form-control"
          placeholder="Ingresá tu nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="apellido" className="form-label fw-semibold">
          Apellido
        </label>
        <input
          type="text"
          id="apellido"
          className="form-control"
          placeholder="Ingresá tu apellido"
          value={apellido}
          onChange={(event) => setApellido(event.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nuevoUsuario" className="form-label fw-semibold">
          Usuario
        </label>
        <input
          type="text"
          id="nuevoUsuario"
          className="form-control"
          placeholder="Elegí un usuario"
          value={nuevoUsuario}
          onChange={(event) => setNuevoUsuario(event.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="nuevaContrasena" className="form-label fw-semibold">
          Contraseña
        </label>
        <input
          type="password"
          id="nuevaContrasena"
          className="form-control"
          placeholder="Elegí una contraseña"
          value={nuevaContrasena}
          onChange={(event) => setNuevaContrasena(event.target.value)}
          required
        />
      </div>
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-dark btn-lg">
          Registrarse
        </button>
        <button
          type="button"
          className="btn btn-outline-dark btn-lg"
          onClick={volverAlLogin}
        >
          Volver al inicio de sesión
        </button>
      </div>
      <p className={`${tipoMensaje} text-center mt-3`}>
        {mensaje}
      </p>
    </form>
  )
}
export default RegisterForm