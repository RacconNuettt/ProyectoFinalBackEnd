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
} from "@mui/material";
import emailjs from "emailjs-com";

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
                maxWidth: "600px",
                margin: "auto",
                padding: 3,
                marginTop: 4, // Added spacing from the top of the page
                color: "#008000",
                backgroundColor: "#f9f9f9",
                borderRadius: 2,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                fontFamily: "'Patrick Hand', cursive",
                fontSize: "44"
            }}
        >
            <Typography
                variant="h4"
                component="h2"
                gutterBottom
                align="center"
                color="#008000"
                sx={{ fontFamily: "'Patrick Hand', cursive", color: "#008000" }}
            >
                Formulario de Contacto
            </Typography>
            {error && (
                <Alert severity="error" sx={{ marginBottom: 2 }}>
                    {error}
                </Alert>
            )}

            <form onSubmit={handleSubmit}>
                Nombre
                <TextField
                    label="Nombre"
                    name="name"
                    fullWidth
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{ marginBottom: 2, fontFamily: "'Patrick Hand', cursive", color: "#008000" }}
                />
                Apellidos
                <TextField
                    label="Apellidos"
                    name="lastname"
                    fullWidth
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                    sx={{ marginBottom: 2 }}
                />
                Correo
                <TextField
                    label="Correo"
                    name="email"
                    type="email"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{ marginBottom: 2 }}
                />
                Telefono
                <TextField
                    label="Teléfono"
                    name="phone"
                    type="tel"
                    fullWidth
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    sx={{ marginBottom: 2 }}
                />
                Mensaje
                <TextField
                    label="Mensaje"
                    name="message"
                    multiline
                    rows={4}
                    fullWidth
                    value={formData.message}
                    onChange={handleChange}
                    required
                    sx={{ marginBottom: 2 }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={termsAccepted}
                            onChange={() => setTermsAccepted(!termsAccepted)}
                            required
                            sx={{
                                marginBottom: 2,
                                fontFamily: "'Patrick Hand', cursive",
                            }}
                        />
                    }
                    label="Ya he leído los términos de condición."
                    sx={{
                        fontFamily: "'Patrick Hand', cursive",
                    }}
                />
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
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                        backgroundColor: "#0275d8",
                        color: "#fff",
                        "&:hover": { backgroundColor: "#0058a3" },
                        fontFamily: "'Patrick Hand', cursive"
                    }}
                >
                    Enviar
                </Button>
            </form>
            {/* Terms Dialog */}
            <Dialog open={showModal} onClose={() => setShowModal(false)}>
                <DialogTitle sx={{ height: "100%", fontFamily: "'Patrick Hand', cursive", color: "#008000" }}>Términos de Condiciones</DialogTitle>
                <DialogContent>
                    <Typography variant="body1"
                        sx={{
                            height: "100%",
                            fontFamily: "'Patrick Hand', cursive",
                            color: "#008000"
                        }}
                    >
                        Todo el contenido de este sitio, incluidos textos, gráficos, es
                        propiedad de El Álamo o de sus licenciantes. Está protegido por las
                        leyes de derechos de autor y marcas registradas.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowModal(false)} color="secondary" sx={{ height: "100%", fontFamily: "'Patrick Hand', cursive", color: "#008000" }}>
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default ContactForm;
