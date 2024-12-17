import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from 'react-toastify';
import { Container, Grid, Button, Typography, Card, CssBaseline, GlobalStyles, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { updateClient } from '../services/client';
import { FaHome, FaClipboardList, FaUserAlt, FaSignOutAlt } from 'react-icons/fa';
import { getAllClients } from '../services/client';
import { getClientById } from '../services/client';
import axios from 'axios';

const UserPage = () => {
    const [menu, setMenu] = useState('Información de Usuario');
    const [showModal, setShowModal] = useState(false);
    const [clientInfo, setClientInfo] = useState({ name: '', email: '' });
    const [newClientName, setNewClientName] = useState('');
    const [newClientEmail, setNewClientEmail] = useState('');
    const [newClientPassword, setNewClientPassword] = useState('');
    const [placeholderName, setPlaceholderName] = useState('');
    const [placeholderEmail, setPlaceholderEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const codedToken = sessionStorage.getItem("token");
        const decodedToken = jwtDecode(codedToken);
        const clientId = decodedToken.id           
        const clientName = decodedToken.name
        const clientEmail = decodedToken.email

        if (!codedToken) {
            console.error("No se encontró token en la sessionStorage");
            return;
        }

        try {
                     
            const clientName = decodedToken.name
            const clientEmail = decodedToken.email

            setClientInfo({id: clientId, name: clientName, email: clientEmail });
            toast.success(`Bienvenido, ${clientName}!`);
        } catch (error) {
            console.error("Error al desencriptar token:", error);
        }
    }, []);

    // const fetchClientId = async () => {
    //     try {
    //         const codedToken = sessionStorage.getItem("token");
    
    //         if (!codedToken) {
    //             throw new Error("Token not found in sessionStorage");
    //         }
    
    //         const decodedToken = jwtDecode(codedToken);
    //         const clientId = decodedToken.id;
    
    //         const idForm = await getClientById(clientId);
    
    //         return idForm;
    //     } catch (error) {
    //         console.error('Error fetching the client id:', error);
    //         throw error;
    //     }
    // };

    const fetchClientId = async () => {
        try {
            const codedToken = sessionStorage.getItem("token");
    
            if (!codedToken) {
                throw new Error("Token not found in sessionStorage");
            }
    
            const decodedToken = jwtDecode(codedToken);
            const clientId = decodedToken.id;
    
            const clientData = await getClientById(clientId); // Automatically sends token
            return clientData;
        } catch (error) {
            console.error('Error fetching the client id:', error);
            throw error;
        }
    };
    

    const handleUpdate = async (e) => {
        e.preventDefault();
    
        const token = sessionStorage.getItem("token");
        if (!token) {
            toast.error("No se encontró el token.");
            return;
        }
    
        const decodedToken = jwtDecode(token);
        const idC = decodedToken.id;
    
        const newData = {
            clientname: newClientName,
            clientemail: newClientEmail,
            clientpassword: newClientPassword,
        };
    
        try {
            const response = await updateClient(newData);
        
        } catch (error) {
            console.error("Error al actualizar datos:", error);
            toast.error(error?.message || "Error al conectar con el servidor.");
        }
    };
    

    const renderClientInfo = () => (
        <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
            <Typography variant="h5" gutterBottom>
                Información de Usuario
            </Typography>
            <Typography>
                <strong>Nombre:</strong> {clientInfo.name}
            </Typography>
            <Typography>
                <strong>Correo Electrónico:</strong> {clientInfo.email}
            </Typography>
            <Button
    variant="outlined"
    onClick={async () => {
        try {
            const clientData = await fetchClientId();
            setShowModal(true); // Open modal
            setPlaceholderName(clientData.name); // Set name for placeholder
            setPlaceholderEmail(clientData.email); // Set email for placeholder
            
        } catch (error) {
            console.error("Error fetching client data:", error);
            toast.error("Error al obtener los datos del cliente");
        }
    }}
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
    <form onSubmit={handleUpdate}>
        <DialogContent>
            <TextField
                fullWidth
                label="Nombre"
                value={newClientName}
                onChange={(e) => setNewClientName(e.target.value)}
                placeholder={placeholderName} // Set placeholder
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="Correo Electrónico"
                value={newClientEmail}
                onChange={(e) => setNewClientEmail(e.target.value)}
                placeholder={placeholderEmail} // Set placeholder
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="Nueva Contraseña"
                type="password"
                value={newClientPassword}
                onChange={(e) => setNewClientPassword(e.target.value)}
                placeholder="Ingrese nueva contraseña"
                sx={{ mb: 2 }}
            />
        </DialogContent>
        <DialogActions>
            <Button
                type="submit"
                variant="contained"
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
    </form>
</Dialog>

    );

    const content = () => {
        switch (menu) {
            case 'Historial de Órdenes':
                return <div>Historial de Órdenes</div>;
            case 'Información de Usuario':
                return renderClientInfo();
            case 'Salir':
                navigate('/Login');
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
                            onClick={() => navigate('/Home')}
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
