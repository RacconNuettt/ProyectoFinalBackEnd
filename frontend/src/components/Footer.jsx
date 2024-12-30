import React, { useState } from "react";
import {Grid2, Box, Container, Typography, Link, IconButton, Collapse, List, ListItem } from "@mui/material";

import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Footer = () => {
  const [toggleInfo, setToggleInfo] = useState(false);
  const [toggleLinks, setToggleLinks] = useState(false);
  const [toggleSocial, setToggleSocial] = useState(false);

  const Section = ({ title, toggle, setToggle, children }) => (
    <Grid2 item xs={12} md={4} sx={{ marginBottom: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        onClick={() => setToggle(!toggle)}
        sx={{ cursor: { xs: "pointer", md: "default" } }}
      >
        <Typography variant="h6" gutterBottom sx={{ fontFamily: "'Patrick Hand', cursive" }}>
          {title}
        </Typography>
        <IconButton size="small" sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}>
          <ExpandMoreIcon />
        </IconButton>
      </Box>
      <Collapse in={toggle || window.innerWidth >= 960}>{children}</Collapse>
    </Grid2>
  );

  return (
    <Box component="footer" sx={{ backgroundColor: "#212529", color: "#fff", py: 1 }}>
      <Container>
        <Grid2 container spacing={10}>
          {/* Información */}
          <Section title="Información" toggle={toggleInfo} setToggle={setToggleInfo}>
            <List sx={{ padding: 0 }}>
              <ListItem>
                <Typography variant="body2" sx={{ fontFamily: "'Patrick Hand', cursive" }}>
                  Si quieres saber más de nosotros, comunícate por nuestras redes sociales.
                </Typography>
              </ListItem>
            </List>
          </Section>

          {/* Navegación */}
          <Section title="Navegación" toggle={toggleLinks} setToggle={setToggleLinks}>
            <List sx={{ padding: 0 }}>
              {[
                { text: "Sobre Nosotros", link: "/AboutUs" },
                { text: "Contacto", link: "/Contacto" },
                { text: "Menú", link: "/Menu" },
                { text: "Cuenta", link: "/User" },
              ].map((item, index) => (
                <ListItem key={index} sx={{ paddingY: 0.5 }}>
                  <Link href={item.link} color="inherit" underline="hover" sx={{ fontFamily: "'Patrick Hand', cursive" }}>
                    {item.text}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Section>

          {/* Redes Sociales */}
          <Section title="Conecta con nosotros" toggle={toggleSocial} setToggle={setToggleSocial}>
            <List sx={{ padding: 0 }}>
              {[
                { icon: <FaWhatsapp size={20} color="#25D366" />, text: "WhatsApp", link: "https://wa.me/+50683399812" },
                { icon: <FaInstagram size={20} color="#E4405F" />, text: "Instagram", link: "https://instagram.com/daniel_gonzalez_fuentes" },
                { icon: <FaPhoneAlt size={20} color="#0077B5" />, text: "Teléfono", link: "tel:71816948" },
                { icon: <FaMapMarkerAlt size={20} color="#EA4335" />, text: "Dirección", link: "https://www.google.com/maps" },
              ].map((item, index) => (
                <ListItem key={index} sx={{ paddingY: 0.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                  {item.icon}
                  <Link href={item.link} target="_blank" color="inherit" underline="hover" sx={{ fontFamily: "'Nerko One', cursive" }}>
                    {item.text}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Section>
        </Grid2>

        <Box textAlign="center" mt={6}>
          <Typography variant="body2" sx={{ fontFamily: "'Patrick Hand', cursive" }}>
            &copy; {new Date().getFullYear()} Soda El Alamo. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
