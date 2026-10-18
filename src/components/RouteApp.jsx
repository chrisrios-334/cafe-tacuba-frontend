import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cartilla from "../pages/Cartilla";
import Recetas from "../pages/Recetas";

const RouteApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cartilla" element={<Cartilla />} />
        <Route path="/Recetas" element={<Recetas />} />
      </Routes>
    </div>
  )
}

export default RouteApp
