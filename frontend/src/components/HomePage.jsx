import React from "react";
import { jwtDecode } from "jwt-decode";
import { Box, Typography } from "@mui/material";
import logo from "../assets/logo.png";

const HomePage = () => {
    const codedToken  = sessionStorage.getItem("token");
    const decodedToken = jwtDecode(codedToken);
    const peru = decodedToken.payload.clientname
    console.log(peru)
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
            {/* Welcome Message */}
            <Typography
                variant="h1"
                sx={{
                    fontFamily: "'Patrick Hand', cursive",
                    fontSize: { xs: "2.5rem", sm: "4rem" },
                    fontWeight: "bold",
                    marginBottom: 4,
                }}
            >
                BIENVENIDO/A
            </Typography>

            {/* Logo Section */}
            <Box
                sx={{
                    fontFamily: "'Patrick Hand', cursive",
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
                        borderRadius: "50%",
                    }}
                />
            </Box>
        </Box>
    );
};

export default HomePage;
