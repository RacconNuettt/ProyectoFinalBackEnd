import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/MenuComponent.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const URL = import.meta.env.VITE_API_URL;

const MenuComponent = () => {
    const [desayunoDishes, setDesayunoDishes] = useState([]);

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const response = await axios.get(`${URL}/dish`)
                const menus = Array.isArray(response.data) ? response.data : [];
                const desayunoDishes = menus
                    .flatMap(menu => (menu.dishes ? menu.dishes : []))
                    .filter(dish => dish.category === 'desayuno');
                setDesayunoDishes(desayunoDishes);
            } catch (error) {               
                console.error('Error fetching dishes:', error);
            }
        };
        
        fetchDishes();
    }, []);
console.log(fetchDishes)
    return (
        <div className="menu-container letters-container">
            <h1 className="text-success">MENU</h1>

            <div className="menu-section">
                <h2 className="text-success">Desayunos</h2>
                <Carousel controls={true} indicators={false} interval={null}>
                    {desayunoDishes.map(dish => (
                        <Carousel.Item key={dish.id}>
                            <div className="d-flex justify-content-around">
                                <div className="card">
                                    <img src={dish.image} className="card-img-top" alt={dish.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{dish.name}</h5>
                                        <p className="card-text">{dish.description}</p>
                                        <p className="card-text">${dish.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            <div className="menu-section">
                <h2 className="text-success">Almuerzos</h2>
                <Carousel controls={true} indicators={false} interval={null}>
                    <Carousel.Item>
                        <div className="d-flex justify-content-around">
                            {/* Add lunch content here */}
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="menu-section">
                <h2 className="text-success">Cenas</h2>
                <Carousel controls={true} indicators={false} interval={null}>
                    <Carousel.Item>
                        <div className="d-flex justify-content-around">
                            {/* Add dinner content here */}
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="menu-section">
                <h2>
                    <Link to={'/Order'} style={{ textDecoration: 'none' }}>
                        También puedes personalizar tu pedido
                    </Link>
                </h2>
            </div>
        </div>
    );
};

export default MenuComponent;
