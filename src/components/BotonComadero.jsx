function BotonComadero({ cantidad, abrir }) {
  
  return (
    <div>
      <button
        className="btn btn-dark rounded-pill shadow-lg position-fixed bottom-0 end-0 m-3 fs-5 px-4 py-3"
        onClick={abrir}
      >
        Ver comandero
        <span className="badge rounded-pill text-bg-light ms-1">
          {cantidad}
        </span>
      </button>
    </div>
  )
}

export default BotonComadero