import React, { useState, useEffect } from 'react';
import { Container, Grid, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';
import { FaHome, FaFileAlt, FaBell, FaSignOutAlt } from 'react-icons/fa';
import { useDropzone } from 'react-dropzone';
import { getMenu } from '../services/GetMenu';
import { postMenu } from '../services/PostMenu';
import { deleteMenu } from '../services/DeleteMenu';
import { updateMenu } from '../services/UpdateMenu';
import { getOrders } from '../services/OrdernesMenu/GetOrder';
import { getUsers } from '../services/GetUser';

const AdminPage = () => {
    const [menu, setMenu] = useState('Bienvenida Reina Isabel, desde esta página podrás observar órdenes y agregar nuevos platos');
    const [foodItems, setFoodItems] = useState([]);
    const [orderItems, setOrderItems] = useState([]);
    const [userItems, setUserItems] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        description: '',
        image: ''
    });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        loadMenu();
        loadOrders(); // Load orders when component mounts
    }, []);

    const loadMenu = async () => {
        const items = await getMenu();
        setFoodItems(items);
    };

    const loadOrders = async () => {
        const orders = await getOrders();
        setOrderItems(orders);
        const usuarios = await getUsers();
        setUserItems(usuarios);
    };

    const optionMenu = (option) => {
        setMenu(option);
    };

    const content = () => {
        switch (menu) {
            case 'Inicio':
                window.location.href = '/Home';
                return null;
            case 'Documentos':
                return (
                    <div>
                        <Typography variant="h5" gutterBottom>
                            Agregar Comida
                        </Typography>
                        <form onSubmit={handleFoodSubmit}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Nombre"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Categoría"
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Precio"
                                name="price"
                                type="number"
                                value={formData.price}
                                onChange={handleInputChange}
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Descripción"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                multiline
                                rows={3}
                                variant="outlined"
                            />
                            <Dropzone setFormData={setFormData} formData={formData} />
                            <Button variant="contained" color="primary" type="submit" style={{ marginTop: '16px' }}>
                                {editingId ? 'Actualizar' : 'Agregar'}
                            </Button>
                        </form>
                        <TableContainer component={Paper} style={{ marginTop: '24px' }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nombre</TableCell>
                                        <TableCell>Categoría</TableCell>
                                        <TableCell>Precio</TableCell>
                                        <TableCell>Descripción</TableCell>
                                        <TableCell>Acciones</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {foodItems.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.category}</TableCell>
                                            <TableCell>{item.price}</TableCell>
                                            <TableCell>{item.description}</TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    color="warning"
                                                    onClick={() => handleEdit(item)}
                                                    style={{ marginRight: '8px' }}
                                                >
                                                    Editar
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    color="error"
                                                    onClick={() => handleDelete(item.id)}
                                                >
                                                    Eliminar
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                );
            case 'Órdenes':
                return (
                    <div>
                        <Typography variant="h5" gutterBottom>
                            Órdenes
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nombre de Usuario</TableCell>
                                        <TableCell>Comida</TableCell>
                                        <TableCell>Bebida</TableCell>
                                        <TableCell>Precio</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {orderItems.map((order, index) => {
                                        const userI = userItems.find((user) => user.id === order.userId);
                                        return (
                                            <TableRow key={index}>
                                                <TableCell>{userI ? order.name : 'N/A'}</TableCell>
                                                <TableCell>{order.item || 'N/A'}</TableCell>
                                                <TableCell>{order.drink || 'N/A'}</TableCell>
                                                <TableCell>{order.total || 'N/A'}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                );
            case 'Salir':
                window.location.href = '/Login';
                return null;
            default:
                return (
                    <Typography variant="h5" gutterBottom>
                        {menu}
                    </Typography>
                );
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFoodSubmit = async (e) => {
        e.preventDefault();
        if (editingId) {
            await updateMenu(editingId, formData);
            setEditingId(null);
        } else {
            await postMenu(formData.name, formData.price, formData.category, formData.description, formData.image);
        }
        setFormData({
            name: '',
            category: '',
            price: '',
            description: '',
            image: ''
        });
        loadMenu();
    };

    const handleDelete = async (id) => {
        await deleteMenu(id);
        loadMenu();
    };

    const handleEdit = (item) => {
        setFormData({
            name: item.name,
            category: item.category,
            price: item.price,
            description: item.description,
            image: item.image
        });
        setEditingId(item.id);
    };

    return (
        <Container maxWidth="xl" style={{ padding: '16px', backgroundColor: '#f5f5f5' }}>
            <Grid container spacing={2}>
                <Grid item xs={2} style={{ backgroundColor: '#2e7d32', color: 'white', height: '100vh', padding: '16px' }}>
                    <Button
                        fullWidth
                        startIcon={<FaHome />}
                        style={{ color: 'white', marginBottom: '8px' }}
                        onClick={() => optionMenu('Inicio')}
                    >
                        Inicio
                    </Button>
                    <Button
                        fullWidth
                        startIcon={<FaFileAlt />}
                        style={{ color: 'white', marginBottom: '8px' }}
                        onClick={() => optionMenu('Documentos')}
                    >
                        Documentos
                    </Button>
                    <Button
                        fullWidth
                        startIcon={<FaBell />}
                        style={{ color: 'white', marginBottom: '8px' }}
                        onClick={() => optionMenu('Órdenes')}
                    >
                        Órdenes
                    </Button>
                    <Button
                        fullWidth
                        startIcon={<FaSignOutAlt />}
                        style={{ color: 'white' }}
                        onClick={() => optionMenu('Salir')}
                    >
                        Salir
                    </Button>
                </Grid>
                <Grid item xs={10} style={{ padding: '16px' }}>
                    {content()}
                </Grid>
            </Grid>
        </Container>
    );
};

const Dropzone = ({ setFormData, formData }) => {
    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, image: URL.createObjectURL(file) });
            };
            reader.readAsDataURL(file);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} style={{ border: '2px dashed #007bff', padding: '20px', borderRadius: '5px', marginTop: '16px' }}>
            <input {...getInputProps()} />
            <Typography variant="body2" style={{ textAlign: 'center' }}>
                Arrastra y suelta una imagen aquí, o haz clic para seleccionar una imagen
            </Typography>
        </div>
    );
};

export default AdminPage;
