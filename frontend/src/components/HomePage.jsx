import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Box, Typography, Button, Grid, Paper, Stack } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../assets/logo.png";

const HomePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const codedToken = sessionStorage.getItem("token");

        if (!codedToken) {
            console.error("No se encontró token en la sessionStorage");
            return;
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
                            width: 200,
                            height: 200,
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

                <Grid item xs={12} sm={6}>
                    <Box sx={{ textAlign: "left" }}>
                        {user && (
                            <Typography variant="h5" sx={{ marginBottom: 2 }}>
                                Hola, {user.name}!
                            </Typography>
                        )}

                        <Typography variant="body1" sx={{ marginBottom: 4, maxWidth: "600px" }}>
                            Disfruta de nuestras promociones y menús. Explora, pide y relájate con lo mejor de nuestra cocina.
                        </Typography>

                        <Stack spacing={3}>
                            <Paper elevation={3} sx={{ padding: 3 }}>
                                <Typography variant="h6" gutterBottom>
                                    Promociones del Día
                                </Typography>
                                <Typography variant="body1">- 2x1 en bebidas después de las 5 PM</Typography>
                            </Paper>

                            <Paper elevation={3} sx={{ padding: 3 }}>
                                <Typography variant="h6" gutterBottom>
                                    Horarios
                                </Typography>
                                <Typography variant="body1">Lunes a Viernes: 6 AM - 9 PM</Typography>
                                <Typography variant="body1">Sábado y Domingo: 6 AM - 2 PM</Typography>
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
