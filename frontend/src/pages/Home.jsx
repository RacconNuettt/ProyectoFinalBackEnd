import Header from "../components/Header"
import HomePage from "../components/HomePage"
import Carrusel from "../components/Carrusel"
import InformationUs from "../components/AboutUsCarpet/InformationUs"
import Footer from "../components/Footer"
import CardHome from "../components/CardHome"


function Home() {
    return (
        <div>
            <Header />
            <HomePage />
            <Carrusel />
            <CardHome/>
            <InformationUs />
            <Footer />
        </div>
    )
}

export default Home