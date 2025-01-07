import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from 'react-toastify';
import { Container, Grid, Button, Typography, Card, CssBaseline, GlobalStyles, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { updateClient } from '../services/client';
import { FaHome, FaClipboardList, FaUserAlt, FaSignOutAlt } from 'react-icons/fa';
import { getAllClients } from '../services/client';
import { getClientById } from '../services/client';
import { deleteClient } from '../services/client';
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
    const [renderClientName, setRenderClientName] = useState('');
    const [renderClientEmail, setRenderClientEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        const codedToken = sessionStorage.getItem("token");
        const decodedToken = jwtDecode(codedToken);
        const clientId = decodedToken.id           
        renderClientInfo();

        if (!codedToken) {
            console.error("No se encontró token en la sessionStorage");
            return;
        }

        try {
            const { id, name, email } = decodedToken;
            setClientInfo({ id, name, email });
            toast.success(`Bienvenido, ${name}!`);
        } catch (error) {
            console.error("Error al desencriptar token:", error);
        }
    },[]);


    const fetchClientId = async () => {
        try {
            const codedToken = sessionStorage.getItem("token");
    
            if (!codedToken) {
                throw new Error("Token not found in sessionStorage");
            }
    
            const decodedToken = jwtDecode(codedToken);
            const clientId = decodedToken.id;
    
            const clientData = await getClientById(clientId);
            return clientData;
        } catch (error) {
            console.error('Error fetching the client id:', error);
            throw error;
        }
    };
    

    const handleUpdate = async (e) => {
        e.preventDefault();
    
        if (!newClientName && !newClientEmail && !newClientPassword) {
            toast.error("No hay cambios para guardar.");
            return;
        }
    
        try {
            const token = sessionStorage.getItem("token");
            if (!token) throw new Error("No se encontró el token.");
    
            const { id } = jwtDecode(token);
            const newData = {
                clientname: newClientName || placeholderName,
                clientemail: newClientEmail || placeholderEmail,
                clientpassword: newClientPassword,
            };
    
            const response = await updateClient(id, newData);
            if (response) {
                toast.success("Datos actualizados exitosamente.");
                setShowModal(false);
                renderClientInfo(); 
            } else {
                toast.error("Respuesta inesperada del servidor.");
            }

        } catch (error) {
            console.error("Error al actualizar datos:", error);
            toast.error("Error al conectar con el servidor.");
        }
    };
    
    const handleDelete= async () => {
        try {
            const token = sessionStorage.getItem("token");
            if (!token) throw new Error("No se encontró el token.");
            const { id } = jwtDecode(token);
            await deleteClient(id);
            toast.success('Usuario eliminado correctamente.');
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('adminName');
            navigate('/login'); 
        } catch (error) {
            console.error('Error deleting user:', error);
            toast.error('Error al eliminar el usuario.');
        }
      };
    const renderClientInfo = async () => {
        try {
            const codedToken = sessionStorage.getItem("token");
    
            if (!codedToken) {
                throw new Error("No se encontró token en la sessionStorage");
            }
    
            const decodedToken = jwtDecode(codedToken);
    
            if (!decodedToken || !decodedToken.id) {
                throw new Error("Token inválido o no contiene un ID");
            }
    
            const clientId = decodedToken.id;
    
            const clientData = await getClientById(clientId);
    
            if (!clientData || !clientData.clientname || !clientData.clientemail) {
                throw new Error("Datos del cliente incompletos o incorrectos");
            }
    
            setRenderClientName(clientData.clientname);
            setRenderClientEmail(clientData.clientemail);
    
            setLoading(false);
        } catch (error) {
            console.error("Error al obtener datos del cliente:", error);
            toast.error("Error al cargar los datos del cliente.");
            setLoading(false);
        }
    };
    
    

    const clientProfile = () => (
        <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
            {loading ? (
                <Typography>Cargando información del cliente...</Typography>
            ) : (
                <>
                    <Typography variant="h5" gutterBottom>
                        Información de Usuario
                    </Typography>
                    <Typography>
                        <strong>Nombre:</strong> {renderClientName || "No disponible"}
                    </Typography>
                    <Typography>
                        <strong>Correo Electrónico:</strong> {renderClientEmail || "No disponible"}
                    </Typography>
                                <Button
                                    variant="outlined"
                                    onClick={async () => {
                                        try {
                                            const clientData = await fetchClientId();
                                            setShowModal(true); 
                                            setPlaceholderName(renderClientName); 
                                            setPlaceholderEmail(renderClientEmail); 
                                            
                                        } catch (error) {
                                            console.error("Error fetching client data:", error);
                                            toast.error("Error al obtener los datos del cliente");
                                        }
                                    }}
                                    sx={{
                                        marginTop: 2,
                                        marginRight:2,
                                        backgroundColor: "#008000",
                                        color: "#fff",
                                        "&:hover": { backgroundColor: "#007000" },
                                    }}
                                >
                                    Actualizar Datos
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={() => setShowDeleteModal(true)}
                                    sx={{
                                        marginTop: 2,
                                        backgroundColor: "#ce1414",
                                        color: "#fff",
                                        "&:hover": { backgroundColor: "#710b0b" },
                                    }}
                                >

                                    Eliminar cuenta
                                </Button>
                </>
                
            )}
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
                placeholder={placeholderName}
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="Correo Electrónico"
                value={newClientEmail}
                onChange={(e) => setNewClientEmail(e.target.value)}
                placeholder={placeholderEmail}
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
const deleteAccountModal = () => (
    <Dialog open={showDeleteModal} onClose={() => setShowDeleteModal(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Eliminar cuenta?</DialogTitle>
        <DialogContent>
            <Typography>
                ¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.
            </Typography>
        </DialogContent>
        <DialogActions>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#ce1414',
                    color: '#fff',
                    "&:hover": { backgroundColor: "#710b0b" },
                }}
                onClick={handleDelete}
            >
                Eliminar
            </Button>
            <Button
                variant="outlined"
                sx={{ color: "#008000" }}
                onClick={() => setShowDeleteModal(false)}
            >
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
                return clientProfile();
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
            <Container maxWidth="xl" sx={{ backgroundColor: '#fafafa ', minHeight: '100vh', padding: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3} md={2} mt={1} sx={{ backgroundColor: '#008000', color: 'white', padding: 2, minHeight: '100vh', borderRadius: '24px'}}>
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
                        {dataUpdateModal()}
                        {deleteAccountModal()}
                    </Grid>
                </Grid>
            </Container>
            
        </>
    );
};

export default UserPage;