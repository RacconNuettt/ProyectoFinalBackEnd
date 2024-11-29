import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Divider } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { styled } from '@mui/system';
import { loginClient } from '../services/client';

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
    backgroundImage: 'url(src/assets/plantaloginyregister.png)', 
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
    const [clientemail, setEmail] = useState('');
    const [clientpassword, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!clientemail || !clientpassword) {
            toast.error("Por favor completa todos los campos");
            return;
        }

        const loginData = { clientemail, clientpassword }; 

        try {
            const response = await loginClient(loginData);
            console.log('Respuesta del servidor:', response);

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
                        id="clientemail"
                        value={clientemail} 
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                    />
                    <StyledTextField
                        label="Contraseña"
                        placeholder="Contraseña"
                        id="clientpassword"
                        type="password"
                        value={clientpassword} 
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
