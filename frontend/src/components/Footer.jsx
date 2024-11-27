import React, { useState } from "react";
import { Box, Container, Grid, Typography, Link, IconButton, Collapse } from "@mui/material";
import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Footer = () => {
  const [toggleInfo, setToggleInfo] = useState(false);
  const [toggleLinks, setToggleLinks] = useState(false);
  const [toggleSocial, setToggleSocial] = useState(false);

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#212529",
        color: "#fff",
        py: 4,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Información */}
          <Grid item xs={12} md={4}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              onClick={() => setToggleInfo(!toggleInfo)}
              sx={{ cursor: { xs: "pointer", md: "default" } }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontFamily: "'Patrick Hand', cursive",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Información
              </Typography>
              <IconButton
                size="small"
                sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
              >
                <ExpandMoreIcon />
              </IconButton>
            </Box>
            <Collapse in={toggleInfo || window.innerWidth >= 960}>
              <Typography variant="body2" sx={{ fontFamily: "'Patrick Hand', cursive" }}>
                Si quieres saber más de nosotros, o de nuestros servicios, por favor comunícate por medio de nuestras redes sociales.
              </Typography>
            </Collapse>
          </Grid>

          {/* Enlaces */}
          <Grid item xs={12} md={4}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              onClick={() => setToggleLinks(!toggleLinks)}
              sx={{ cursor: { xs: "pointer", md: "default" } }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontFamily: "'Patrick Hand', cursive",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Enlaces
              </Typography>
              <IconButton
                size="small"
                sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
              >
                <ExpandMoreIcon />
              </IconButton>
            </Box>
            <Collapse in={toggleLinks || window.innerWidth >= 960}>
              <Box component="ul" sx={{ listStyleType: "none", padding: 0 }}>
                <Box component="li">
                  <Link
                    href="/AboutUs"
                    color="inherit"
                    underline="hover"
                    sx={{ fontFamily: "'Patrick Hand', cursive" }}
                  >
                    Sobre Nosotros
                  </Link>
                </Box>
                <Box component="li">
                  <Link
                    href="#"
                    color="inherit"
                    underline="hover"
                    sx={{ fontFamily: "'Patrick Hand', cursive" }}
                  >
                    Contacto
                  </Link>
                </Box>
                <Box component="li">
                  <Link
                    href="#"
                    color="inherit"
                    underline="hover"
                    sx={{ fontFamily: "'Patrick Hand', cursive" }}
                  >
                    Menú
                  </Link>
                </Box>
              </Box>
            </Collapse>
          </Grid>

          {/* Redes Sociales */}
          <Grid item xs={12} md={4}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              onClick={() => setToggleSocial(!toggleSocial)}
              sx={{ cursor: { xs: "pointer", md: "default" } }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontFamily: "'Patrick Hand', cursive",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Redes Sociales
              </Typography>
              <IconButton
                size="small"
                sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
              >
                <ExpandMoreIcon />
              </IconButton>
            </Box>
            <Collapse in={toggleSocial || window.innerWidth >= 960}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Link
                    href="https://wa.me/+50683399812"
                    target="_blank"
                    color="success"
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontFamily: "'Nerko One', cursive",
                    }}
                  >
                    <FaWhatsapp size={24} />
                    <Typography variant="body2">WhatsApp</Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="https://instagram.com/daniel_gonzalez_fuentes"
                    target="_blank"
                    color="warning"
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontFamily: "'Nerko One', cursive",
                    }}
                  >
                    <FaInstagram size={24} />
                    <Typography variant="body2">Instagram</Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="tel:71816948"
                    color="primary"
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontFamily: "'Nerko One', cursive",
                    }}
                  >
                    <FaPhoneAlt size={24} />
                    <Typography variant="body2">Teléfono</Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="https://www.google.com/maps/@9.9948717,-84.6590483,16.76z?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    color="error"
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontFamily: "'Nerko One', cursive",
                    }}
                  >
                    <FaMapMarkerAlt size={24} />
                    <Typography variant="body2">Dirección</Typography>
                  </Link>
                </Grid>
              </Grid>
            </Collapse>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box textAlign="center" mt={4}>
          <Typography
            variant="body2"
            sx={{ fontFamily: "'Patrick Hand', cursive" }}
          >
            &copy; {new Date().getFullYear()} Soda El Alamo. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
