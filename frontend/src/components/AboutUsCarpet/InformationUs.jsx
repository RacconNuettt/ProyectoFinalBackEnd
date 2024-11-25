import React from "react";
import { Box, Container, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import imagen1 from "../../assets/historia.jpg";
import imagen2 from "../../assets/soda.jpg";
import imagen3 from "../../assets/soda2.jpg";

const InformationUs = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#f9f9f9",
                padding: 4,
                fontFamily: "'Patrick Hand', cursive",
                color: "#008000",
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    sx={{
                        marginBottom: 3,
                        fontFamily: "'Patrick Hand', cursive",
                        color: "#008000"
                    }}
                >
                    Sobre Nosotros
                </Typography>
                <Typography variant="body1" align="center" sx={{ marginBottom: 4, lineHeight: 1.8, height: "100%",fontFamily: "'Patrick Hand', cursive", color: "#008000" }}>
                    Bienvenidos a El Álamo, una sodita con corazón costarricense. Desde nuestras raíces, hemos
                    trabajado con pasión para ofrecerles lo mejor de la cocina tradicional costarricense. En
                    El Álamo, cada plato es preparado con ingredientes frescos, locales y una buena dosis de
                    cariño.
                </Typography>

                <Grid container spacing={4}>
                    {/* Nuestra Historia */}
                    <Grid item xs={12} md={4}>
                        <Card sx={{ boxShadow: 3, height: "100%",
                                fontFamily: "'Patrick Hand', cursive",
                                color: "#008000" }}>
                            <CardMedia
                                component="img"
                                alt="Nuestra Historia"
                                height="200"
                                image={imagen1}
                                sx={{ borderRadius: "4px 4px 0 0"
                                }}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom
                                sx={{height: "100%",
                                    fontFamily: "'Patrick Hand', cursive",
                                    color: "#008000" }}
                                >
                                    Nuestra Historia
                                </Typography>
                                <Typography variant="body2" color="text.secondary"
                                sx={{height: "100%",
                                    fontFamily: "'Patrick Hand', cursive",
                                    color: "#008000" }}
                                >
                                    Somos una sodita que inició como una oportunidad maravillosa que se presentó.
                                    Gracias a nuestros clientes hemos logrado crear una reputación que respalda
                                    nuestra calidad. Cocina con amor y con gracia a tu trabajo, ese es nuestro lema.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Quiénes Somos */}
                    <Grid item xs={12} md={4}>
                        <Card sx={{ boxShadow: 3, height: "100%",
                                fontFamily: "'Patrick Hand', cursive",
                                color: "#008000" }}>
                            <CardMedia
                                component="img"
                                alt="Quiénes Somos"
                                height="200"
                                image={imagen2}
                                sx={{ borderRadius: "4px 4px 0 0"
                                }}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom
                                sx={{height: "100%",
                                    fontFamily: "'Patrick Hand', cursive",
                                    color: "#008000" }}
                                >    
                                    Quiénes Somos
                                </Typography>
                                <Typography variant="body2" color="text.secondary"
                                sx={{height: "100%",
                                    fontFamily: "'Patrick Hand', cursive",
                                    color: "#008000" }}
                                >
                                    
                                    Cada miembro de nuestro equipo comparte una profunda conexión con la cocina, y
                                    juntos trabajamos para preservar y reinventar las recetas tradicionales que han
                                    sido transmitidas de generación en generación. Creemos en la importancia de
                                    utilizar ingredientes frescos y locales, apoyando a nuestros agricultores y
                                    productores de la zona.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Nuestro Objetivo */}
                    <Grid item xs={12} md={4}>
                        <Card sx={{ boxShadow: 3, height: "100%",
                                fontFamily: "'Patrick Hand', cursive",
                                color: "#008000" }}>
                            <CardMedia
                                component="img"
                                alt="Nuestro Objetivo"
                                height="200"
                                image={imagen3}
                                sx={{ borderRadius: "4px 4px 0 0"
                                }}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom
                                sx={{height: "100%",
                                    fontFamily: "'Patrick Hand', cursive",
                                    color: "#008000" }}
                                >
                                    Nuestro Objetivo
                                </Typography>
                                <Typography variant="body2" 
                                sx={{height: "100%",
                                    fontFamily: "'Patrick Hand', cursive",
                                    color: "#008000" }}
                                >
                                    Nuestro principal objetivo es crear un espacio acogedor donde puedas disfrutar de
                                    sabores auténticos, como los que siempre has amado. Desde un casado bien cargado
                                    hasta el típico gallo pinto, nuestras recetas se inspiran en la sazón de nuestras
                                    abuelas y en los productos frescos de la región.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default InformationUs;
