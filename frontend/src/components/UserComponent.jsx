import React, { useState } from 'react';
import {
    Container,
    Grid,
    Button,
    Typography,
    Card,
    CssBaseline,
    GlobalStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box,
} from '@mui/material';
import { FaHome, FaClipboardList, FaUserAlt, FaSignOutAlt } from 'react-icons/fa';

const UserPage = () => {
    const [menu, setMenu] = useState('Información de Usuario');
    const [showModal, setShowModal] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: 'Juan Pérez',
        email: 'juan.perez@example.com',
    });

    const optionMenu = (option) => {
        setMenu(option);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const renderOrderHistory = () => (
        <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
            <Typography variant="h5" gutterBottom>
                Historial de Órdenes
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                        <TableRow>
                            <TableCell># Orden</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Estado</TableCell>
                            <TableCell>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Aquí se agregarán las órdenes de usuario */}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );

    const renderUserInfo = () => (
        <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
            <Typography variant="h5" gutterBottom>
                Información de Usuario
            </Typography>

            {/* Información de usuario */}
                <Typography variant="h6"sx={{
                    display:'flex',
                    justifyContent:'center',
                    flexWrap:'wrap-reverse'
                }}><strong>Datos Actuales</strong></Typography>
                <Typography
                    sx={{
                        border: '#008000'
                    }}
                >
                    <strong>Nombre:</strong> {userInfo.name}
                </Typography>
                <Typography>
                    <strong>Correo Electrónico:</strong> {userInfo.email}
                </Typography>
                <br />
                <Button
                    variant="outlined"
                    onClick={() => setShowModal(true)}
                    sx={{
                        marginBottom: 2,
                        fontFamily: "'Patrick Hand', cursive",
                        backgroundColor: "#008000",
                        color: "#fff",
                        "&:hover": { backgroundColor: "#008000" },
                        backgroundColor: '#008000',
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'center'
                    }}
                >
                    Actualizar Datos
                </Button>
        </Card>
    );

    const dataUpdateModal = () => (
        <Dialog open={showModal} onClose={() => setShowModal(false)} maxWidth="sm" fullWidth>
            <DialogTitle>Actualizar Datos</DialogTitle>
            <DialogContent >
                <TextField
                    fullWidth
                    label="Nombre"
                    name="name"
                    value={userInfo.name}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    label="Correo Electrónico"
                    name="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    label="Nueva Contraseña"
                    type="password"
                    sx={{ mb: 2 }}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    onClick={() => setShowModal(false)}
                    sx={{ backgroundColor: '#008000',display:'flex',justifyContent:'center',}}
                >
                    Guardar Cambios
                </Button>
                <Button onClick={() => setShowModal(false)} color="#008000">
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>
    );

    const content = () => {
        switch (menu) {
            case 'Historial de Órdenes':
                return renderOrderHistory();
            case 'Información de Usuario':
                return renderUserInfo();
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
        <>
            <CssBaseline />
            <GlobalStyles
                styles={{
                    body: {
                        fontFamily: "'Patrick Hand', cursive",
                    },
                    '*': {
                        fontFamily: "'Patrick Hand', cursive",
                    },
                }}
            />
            <Container
                maxWidth="xl"
                sx={{
                    backgroundColor: '#fafafa',
                    minHeight: '100vh',
                    padding: 2,
                }}
            >
                <Grid container spacing={2}>
                    <Grid
                        item
                        xs={12} sm={3} md={2}
                        sx={{
                            background: '#008000',
                            color: 'white',
                            height: '100vh',
                            padding: 2,
                            borderRadius: 2,
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}
                        >
                            Panel de usuario
                        </Typography>
                        <Button
                            fullWidth
                            startIcon={<FaHome />}
                            sx={{
                                color: 'white',
                                mb: 2,
                                textTransform: 'none',
                                ':hover': {
                                    backgroundColor: '#008000',
                                },
                            }}
                            onClick={() => (window.location.href = '/Home')}
                        >
                            Inicio
                        </Button>
                        <Button
                            fullWidth
                            startIcon={<FaUserAlt />}
                            sx={{
                                color: 'white',
                                mb: 2,
                                textTransform: 'none',
                                ':hover': {
                                    backgroundColor: '#008000',
                                },
                            }}
                            onClick={() => optionMenu('Información de Usuario')}
                        >
                            Información de Usuario
                        </Button>
                        <Button
                            fullWidth
                            startIcon={<FaClipboardList />}
                            sx={{
                                color: 'white',
                                mb: 2,
                                textTransform: 'none',
                                ':hover': {
                                    backgroundColor: '#008000',
                                },
                            }}
                            onClick={() => optionMenu('Historial de Órdenes')}
                        >
                            Historial de Órdenes
                        </Button>
                        <Button
                            fullWidth
                            startIcon={<FaSignOutAlt />}
                            sx={{
                                color: 'white',
                                textTransform: 'none',
                                ':hover': {
                                    backgroundColor: '#008000',
                                },
                            }}
                            onClick={() => optionMenu('Salir')}
                        >
                            Salir
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={9} md={10} sx={{ padding: 2 }}>
                        {content()}
                        {dataUpdateModal()}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default UserPage;
