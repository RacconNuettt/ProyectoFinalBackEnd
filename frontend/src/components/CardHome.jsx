import React from "react";
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";

import casado from "../assets/casado.jpeg";
import pinto from "../assets/pinto.jpeg";
import gordonblue from "../assets/gordonblue.jpg";
import empanadas from "../assets/Empanadas.jpg";
import olladecarne from "../assets/olladecarne.jpg";
import tortillas from "../assets/tortillas.jpg";
import sopademariscos from "../assets/sopademariscos.jpg";
import tamales from "../assets/tamal.png";
import chicharrones from "../assets/chicharrones.jpg";

const CardHome = () => {
    const dishes = [
        {
            title: "Casado",
            description: "Arroz, Frijoles, Bistec de cerdo, Platano frito, Ensalada",
            category: "Categoria: Almuerzo",
            imgSrc: casado,
        },
        {
            title: "Pinto",
            description:
                "Delicioso Pinto, con platano frito, queso frito, huevo y natilla",
            category: "Categoria: Desayuno",
            imgSrc: pinto,
        },
        {
            title: "Gordon Blue de Pollo",
            description: "Pechugas de pollo o carne de cerdo, rellenas de jamón y queso",
            category: "Categoria: Cena",
            imgSrc: gordonblue,
        },
        {
            title: "Tortillas Palmeada",
            description: "Tortillas de mano caseras",
            category: "Desayuno",
            imgSrc: tortillas,
        },
        {
            title: "Sopa de Mariscos",
            description:
                "Camarones, mejillones, almejas, calamares y pescado, todo cocido en un caldo sabroso",
            category: "Almuerzo",
            imgSrc: sopademariscos,
        },
        {
            title: "Empanadas",
            description: "Carne, pollo, jamón y queso",
            category: "Desayuno",
            imgSrc: empanadas,
        },
        {
            title: "Olla de Carne",
            description:
                "Trozos de carne de res con zanahorias, chayote, yuca, papa, y maíz tierno.",
            category: "Almuerzo",
            imgSrc: olladecarne,
        },
        {
            title: "Tamales",
            description: "Tamales de cerdo, pollo, y entre otras variaciones",
            category: "3 Tiempos de comida",
            imgSrc: tamales,
        },
        {
            title: "Chicharrones",
            description:
                "Trozos de carne de cerdo fritos, crujientes por fuera y jugosos por dentro.",
            category: "Cena",
            imgSrc: chicharrones,
        },
    ];

    return (
        <Box sx={{ py: 4, backgroundColor: "#f8f9fa" }}>
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                    fontFamily: "'Nerko One', cursive",
                    color: "#008000",
                    mb: 4,
                }}
            >
                Conoce nuestro{" "}
                <MuiLink
                    component={Link}
                    to="/Menu"
                    sx={{
                        color: "#007bff",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                    }}
                >
                    menú
                </MuiLink>
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {dishes.map((dish, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                boxShadow: 3,
                                "&:hover": { boxShadow: 6 },
                                p: 2,
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={dish.imgSrc}
                                alt={dish.title}
                                sx={{
                                    width: 100,
                                    height: 150,
                                    borderRadius: "5%",
                                    objectFit: "cover",
                                    mr: 2,
                                }}
                            />
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontFamily: "'Nerko One', cursive",
                                        color: "#008000",
                                    }}
                                >
                                    {dish.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#333",
                                    }}
                                >
                                    {dish.description}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontStyle: "italic",
                                        color: "#555",
                                    }}
                                >
                                    {dish.category}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CardHome;
