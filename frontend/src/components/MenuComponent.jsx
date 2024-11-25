import React, { useEffect, useState } from 'react';
import { Carousel, Button, Card, Modal, Form } from 'react-bootstrap';
import '../styles/MenuComponent.css';
import { getMenu } from '../services/GetMenu'; 
import postOrder from '../services/OrdernesMenu/PostOrder'; 
import {getUsers} from '../services/GetUser'
import { Link } from 'react-router-dom';

const MenuComponent = () => {
    const [menuData, setMenuData] = useState({
        desayuno: [],
        almuerzo: [],
        cena: [],
    });

    const [showModal, setShowModal] = useState(false);
    const [usuarioItem, setUsuarioItem] = useState(getUsers.name)
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedDrink, setSelectedDrink] = useState('');
    const [total, setTotal] = useState(0);

    useEffect(() => {
        loadMenu();
    }, []);

    const loadMenu = async () => {
        const items = await getMenu(); 
        const categorizedMenu = {
            desayuno: [],
            almuerzo: [],
            cena: [],
        };

        items.forEach(item => {
            if (item.category === 'Desayunos') {
                categorizedMenu.desayuno.push(item);
            } else if (item.category === 'Almuerzos') {
                categorizedMenu.almuerzo.push(item);
            } else if (item.category === 'Cenas') {
                categorizedMenu.cena.push(item);
            }
        });

        setMenuData(categorizedMenu);
    };

    const handleOrderClick = (item) => {
        setSelectedItem(item);
        setTotal(parseInt(item.price)); 
        setShowModal(true);
    };

    const handleDrinkChange = (e) => {
        const drink = e.target.value;
        setSelectedDrink(drink);

        let drinkPrice = 0;
        if (drink.startsWith("Natural")) drinkPrice = 500;
        else if (drink.startsWith("Gaseosa")) {
            drinkPrice = drink === "Fanta" ? 1000 : 2200;
        } else if (drink.startsWith("Café")) {
            drinkPrice = drink === "Con leche" ? 800 : 700;
        }

        setTotal(parseInt(selectedItem.price) + drinkPrice);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedItem(null);
        setSelectedDrink('');
        setTotal(0);
    };

    const handleOrderSubmit = async () => {
        const order = {
            nombre: usuarioItem.name,
            item: selectedItem.name,
            drink: selectedDrink,
            total: total,
        };
        await postOrder(order);
        handleClose();
    };

    const renderMenuItems = (items) => {
        return items.map((item, index) => (
            <Card className="menu-item" key={index} style={{ width: '12rem', margin: '0 auto' }}>
                <Card.Img variant="top" src={item.image} alt={item.name} style={{ height: '150px', objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text><strong>{item.price}</strong></Card.Text>
                    <Button variant="success" onClick={() => handleOrderClick(item)}>Ordenar</Button>
                </Card.Body>
            </Card>
        ));
    };

    return (
        <div className="menu-container letters-container">
            <h1 className="text-success">MENU</h1>

            <div className="menu-section">
                <h2 className="text-success">Desayunos</h2>
                <Carousel controls={true} indicators={false} interval={null}>
                    <Carousel.Item>
                        <div className="d-flex justify-content-around">
                            {renderMenuItems(menuData.desayuno)}
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="menu-section">
                <h2 className="text-success">Almuerzos</h2>
                <Carousel controls={true} indicators={false} interval={null}>
                    <Carousel.Item>
                        <div className="d-flex justify-content-around">
                            {renderMenuItems(menuData.almuerzo)}
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="menu-section">
                <h2 className="text-success">Cenas</h2>
                <Carousel controls={true} indicators={false} interval={null}>
                    <Carousel.Item>
                        <div className="d-flex justify-content-around">
                            {renderMenuItems(menuData.cena)}
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className='menu-section'>
                <h2><Link to={'/Order'} style={{textDecoration:"none"}}>También puedes personalizar tu pedido</Link></h2>
            </div>

            {/* Modal */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ordenar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ flex: 1, marginRight: '10px' }}>
                            <h4>Comida</h4>
                            <p>{selectedItem ? selectedItem.name : ''}</p>
                        </div>
                        <div style={{ flex: 1, marginRight: '10px' }}>
                            <h4>Bebidas</h4>
                            <Form.Control as="select" onChange={handleDrinkChange}>
                                <option value="">Seleccione una bebida</option>
                                <option value="Natural: Cas">Cas</option>
                                <option value="Natural: Limón">Limón</option>
                                <option value="Natural: Piña">Piña</option>
                                <option value="Gaseosa: Fanta">Fanta</option>
                                <option value="Gaseosa: Coca-Cola">Coca-Cola</option>
                                <option value="Café: Con leche">Café con leche</option>
                                <option value="Café: Negro">Café negro</option>
                            </Form.Control>
                        </div>
                        <div style={{ flex: 1, textAlign: 'right' }}>
                            <h4>Total</h4>
                            <p>{total} colones</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                    <Button variant="primary" onClick={handleOrderSubmit}>Realizar pedido</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MenuComponent;
