import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Box, Typography } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import logo from "../assets/logo.png";

const HomePage = () => {
    useEffect(() => {
        //este codigo de aqui me permite obtener el token
        const codedToken = sessionStorage.getItem("token");

        if (!codedToken) {
            console.error("No se encontró token en la sessionStorage");
            return;
        }
        // y aqui lo desencripta 
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
                toast.success(`Bienvenido, ${clientName}!`);
            } else {
                console.warn("El nombre del cliente no se encuentra en el token");
            }
        } catch (error) {
            console.error("Error al desencriptar token:", error);
        }
    }, []);

    return (
        <Box
            sx={{
                fontFamily: "'Patrick Hand', cursive",
                color: "#008000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: "#f7f7f7",
                textAlign: "center",
                padding: 2,
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
                BIENVENIDES
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
            <ToastContainer />
        </Box>
    );
};

export default HomePage;