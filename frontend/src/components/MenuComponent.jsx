import React from 'react';
import { Carousel, Button, Modal, Form } from 'react-bootstrap';
import '../styles/MenuComponent.css';
import { Link } from 'react-router-dom';

const MenuComponent = () => {
    return (
        <div className="menu-container letters-container">
            <h1 className="text-success">MENU</h1>

            <div className="menu-section">
                <h2 className="text-success">Desayunos</h2>
                <Carousel controls={true} indicators={false} interval={null}>
                    <Carousel.Item>
                        <div className="d-flex justify-content-around">
                            {/* Aquí puedes añadir contenido de los desayunos */}
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="menu-section">
                <h2 className="text-success">Almuerzos</h2>
                <Carousel controls={true} indicators={false} interval={null}>
                    <Carousel.Item>
                        <div className="d-flex justify-content-around">
                            {/* Aquí puedes añadir contenido de los almuerzos */}
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="menu-section">
                <h2 className="text-success">Cenas</h2>
                <Carousel controls={true} indicators={false} interval={null}>
                    <Carousel.Item>
                        <div className="d-flex justify-content-around">
                            {/* Aquí puedes añadir contenido de las cenas */}
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

            {/* Modal */}
            <Modal show={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Ordenar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ flex: 1, marginRight: '10px' }}>
                            <h4>Comida</h4>
                            <p>Nombre de la comida</p>
                        </div>
                        <div style={{ flex: 1, marginRight: '10px' }}>
                            <h4>Bebidas</h4>
                            <Form.Control as="select">
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
                            <p>0 colones</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">Cerrar</Button>
                    <Button variant="primary">Realizar pedido</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MenuComponent;
