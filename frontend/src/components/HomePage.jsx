
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Box, Typography, Button, Grid, Paper, Stack } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../assets/logo.png";

const HomePage = () => {
    const [newClientPassword, setNewClientPassword] = useState('');
    const [placeholderName, setPlaceholderName] = useState('');
    const [placeholderEmail, setPlaceholderEmail] = useState('');
    const [renderClientName, setRenderClientName] = useState('');
    const [renderClientEmail, setRenderClientEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const codedToken = sessionStorage.getItem("token");
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
                
                        const clientData = await getClientById(clientId); // Llama a la API con el ID del cliente
                
                        if (!clientData || !clientData.clientname || !clientData.clientemail) {
                            throw new Error("Datos del cliente incompletos o incorrectos");
                        }
                
                        // Actualiza el estado con los datos obtenidos
                        setRenderClientName(clientData.clientname);
                        setRenderClientEmail(clientData.clientemail);
                
                        // Finaliza la carga
                        setLoading(false);
                    } catch (error) {
                        console.error("Error al obtener datos del cliente:", error);
                        toast.error("Error al cargar los datos del cliente.");
                        setLoading(false); // Asegúrate de que no se quede en estado de carga
                    }
                };

        if (!codedToken) {
            console.error("No se encontró token en la sessionStorage");
            return;
        }

        try {
            const decodedToken = jwtDecode(codedToken);
            console.log("Decoded Token:", decodedToken);

            const clientName = decodedToken.name;
            const clientEmail = decodedToken.email;
            const clientPassword = decodedToken.password;
            if (clientName) {
                console.log("Cliente:", clientName);
                console.log("Email: ", clientEmail)
                console.log("Contraseña: ", clientPassword)
                toast.success(`Bienvenido, ${renderClientName}!`);
            } else {
                console.warn("El nombre del cliente no se encuentra en el token");
            }

        try {
            const decodedToken = jwtDecode(codedToken);
            setUser(decodedToken);
            toast.success(`Bienvenido, ${decodedToken.name || 'Usuario'}!`);
          
        } catch (error) {
            console.error("Error al desencriptar token:", error);
        }
    }, []);

    return (
        <Box
            sx={{
                fontFamily: "'Patrick Hand', cursive",
                color: "#333",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                backgroundColor: "#f0f8ff",
                padding: 4,
            }}
        >

            <Typography
                variant="h1"
                sx={{
                    fontSize: { xs: "2.5rem", sm: "4rem" },
                    fontWeight: "bold",
                    marginBottom: 4,
                }}
            >
                BIENVENIDO
            </Typography>
            <Box
                sx={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 3,
                }}
            >
                <img
                    src={logo}
                    alt="El Alamo Logo"
                    style={{
                        width: "300%",
                        height: "300%",
                        objectFit: "cover",
                        borderRadius: "10%",
                    }}
                />
            </Box>

            <Grid container spacing={4} alignItems="center" justifyContent="center">
                {/* Left Side (Title and Logo) */}
                <Grid item xs={12} sm={6} container direction="column" alignItems="center">
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: "2.5rem", sm: "4rem" },
                            fontWeight: "bold",
                            marginBottom: 3,
                            color: "#008000",
                            textAlign: "center",
                        }}
                    >
                        BIENVENID@S
                    </Typography>
                    <Box
                        sx={{
                            width: 400,
                            height: 400,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: 3,
                            boxShadow: 3,
                        }}
                    >
                        <img
                            src={logo}
                            alt="El Alamo Logo"
                            style={{
                                width: "200%",
                                height: "200%",
                                objectFit: "cover",
                                borderRadius: "50%",
                            }}
                        />
                    </Box>
                </Grid>

                {/* Right Side (User Greeting, Promotions, and Schedule) */}
                <Grid item xs={12} sm={6}>
                    <Box sx={{ textAlign: "left" }}>
                        {user && (
                            <Typography variant="h5" sx={{ marginBottom: 2 }}>
                                Hola, {user.name}!
                            </Typography>
                        )}

                        <Typography variant="body1" sx={{ marginBottom: 4, maxWidth: "600px" }}>
                            Disfruta de nuestras promociones y menús exclusivos. Explora, pide y relájate con lo mejor de nuestra cocina.
                        </Typography>

                        <Stack spacing={3}>
                            <Paper elevation={3} sx={{ padding: 3 }}>
                                <Typography variant="h6" gutterBottom>
                                    Promociones del Día
                                </Typography>
                                <Typography variant="body1">- 2x1 en bebidas después de las 5 PM</Typography>
                                <Typography variant="body1">- Descuento del 10% para estudiantes</Typography>
                            </Paper>

                            <Paper elevation={3} sx={{ padding: 3 }}>
                                <Typography variant="h6" gutterBottom>
                                    Horarios
                                </Typography>
                                <Typography variant="body1">Lunes a Viernes: 8 AM - 9 PM</Typography>
                                <Typography variant="body1">Sábado y Domingo: 10 AM - 11 PM</Typography>
                            </Paper>
                        </Stack>

                        <Button
                            variant="contained"
                            color="success"
                            sx={{ marginTop: 4 }}
                            href="/Menu"
                        >
                            Ver Menú
                        </Button>
                    </Box>
                </Grid>
            </Grid>


            <ToastContainer />
        </Box>
    );
};

export default HomePage;
