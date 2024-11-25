import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Divider } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { styled } from '@mui/system';

const CustomContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: "'Patrick Hand', cursive",
});

const FormContainer = styled(Box)({
    width: '30%',
    backgroundColor: '#008000bb',
    textAlign: 'center',
    color: 'white',
    padding: '2rem',
    borderRadius: '8px',
    backgroundImage: 'url(../assets/plantaloginyregister.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100px bottom',
});

const StyledTextField = styled(TextField)({
    marginBottom: '1rem',
    backgroundColor: 'white',
    borderRadius: '5px',
    '& label': {
        color: 'grey',
        fontFamily: "'Patrick Hand', cursive",
    },
    '& .MuiOutlinedInput-root': {
        '& input': {
            fontFamily: "'Patrick Hand', cursive",
        },
        '& fieldset': {
            borderColor: 'white',
        }
    },
});

const CustomButton = styled(Button)({
    backgroundColor: '#fff',
    color: '#28a745',
    fontFamily: "'Patrick Hand', cursive",
    border: '1px solid #28a745',
    marginTop: '1rem',
    '&:hover': {
        backgroundColor: '#28a745',
        color: '#fff',
    },
});

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Por favor completa todos los campos");
            return;
        }

        try {
            const response = await fetch('http://localhost:3008/users');
            const users = await response.json();

            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                if (email === 'admin@gmail.com' && password === 'Admin1234') {
                    localStorage.setItem('isAuthenticated', true);
                    localStorage.setItem('isAdmin', true);
                    setTimeout(() => navigate('/Admin'), 1500);
                    toast.success("Bienvenida devuelta Reina Isabel!");
                } else {
                    localStorage.setItem('isAuthenticated', true);
                    localStorage.setItem('isAdmin', false);
                    setTimeout(() => navigate('/Home'), 1500);
                    toast.success("Inicio de sesión exitoso!");
                }
            } else {
                toast.error("Usuario o contraseña incorrectos");
            }
        } catch (error) {
            toast.error("Error al conectar con el servidor");
        }
    };

    return (
        <CustomContainer>
            <FormContainer>
                <Typography variant="h4" gutterBottom sx={{ fontFamily: "'Patrick Hand', cursive" }}>
                    Inicio de Sesión
                </Typography>
                <Divider sx={{ backgroundColor: 'white', margin: 'rem 0' }} />
                <form onSubmit={handleSubmit}>
                    <StyledTextField
                        label="Correo Electrónico"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                    />
                    <StyledTextField
                        label="Contraseña"
                        placeholder="Contraseña"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                    />
                    <CustomButton type="submit" fullWidth>
                        Ingresar
                    </CustomButton>
                </form>
                <Typography variant="body2" mt={2} sx={{ fontFamily: "'Patrick Hand', cursive" }}>
                    No tienes cuenta? <Link to="/" style={{ color: 'white', textDecoration: 'underline' }}>Regístrate</Link>
                </Typography>
            </FormContainer>
            <ToastContainer />
        </CustomContainer>
    );
};

export default LoginForm;
