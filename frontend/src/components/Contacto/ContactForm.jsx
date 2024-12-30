import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Checkbox,
    Button,
    FormControlLabel,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Alert,
    InputAdornment,
    IconButton,
} from "@mui/material";
import emailjs from "emailjs-com";
import contact from "../../assets/contacto.jpg";
import { Person, Email, Phone, Message } from "@mui/icons-material";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
    });
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showForm, setShowForm] = useState(false); // Estado para mostrar el formulario
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!termsAccepted || Object.values(formData).some((x) => x.trim() === "")) {
            setError("Por favor, completa todos los campos y acepta los términos.");
            return;
        }

        emailjs
            .send("service_5j8ksg8", "template_hcag65g", formData, "zgUHQAUWnOd3voyuz")
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setFormData({ name: "", lastname: "", email: "", phone: "", message: "" });
                    setTermsAccepted(false);
                },
                (err) => {
                    console.error("Failed to send:", err);
                }
            );
    };

    return (
        <Box
            sx={{
                maxWidth: "800px",
                margin: "auto",
                padding: 4,
                marginTop: 4,
                color: "#333",
                backgroundColor: "#f5f5f5",
                borderRadius: 2,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                fontFamily: "'Patrick Hand', cursive",
            }}
        >
            {/* Bloque de imagen y texto */}
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 4 }}>
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        marginRight: 3,
                    }}
                >
                    <img
                        src={contact} // Aquí puedes colocar la ruta de la imagen
                        alt="Imagen de contacto"
                        style={{ width: "100%", maxWidth: "250px", borderRadius: "8px" }}
                    />
                </Box>

                <Box sx={{ flex: 2 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "bold",
                            color: "#008000",
                            marginBottom: 1,
                        }}
                    >
                        ¡Contáctanos! Y déjanos saber qué opinas de nosotros
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#555" }}>
                        ¡Nos encantaría saber tu opinión! Déjanos un mensaje a través de este formulario.
                    </Typography>
                </Box>
            </Box>

            {/* Botón para mostrar el formulario */}
            <Box sx={{ textAlign: "center", marginBottom: 3 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setShowForm(!showForm)}
                    sx={{
                        backgroundColor: "#0275d8",
                        color: "#fff",
                        "&:hover": { backgroundColor: "#0058a3" },
                    }}
                >
                    {showForm ? "Ocultar Formulario" : "Mostrar Formulario"}
                </Button>
            </Box>

            {/* Formulario de Contacto (condicional) */}
            {showForm && (
                <Box
                    sx={{
                        backgroundColor: "#fff",
                        borderRadius: 3,
                        padding: 3,
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h2"
                        align="center"
                        sx={{
                            fontFamily: "'Patrick Hand', cursive",
                            color: "#008000",
                            fontWeight: "bold",
                            marginBottom: 3,
                        }}
                    >
                        Formulario de Contacto
                    </Typography>

                    {error && (
                        <Alert severity="error" sx={{ marginBottom: 2 }}>
                            {error}
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit}>
                        {/* Nombre */}
                        <TextField
                            label="Nombre"
                            name="name"
                            fullWidth
                            value={formData.name}
                            onChange={handleChange}
                            required
                            sx={{
                                marginBottom: 2,
                                fontFamily: "'Patrick Hand', cursive",
                                color: "#008000",
                                "& .MuiInputLabel-root": { color: "#008000" },
                                "& .MuiOutlinedInput-root": {
                                    borderColor: "#008000",
                                    "&:hover fieldset": {
                                        borderColor: "#005700",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#005700",
                                    },
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Person sx={{ color: "#008000" }} />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {/* Apellidos */}
                        <TextField
                            label="Apellidos"
                            name="lastname"
                            fullWidth
                            value={formData.lastname}
                            onChange={handleChange}
                            required
                            sx={{
                                marginBottom: 2,
                                "& .MuiInputLabel-root": { color: "#008000" },
                                "& .MuiOutlinedInput-root": {
                                    borderColor: "#008000",
                                    "&:hover fieldset": {
                                        borderColor: "#005700",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#005700",
                                    },
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Person sx={{ color: "#008000" }} />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {/* Correo */}
                        <TextField
                            label="Correo"
                            name="email"
                            type="email"
                            fullWidth
                            value={formData.email}
                            onChange={handleChange}
                            required
                            sx={{
                                marginBottom: 2,
                                "& .MuiInputLabel-root": { color: "#008000" },
                                "& .MuiOutlinedInput-root": {
                                    borderColor: "#008000",
                                    "&:hover fieldset": {
                                        borderColor: "#005700",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#005700",
                                    },
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email sx={{ color: "#008000" }} />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {/* Teléfono */}
                        <TextField
                            label="Teléfono"
                            name="phone"
                            type="tel"
                            fullWidth
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            sx={{
                                marginBottom: 2,
                                "& .MuiInputLabel-root": { color: "#008000" },
                                "& .MuiOutlinedInput-root": {
                                    borderColor: "#008000",
                                    "&:hover fieldset": {
                                        borderColor: "#005700",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#005700",
                                    },
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Phone sx={{ color: "#008000" }} />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {/* Mensaje */}
                        <TextField
                            label="Mensaje"
                            name="message"
                            multiline
                            rows={4}
                            fullWidth
                            value={formData.message}
                            onChange={handleChange}
                            required
                            sx={{
                                marginBottom: 2,
                                "& .MuiInputLabel-root": { color: "#008000" },
                                "& .MuiOutlinedInput-root": {
                                    borderColor: "#008000",
                                    "&:hover fieldset": {
                                        borderColor: "#005700",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#005700",
                                    },
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Message sx={{ color: "#008000" }} />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {/* Checkbox para aceptar los términos */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={termsAccepted}
                                    onChange={() => setTermsAccepted(!termsAccepted)}
                                    required
                                    sx={{
                                        marginBottom: 2,
                                        fontFamily: "'Patrick Hand', cursive",
                                        color: "#008000",
                                    }}
                                />
                            }
                            label="He leído y acepto los términos y condiciones."
                            sx={{
                                fontFamily: "'Patrick Hand', cursive",
                                color: "#008000",
                            }}
                        />

                        {/* Botón Leer Términos */}
                        <Button
                            variant="outlined"
                            onClick={() => setShowModal(true)}
                            sx={{
                                marginBottom: 2,
                                fontFamily: "'Patrick Hand', cursive",
                                backgroundColor: "#008000",
                                color: "#fff",
                                "&:hover": { backgroundColor: "#014701" },
                            }}
                        >
                            Leer Términos
                        </Button>

                        {/* Botón Enviar */}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{
                                backgroundColor: "#0275d8",
                                color: "#fff",
                                "&:hover": { backgroundColor: "#0058a3" },
                                fontFamily: "'Patrick Hand', cursive",
                            }}
                        >
                            Enviar
                        </Button>
                    </form>
                </Box>
            )}

            {/* Términos Modal */}
            <Dialog open={showModal} onClose={() => setShowModal(false)}>
                <DialogTitle sx={{ fontFamily: "'Patrick Hand', cursive", color: "#008000" }}>
                    Términos de Condiciones
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body1" sx={{ fontFamily: "'Patrick Hand', cursive", color: "#008000" }}>
                        Todo el contenido de este sitio, incluidos textos, gráficos, es propiedad de El Álamo o de sus licenciantes. Está protegido por las leyes de derechos de autor y marcas registradas.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowModal(false)} color="secondary" sx={{ fontFamily: "'Patrick Hand', cursive", color: "#008000" }}>
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default ContactForm;
