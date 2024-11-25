import { useState } from "react";
import { Button, ButtonGroup, FormControlLabel, Checkbox, Typography, Box, Container, List, ListItem, ListItemText } from "@mui/material";

const OrdenPersonalizada = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("bebidas");

    const items = {
        bebidas: ["Cerveza", "Vino", "Refresco"],
        comida: ["Pizza", "Hamburguesa", "Pasta"],
        ensaladas: ["Cesar", "Fruta", "Mediterránea"],
    };

    const handleCheckboxChange = (item) => {
        setSelectedItems((prevItems) =>
            prevItems.includes(item)
                ? prevItems.filter((i) => i !== item)
                : [...prevItems, item]
        );
    };

    return (
        <Box sx={{ fontFamily: "'Patrick Hand', cursive", color: "#008000", padding: 2 }}>
            <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 3 }}>
                Orden Personalizada
            </Typography>

            <Container sx={{ textAlign: "center", marginBottom: 3 }}>
                <ButtonGroup variant="outlined">
                    <Button
                        onClick={() => setCurrentCategory("bebidas")}
                        sx={{
                            color: "#fff",
                            fontFamily: "'Patrick Hand', cursive",
                            backgroundColor: "#008000",
                            "&:hover": { backgroundColor: "#014701" },
                        }}
                    >
                        Bebidas
                    </Button>
                    <Button
                        onClick={() => setCurrentCategory("comida")}
                        sx={{
                            color: "#fff",
                            fontFamily: "'Patrick Hand', cursive",
                            backgroundColor: "#008000",
                            "&:hover": { backgroundColor: "#014701" },
                        }}
                    >
                        Comida
                    </Button>
                    <Button
                        onClick={() => setCurrentCategory("ensaladas")}
                        sx={{
                            color: "#fff",
                            fontFamily: "'Patrick Hand', cursive",
                            backgroundColor: "#008000",
                            "&:hover": { backgroundColor: "#014701" },
                        }}
                    >
                        Ensaladas
                    </Button>
                </ButtonGroup>
            </Container>

            <Box sx={{ marginBottom: 3, padding: 2 }}>
                {items[currentCategory].map((item) => (
                    <FormControlLabel
                        key={item}
                        control={
                            <Checkbox
                                sx={{
                                    color: "#008000",
                                    "&.Mui-checked": { color: "#014701" },
                                }}
                                onChange={() => handleCheckboxChange(item)}
                            />
                        }
                        label={<Typography sx={{ fontFamily: "'Patrick Hand', cursive", color: "#008000" }}>{item}</Typography>}
                    />
                ))}
            </Box>

            <Container sx={{ textAlign: "center", marginTop: 3 }}>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                    Tu Orden
                </Typography>
                <List sx={{ border: "1px solid #008000", borderRadius: 2, padding: 1 }}>
                    {selectedItems.length > 0 ? (
                        selectedItems.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText
                                    primary={item}
                                    sx={{ fontFamily: "'Patrick Hand', cursive", color: "#008000" }}
                                />
                            </ListItem>
                        ))
                    ) : (
                        <Typography variant="body1" sx={{ fontFamily: "'Patrick Hand', cursive", color: "#008000" }}>
                            No hay elementos seleccionados.
                        </Typography>
                    )}
                </List>
            </Container>
        </Box>
    );
};

export default OrdenPersonalizada;
