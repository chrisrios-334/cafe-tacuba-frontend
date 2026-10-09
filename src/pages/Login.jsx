import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Navbar from '../components/navBar'
import Footer from '../components/footer'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import usuariosIniciales from '../data/usuarios'

function Login() {
  const navigate = useNavigate()
  const [modoRegistro, setModoRegistro] = useState(false)
  const [usuario, setUsuario] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [nuevoUsuario, setNuevoUsuario] = useState('')
  const [nuevaContrasena, setNuevaContrasena] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [tipoMensaje, setTipoMensaje] = useState('')
  const [usuarios, setUsuarios] = useState(() => {
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios'))
    if (usuariosGuardados) {
      return usuariosGuardados
    }
    localStorage.setItem('usuarios', JSON.stringify(usuariosIniciales))
    return usuariosIniciales
  })
  function iniciarSesion(event) {
    event.preventDefault()
    const usuarioEncontrado = usuarios.find((usuarioRegistrado) => {
      return (
        usuarioRegistrado.usuario === usuario &&
        usuarioRegistrado.contrasena === contrasena
      )
    })
    if (usuarioEncontrado) {
      localStorage.setItem('usuarioActivo', JSON.stringify(usuarioEncontrado))
      navigate('/')
    } else {
      setMensaje('Usuario o contraseña incorrectos.')
      setTipoMensaje('text-danger')
    }
  }
  function registrarUsuario(event) {
    event.preventDefault()
    const usuarioExistente = usuarios.some((usuarioRegistrado) => {
      return usuarioRegistrado.usuario === nuevoUsuario
    })
    if (usuarioExistente) {
      setMensaje('Ese usuario ya existe.')
      setTipoMensaje('text-danger')
      return
    }
    const usuarioNuevo = {
      nombre,
      apellido,
      usuario: nuevoUsuario,
      contrasena: nuevaContrasena
    }
    const usuariosActualizados = [...usuarios, usuarioNuevo]
    setUsuarios(usuariosActualizados)
    localStorage.setItem('usuarios', JSON.stringify(usuariosActualizados))
    setMensaje('Registro exitoso. Volviendo al inicio de sesión...')
    setTipoMensaje('text-success')
    setTimeout(() => {
      setModoRegistro(false)
      setMensaje('')
    }, 1500)
  }
  function cambiarARegistro() {
    setModoRegistro(true)
    setMensaje('')
  }
  function volverAlLogin() {
    setModoRegistro(false)
    setMensaje('')
  }
  return (
    <>
      <Navbar mostrarIngresar={false} />
      <main
        className="min-vh-100 d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: "url('/img/login2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="card shadow-lg border-0" style={{ width: '100%', maxWidth: '420px' }}>
          <div className="card-body p-4 p-md-5">
            <div className="text-center mb-4">
              <h1 className="h3 fw-bold mb-2">Café Tacuba</h1>
              <p className="text-secondary mb-0">
                {modoRegistro ? 'Crear cuenta' : 'Iniciar sesión'}
              </p>
            </div>
            {!modoRegistro ? (
              <LoginForm
                iniciarSesion={iniciarSesion}
                cambiarARegistro={cambiarARegistro}
                usuario={usuario}
                setUsuario={setUsuario}
                contrasena={contrasena}
                setContrasena={setContrasena}
                mensaje={mensaje}
                tipoMensaje={tipoMensaje}
              />
            ) : (
              <RegisterForm
                registrarUsuario={registrarUsuario}
                volverAlLogin={volverAlLogin}
                nombre={nombre}
                setNombre={setNombre}
                apellido={apellido}
                setApellido={setApellido}
                nuevoUsuario={nuevoUsuario}
                setNuevoUsuario={setNuevoUsuario}
                nuevaContrasena={nuevaContrasena}
                setNuevaContrasena={setNuevaContrasena}
                mensaje={mensaje}
                tipoMensaje={tipoMensaje}
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
export default Login