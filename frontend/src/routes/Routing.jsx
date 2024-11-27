import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"
import Admin from "../pages/Admin"
import AboutUs from "../pages/AboutUs"
import Contacto from "../pages/Contacto"
import Menu from "../pages/Menu"
import Order from "../pages/Order"



const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Register />}></Route>
                <Route path='/Login' element={<Login />}></Route>
                <Route path='/Home' element={<Home />}></Route>
                <Route path='/AboutUs' element={<AboutUs />}></Route>
                <Route path='/Contacto' element={<Contacto />}></Route>
                <Route path='/Menu' element={<Menu />}></Route>
                <Route path='/Order' element={<Order/>}></Route>
                <Route path="/Admin" element={<Admin/>}></Route>
            </Routes>
        </Router>
    )
}


export default Routing;