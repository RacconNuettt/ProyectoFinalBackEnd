import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem, TextField, Button, InputAdornment } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#008000" }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
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
                <Box sx={{ display: "flex", alignItems: "center" }}>
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
                    onClick={handleMenuOpen}
                    sx={{ ml: 2, display: { sm: "none" }, color: "#008000" }}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    keepMounted
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={() => (window.location.href = "/home")}>Inicio</MenuItem>
                    <MenuItem onClick={() => (window.location.href = "/AboutUs")}>Quienes Somos</MenuItem>
                    <MenuItem onClick={() => (window.location.href = "/Contacto")}>Contáctenos</MenuItem>
                    <MenuItem onClick={() => (window.location.href = "/Menu")}>Menú</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
