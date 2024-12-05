import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem, TextField, Button, InputAdornment } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#008000" }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, alignItems: "center" }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ cursor: "pointer", mr: 2, fontFamily: "'Patrick Hand', cursive", color: "#008000" }}
                        onClick={() => (window.location.href = "/home")}
                    >
                        Inicio
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ cursor: "pointer", mr: 2, fontFamily: "'Patrick Hand', cursive", color: "#008000" }}
                        onClick={() => (window.location.href = "/AboutUs")}
                    >
                        Quienes Somos
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ cursor: "pointer", mr: 2, fontFamily: "'Patrick Hand', cursive", color: "#008000" }}
                        onClick={() => (window.location.href = "/Contacto")}
                    >
                        Contáctenos
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ cursor: "pointer", mr: 2, fontFamily: "'Patrick Hand', cursive", color: "#008000" }}
                        onClick={() => (window.location.href = "/Menu")}
                    >
                        Menú
                    </Typography>
                </Box>
                {/* Ícono de perfil y Búsqueda */}
                <Box sx={{ display: "flex", alignItems: "center", flexGrow: { xs: 1, md: 0 } }}>
                    <IconButton
                        onClick={() => (window.location.href = "/User")}
                        sx={{ color: "#008000", mr: 2 }}
                    >
                        <AccountCircleIcon />
                    </IconButton>
                    <TextField
                        variant="outlined"
                        placeholder="Search"
                        size="small"
                        sx={{
                            backgroundColor: "#fff",
                            borderRadius: 1,
                            mr: 2,
                            width: { xs: "100px", sm: "200px" },
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            color: "#fff",
                            fontFamily: "'Patrick Hand', cursive",
                            backgroundColor: "#008000",
                            "&:hover": { backgroundColor: "#014701" },
                        }}
                    >
                        Search
                    </Button>
                </Box>
                <IconButton
                    edge="end"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={toggleMobileMenu}
                    sx={{ display: { md: "none" }, ml: 2, color: "#008000" }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            {/* Menú desplegable para móviles */}
            {mobileMenuOpen && (
                <Box
                    sx={{
                        display: { xs: "flex", md: "none" },
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "#fff",
                        borderTop: "1px solid #ddd",
                    }}
                >
                    <MenuItem onClick={() => (window.location.href = "/home")}>Inicio</MenuItem>
                    <MenuItem onClick={() => (window.location.href = "/AboutUs")}>Quienes Somos</MenuItem>
                    <MenuItem onClick={() => (window.location.href = "/Contacto")}>Contáctenos</MenuItem>
                    <MenuItem onClick={() => (window.location.href = "/Menu")}>Menú</MenuItem>
                    <MenuItem onClick={() => (window.location.href = "/User")}>
                        <AccountCircleIcon sx={{ mr: 1 }} /> Perfil
                    </MenuItem>
                </Box>
            )}
        </AppBar>
    );
};

export default Header;
