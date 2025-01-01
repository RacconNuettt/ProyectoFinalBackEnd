import React, { useState } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
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
                navigate('/admin');
            } else {
                toast.error('No tienes permisos de administrador', { position: 'top-center' });
            }
        } catch (error) {
            console.error('Error de validación:', error);
            toast.error(error.message || 'Credenciales incorrectas', { position: 'top-center' });
        } finally {
            setLoading(false);
        }
    };

    // Si el rol ya está permitido
    if (userRole === allowedRole) {
        return <Outlet />;
    }

    // Si no está autenticado o no tiene el rol adecuado, redirige
    if (!token) {
        toast.error('Acceso denegado, inicia sesión primero');
        return <Navigate to="/login" replace />;
    }

    // Modal de validación
    return (
        <>
            <Box sx={{ textAlign: 'center', mt: 10 }}>
                <Typography variant="h5" color="primary" sx={{ mb: 3 }}>
                    Para ingresar a esta página, valida tus credenciales de administrador
                </Typography>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setOpen(true)}
                    >
                        Validar
                    </Button>
                </motion.div>
            </Box>

            <Modal open={open} onClose={() => setOpen(false)}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        p: 4,
                        borderRadius: 2,
                        boxShadow: 24,
                    }}
                >
                    <Typography variant="h6">Validar Administrador</Typography>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Correo"
                        value={adminEmail}
                        onChange={(e) => setAdminEmail(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Contraseña"
                        type="password"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleValidate}
                        disabled={loading}
                        sx={{ mt: 2 }}
                    >
                        {loading ? <CircularProgress size={24} /> : 'Validar'}
                    </Button>
                </Box>
            </Modal>
        </>
    );
};

export default ProtectedRoute;
