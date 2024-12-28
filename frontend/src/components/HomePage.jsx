import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Box, Typography } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import logo from "../assets/logo.png";

const HomePage = () => {
    const [newClientPassword, setNewClientPassword] = useState('');
    const [placeholderName, setPlaceholderName] = useState('');
    const [placeholderEmail, setPlaceholderEmail] = useState('');
    const [renderClientName, setRenderClientName] = useState('');
    const [renderClientEmail, setRenderClientEmail] = useState('');
    const [loading, setLoading] = useState(true);

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
            <ToastContainer />
        </Box>
    );
};

export default HomePage;