import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Divider } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { styled } from '@mui/system';
import { registerClient } from '../services/client';  

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
    backgroundImage: 'url(src/assets/plantaloginyregister.png)',  // Corregido el error de la ruta
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

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        clientname: '',
        clientemail: '',
        clientpassword: ''
    });

    const navigate = useNavigate(); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const validateForm = async () => {
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

        if (await validateForm()) {
            try {
                const response = await registerClient(formData);
                toast.success("Usuario registrado exitosamente");
                setFormData({
                    clientname: '',
                    clientemail: '',
                    clientpassword: ''
                });
                setTimeout(() => {
                    navigate('/login');
                }, 2000); 
            } catch (error) {
                toast.error("Hubo un error al registrar el usuario");
            }
        }
    };

    return (
        <CustomContainer>
            <FormContainer>
                <Typography variant="h4" gutterBottom sx={{fontFamily:"'Patrick Hand', cursive"}}>Regístrate</Typography>
                <Divider sx={{ backgroundColor: 'white', margin: 'rem 0' }} />
                <form onSubmit={handleSubmit}>
                    <StyledTextField
                        label="Nombre Completo"
                        placeholder="Nombre"
                        id="clientname"  
                        value={formData.clientname}
                        onChange={handleChange}
                        fullWidth
                    />
                    <StyledTextField
                        label="Correo Electrónico"
                        placeholder="Email"
                        id="clientemail"  // Usamos 'clientemail' como en el estado
                        value={formData.clientemail}
                        onChange={handleChange}
                        fullWidth
                    />
                    <StyledTextField
                        label="Contraseña"
                        placeholder="Contraseña"
                        id="clientpassword"  // Usamos 'clientpassword' como en el estado
                        type="password"
                        value={formData.clientpassword}
                        onChange={handleChange}
                        fullWidth
                    />
                    <CustomButton type="submit" fullWidth>
                        Registrar
                    </CustomButton>
                </form>
                <Typography variant="body2" mt={2} sx={{fontFamily:"'Patrick Hand', cursive"}}>
                    Ya tienes una cuenta? <Link to="/Login" style={{ color: 'white', textDecoration: 'underline' }}>Inicia Sesión</Link>
                </Typography>
            </FormContainer>
            <ToastContainer />
        </CustomContainer>
    );
};

export default RegisterForm;
