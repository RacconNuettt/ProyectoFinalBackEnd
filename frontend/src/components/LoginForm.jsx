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
import { loginClient } from '../services/client';

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

const LoginForm = () => {
    const [clientemail, setEmail] = useState('');
    const [clientpassword, setPassword] = useState('');
    const navigate = useNavigate();

    // Media query to detect small screens
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!clientemail || !clientpassword) {
            toast.error("Por favor completa todos los campos");
            return;
        }

        const loginData = { clientemail, clientpassword };

        try {
            const response = await loginClient(loginData);

            if (response && response.token) {
                localStorage.setItem('token', response.token);

                toast.success("Inicio de sesión exitoso!");
                navigate('/home');
            } else {
                toast.error("Usuario o contraseña incorrectos");
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
            toast.error("Error al conectar con el servidor");
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
                    px: 2, // Padding for smaller screens
                }}
            >
                <Box
                    sx={{
                        width: { xs: '100%', sm: '80%', md: '50%', lg: '30%' }, // Responsive width
                        bgcolor: 'background.paper',
                        textAlign: 'center',
                        color: 'text.primary',
                        p: { xs: 2, sm: 3, md: 4 }, // Dynamic padding
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
                            fontSize: { xs: '1.8rem', md: '2.2rem' },
                            color:'#ffffff'
                        }}
                    >
                        Inicio de Sesión
                    </Typography>
                    <Divider sx={{ backgroundColor: 'text.primary', mb: 2 }} />
                    <form onSubmit={handleSubmit}>
                        <TextField
                            //label="Correo Electrónico"
                            placeholder="Email"
                            id="clientemail"
                            value={clientemail}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            sx={{
                                mb: 2,
                                backgroundColor: '#fff',
                                borderRadius: 1,
                                '& label': { color: 'text.secondary' },
                                '& input': { fontFamily: 'Patrick Hand, cursive' },
                                '& fieldset': { borderColor: 'white' },
                                '&:hover fieldset': { borderColor: 'primary.main' },
                                color: '#000000',
                            }}
                        />
                        <TextField
                            //label="Contraseña"
                            placeholder="Contraseña"
                            id="clientpassword"
                            type="password"
                            value={clientpassword}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            sx={{
                                mb: 2,
                                backgroundColor: '#fff',
                                borderRadius: 1,
                                '& label': { color: 'text.secondary' },
                                '& input': { fontFamily: 'Patrick Hand, cursive' },
                                '& fieldset': { borderColor: 'white' },
                                '&:hover fieldset': { borderColor: 'primary.main' },
                                color: '#000000',
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
                        >
                            Ingresar
                        </Button>
                    </form>
                    <Typography
                        variant="body2"
                        mt={2}
                        sx={{
                            color:'#ffffff',
                            mt: 2,
                            fontSize: { xs: '0.8rem', sm: '1rem' },
                        }}
                    >
                        No tienes cuenta?{" "}
                        <Link
                            to="/"
                            style={{
                                color: 'white',
                                textDecoration: 'underline',
                            }}
                        >
                            Regístrate
                        </Link>
                    </Typography>
                </Box>
                <ToastContainer />
            </Container>
        </ThemeProvider>
    );
};

export default LoginForm;
