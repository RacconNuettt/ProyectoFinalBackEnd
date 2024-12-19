import React, { useState } from 'react';
import {
    TextField,
    Button,
    Typography,
    Container,
    Box,
    Divider,
    useMediaQuery,
} from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import plantaloginyregister from '../assets/plantaloginyregister.png'; // Import the image
import { registerClient } from '../services/client';

const theme = createTheme({
    palette: {
        primary: {
            main: '#28a745', // Button green
        },
        background: {
            default: '#f8f9fa', // General background
            paper: '#008000bb', // Form background
        },
    },
    typography: {
        fontFamily: "'Patrick Hand', cursive",
    },
});

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        clientname: '',
        clientemail: '',
        clientpassword: '',
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const validateForm = () => {
        const { clientname, clientemail, clientpassword } = formData;

        if (!clientname || !clientemail || !clientpassword) {
            toast.error("Todos los campos son obligatorios");
            return false;
        }

        if (clientpassword.length < 8) {
            toast.error("La contraseña debe tener al menos 8 caracteres");
            return false;
        }

        const hasUpperCase = /[A-Z]/.test(clientpassword);
        const hasLowerCase = /[a-z]/.test(clientpassword);
        const hasNumber = /\d/.test(clientpassword);

        if (!hasUpperCase || !hasLowerCase || !hasNumber) {
            toast.error("La contraseña debe contener al menos una mayúscula, una minúscula y un número");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (validateForm()) {
            setLoading(true);
            try {
                const response = await registerClient(formData);
                toast.success("Usuario registrado exitosamente");
                setFormData({
                    clientname: '',
                    clientemail: '',
                    clientpassword: '',
                });
                setTimeout(() => navigate('/login'), 2000);
            } catch (error) {
                const errorMsg = error.response?.data?.message || "Hubo un error al registrar el usuario";
                toast.error(errorMsg);
            } finally {
                setLoading(false);
            }
        }
    };
    

    return (
        <ThemeProvider theme={theme}>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    backgroundColor: 'background.default',
                    px: 2,
                }}
            >
                <Box
                    sx={{
                        width: { xs: '100%', sm: '80%', md: '50%', lg: '30%' },
                        bgcolor: 'background.paper',
                        textAlign: 'center',
                        color: 'text.primary',
                        p: { xs: 2, sm: 3, md: 4 },
                        borderRadius: 2,
                        backgroundImage: `url(${plantaloginyregister})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center bottom',
                    }}
                >
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                            color: '#fff',
                            fontSize: { xs: '1.8rem', md: '2.2rem' }
                        }}
                    >
                        Regístrate
                    </Typography>
                    <Divider sx={{ backgroundColor: 'text.primary', mb: 2 }} />
                    <form onSubmit={handleSubmit}>
                        <TextField
                            //label="Nombre Completo"
                            placeholder="Nombre"
                            id="clientname"
                            value={formData.clientname}
                            onChange={handleChange}
                            fullWidth
                            sx={{
                                color: '#ffffff',
                                mb: 2,
                                backgroundColor: '#fff',
                                borderRadius: 1,
                                '& label': { color: 'text.secondary' },
                                '& input': { fontFamily: 'Patrick Hand, cursive' },
                                '& fieldset': { borderColor: 'white' },
                                '&:hover fieldset': { borderColor: 'primary.main' },
                            }}
                        />
                        <TextField
                            //label="Correo Electrónico"
                            placeholder="Email"
                            id="clientemail"
                            value={formData.clientemail}
                            onChange={handleChange}
                            fullWidth
                            sx={{
                                mb: 2,
                                backgroundColor: '#fff',
                                borderRadius: 1,
                                '& label': { color: 'text.secondary' },
                                '& input': { fontFamily: 'Patrick Hand, cursive' },
                                '& fieldset': { borderColor: 'white' },
                                '&:hover fieldset': { borderColor: 'primary.main' },
                            }}
                        />
                        <TextField
                            //label="Contraseña"
                            placeholder="Contraseña"
                            id="clientpassword"
                            type="password"
                            value={formData.clientpassword}
                            onChange={handleChange}
                            fullWidth
                            sx={{
                                mb: 2,
                                backgroundColor: '#fff',
                                borderRadius: 1,
                                '& label': { color: 'text.secondary' },
                                '& input': { fontFamily: 'Patrick Hand, cursive' },
                                '& fieldset': { borderColor: 'white' },
                                '&:hover fieldset': { borderColor: 'primary.main' },
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            sx={{
                                backgroundColor: '#fff',
                                color: 'primary.main',
                                fontFamily: "'Patrick Hand', cursive",
                                border: '1px solid',
                                borderColor: 'primary.main',
                                mt: 2,
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    color: '#fff',
                                },
                            }}
                            disabled={loading}
                        >
                            {loading ? 'Registrando...' : 'Registrar'}
                        </Button>
                    </form>
                    <Typography
                        variant="body2"
                        mt={2}
                        sx={{
                            mt: 2,
                            fontSize: { xs: '0.8rem', sm: '1rem' },
                            color:'#ffffff',
                        }}
                    >
                        Ya tienes una cuenta?{" "}
                        <Link
                            to="/login"
                            style={{
                                color: 'white',
                                textDecoration: 'underline',
                            }}
                        >
                            Inicia Sesión
                        </Link>
                    </Typography>
                </Box>
                <ToastContainer />
            </Container>
        </ThemeProvider>
    );
};

export default RegisterForm;
