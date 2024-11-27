import React, { useState } from 'react';
import { Container,TextField, Grid, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { FaHome, FaFileAlt, FaBell, FaSignOutAlt } from 'react-icons/fa';

const AdminPage = () => {
    const [menu, setMenu] = useState('Bienvenida Reina Isabel, desde esta página podrás observar órdenes y agregar nuevos platos');

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
                        <form>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Nombre"
                                name="name"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Categoría"
                                name="category"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Precio"
                                name="price"
                                type="number"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Descripción"
                                name="description"
                                multiline
                                rows={3}
                                variant="outlined"
                            />
                            <Button variant="contained" color="primary" type="submit" style={{ marginTop: '16px' }}>
                                Agregar
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
                                    <TableRow>
                                        <TableCell>Ejemplo</TableCell>
                                        <TableCell>Principal</TableCell>
                                        <TableCell>$10</TableCell>
                                        <TableCell>Descripción de ejemplo</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="warning" style={{ marginRight: '8px' }}>
                                                Editar
                                            </Button>
                                            <Button variant="contained" color="error">
                                                Eliminar
                                            </Button>
                                        </TableCell>
                                    </TableRow>
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
                                    <TableRow>
                                        <TableCell>Juan Pérez</TableCell>
                                        <TableCell>Pizza</TableCell>
                                        <TableCell>Coca-Cola</TableCell>
                                        <TableCell>$12</TableCell>
                                    </TableRow>
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

export default AdminPage;
