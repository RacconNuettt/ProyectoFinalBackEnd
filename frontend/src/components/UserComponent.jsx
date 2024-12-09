import React, { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";// Asegúrate de importar correctamente esta función
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { Container, Grid, Button, Typography, Card, CssBaseline, GlobalStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material';
import { FaHome, FaClipboardList, FaUserAlt, FaSignOutAlt } from 'react-icons/fa';
import { updateClient } from '../services/client';

const UserPage = () => {
    const [menu, setMenu] = useState('Información de Usuario');
    const [showModal, setShowModal] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
    });

    useEffect(() => {
        const codedToken = sessionStorage.getItem("token");

        if (!codedToken) {
            console.error("No se encontró token en la sessionStorage");
            return;
        }

        try {
            const decodedToken = jwtDecode(codedToken);
            const clientName = decodedToken.name || "Usuario";
            const clientEmail = decodedToken.email || "No disponible";

            setUserInfo({ name: clientName, email: clientEmail });

            toast.success(`Bienvenido, ${clientName}!`);
        } catch (error) {
            console.error("Error al desencriptar token:", error);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const [newUserName,setUserName] = useState('');
    const [newEmail,setEmail] = useState('');
    const [newPassword,setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newdata = {newUserName, newEmail,newPassword};
        
        try {
            const response = await updateClient(newData);
        
        } catch (error) {
            console.error("Error al actualizar datos, error:", error);
            toast.error("Error al conectar con el servidor");
        }
    };
    const renderUserInfo = () => (
        <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
            <Typography variant="h5" gutterBottom>
                Información de Usuario
            </Typography>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
                <strong>Datos Actuales</strong>
            </Typography>
            <Typography>
                <strong>Nombre:</strong> {userInfo.name}
            </Typography>
            <Typography>
                <strong>Correo Electrónico:</strong> {userInfo.email}
            </Typography>
            <Button
                variant="outlined"
                onClick={() => setShowModal(true)}
                sx={{
                    marginTop: 2,
                    backgroundColor: "#008000",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#007000" },
                }}
            >
                Actualizar Datos
            </Button>
        </Card>
    );

    const dataUpdateModal = () => (
        <Dialog open={showModal} onClose={() => setShowModal(false)} maxWidth="sm" fullWidth>
            <DialogTitle>Actualizar Datos</DialogTitle>
            <DialogContent>
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
                    sx={{
                        backgroundColor: '#008000',
                        color: '#fff',
                        "&:hover": { backgroundColor: "#007000" },
                    }}
                >
                    Guardar Cambios
                </Button>
                <Button onClick={() => setShowModal(false)} sx={{ color: "#008000" }}>
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>
    );

    const content = () => {
        switch (menu) {
            case 'Historial de Órdenes':
                return <div>Historial de Órdenes</div>;
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
            <GlobalStyles styles={{ body: { fontFamily: "'Patrick Hand', cursive" } }} />
            <Container maxWidth="xl" sx={{ backgroundColor: '#fafafa', minHeight: '100vh', padding: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3} md={2} sx={{ backgroundColor: '#008000', color: 'white', padding: 2 }}>
                        <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2 }}>
                            Panel de Usuario
                        </Typography>
                        <Button
                            fullWidth
                            startIcon={<FaHome />}
                            sx={{ color: 'white', mb: 2 }}
                            onClick={() => (window.location.href = '/Home')}
                        >
                            Inicio
                        </Button>
                        <Button
                            fullWidth
                            startIcon={<FaUserAlt />}
                            sx={{ color: 'white', mb: 2 }}
                            onClick={() => setMenu('Información de Usuario')}
                        >
                            Información de Usuario
                        </Button>
                        <Button
                            fullWidth
                            startIcon={<FaClipboardList />}
                            sx={{ color: 'white', mb: 2 }}
                            onClick={() => setMenu('Historial de Órdenes')}
                        >
                            Historial de Órdenes
                        </Button>
                        <Button
                            fullWidth
                            startIcon={<FaSignOutAlt />}
                            sx={{ color: 'white' }}
                            onClick={() => setMenu('Salir')}
                        >
                            Salir
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={9} md={10}>
                        {content()}
                        {dataUpdateModal()}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default UserPage;