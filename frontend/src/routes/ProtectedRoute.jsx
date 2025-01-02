import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button, Modal, Box, TextField, Typography, CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';
import { loginAdmin } from '../services/admin';
import { jwtDecode } from "jwt-decode";
import { motion } from 'framer-motion';

const ProtectedRoute = ({ allowedRole }) => {
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');
    const userRole = token ? jwtDecode(token).role : null;
    const [open, setOpen] = useState(false);
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleValidate = async () => {
        setLoading(true);
        try {
            const response = await loginAdmin({ adminEmail, adminPassword });

            if (response && response.token) {
                sessionStorage.setItem('token', response.token);
                setOpen(false);
                toast.success('Acceso concedido', { position: 'top-center' });
            } else {
                toast.error('Credenciales incorrectas o no tienes permisos de administrador', { position: 'top-center' });
            }
        } catch (error) {
            toast.error(error.message || 'Error al validar', { position: 'top-center' });
        } finally {
            setLoading(false);
        }
    };

    const handleOpenModal = () => {
        setOpen(true);
    };

    if (!token || userRole !== allowedRole) {
        return (
            <Box sx={{ textAlign: 'center', mt: 10 }}>
                <Typography variant="h5" color="primary" sx={{ mb: 3 }}>
                    Para ingresar a la página solicitada, valida tus credenciales de administrador
                </Typography>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleOpenModal}
                        sx={{
                            fontSize: '16px',
                            fontWeight: 'bold',
                            borderRadius: '20px',
                            padding: '10px 20px',
                        }}
                    >
                        Validar
                    </Button>
                </motion.div>

                <Modal open={open} onClose={() => setOpen(false)}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                            borderRadius: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h6" sx={{ mb: 2 }}>Validar Administrador</Typography>

                        <TextField
                            fullWidth
                            margin="normal"
                            label="Correo"
                            value={adminEmail}
                            onChange={(e) => setAdminEmail(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Contraseña"
                            type="password"
                            value={adminPassword}
                            onChange={(e) => setAdminPassword(e.target.value)}
                            sx={{ mb: 2 }}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleValidate}
                            sx={{
                                mt: 2,
                                fontWeight: 'bold',
                                borderRadius: '20px',
                                padding: '12px',
                            }}
                            disabled={loading}
                        >
                            {loading ? <CircularProgress size={24} /> : 'Validar'}
                        </Button>
                    </Box>
                </Modal>
            </Box>
        );
    }

    return <Outlet />;
};

export default ProtectedRoute;
