import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import AboutUs from "../pages/AboutUs";
import Contacto from "../pages/Contacto";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import User from "../pages/User";
import Almacen from "../components/Almacen";
import Ordenes from "../components/Ordenes";
import Clientes from "../components/Clientes";
import Opciones from "../components/Opciones";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Admin" element={<Admin />}>
          <Route path="almacen" element={<Almacen />} />
          <Route path="ordenes" element={<Ordenes />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="opciones" element={<Opciones />} />
        </Route>
        <Route path="/User" element={<User />} />
      </Routes>
    </Router>
  );
};

export default Routing;
