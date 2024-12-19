import {
  Select,
  InputLabel,
  FormControl,
  Card,
  Typography,
  TextField,
  Button,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  MenuItem,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { getDishCategory } from "../services/Dishcategory";
import { getAllTypeDish } from "../services/typeDish";
import { postDish, getDish } from "../services/Dish";

const Almacen = () => {
  const [formData, setFormData] = useState({
    dishName: "",
    dishDescription: "",
    dishPrice: "",
    image: null, // cambio de imageUrl a image
    dishCategory: "",
    typeDish: "",
  });
  const [dishes, setDishes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [typeDishes, setTypeDishes] = useState([]);

  useEffect(() => {
    fetchCategoryDish();
    fetchTypeDishes();
    fetchDishes();
  }, []);

  const fetchCategoryDish = async () => {
    try {
      const dishCategories = await getDishCategory();
      setCategories(dishCategories);
    } catch (error) {
      console.error("Error al cargar las categorías:", error);
    }
  };

  const fetchTypeDishes = async () => {
    try {
      const response = await getAllTypeDish();
      setTypeDishes(response);
    } catch (error) {
      console.error("Error al cargar los tipos de platillos:", error);
    }
  };

  const fetchDishes = async () => {
    try {
      const response = await getDish();
      setDishes(response || []);
    } catch (error) {
      console.error("Error al cargar los platillos:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("dishName", formData.dishName);
    data.append("dishDescription", formData.dishDescription);
    data.append("dishPrice", formData.dishPrice);
    data.append("dishCategory", formData.dishCategory);
    data.append("typeDish", formData.typeDish);
    if (formData.image) {
      data.append("image", formData.image);
    }
  
    console.log(data);
    
    try {
      const response = await postDish(data);
      console.log(response.message);
    } catch (error) {
      console.error("Error al agregar el platillo:", error.response?.data?.message || error.message);
    }
  };
  

  return (
    <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Agregar Platillos
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nombre del Platillo"
          name="dishName"
          value={formData.dishName}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Descripción"
          name="dishDescription"
          value={formData.dishDescription}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Precio"
          name="dishPrice"
          type="number"
          value={formData.dishPrice}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Categoría</InputLabel>
          <Select
            name="dishCategory"
            value={formData.dishCategory}
            onChange={handleInputChange}
          >
            {categories.map((category) => (
              <MenuItem key={category._id} value={category._id}>
                {category.dishCategoryname}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Tipo de Platillo</InputLabel>
          <Select
            name="typeDish"
            value={formData.typeDish}
            onChange={handleInputChange}
          >
            {typeDishes.map((typeDish) => (
              <MenuItem key={typeDish._id} value={typeDish._id}>
                {typeDish.typeName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ marginBottom: "16px" }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Agregar Platillo
        </Button>
      </form>
      <TableContainer component={Paper} sx={{ mt: 3, boxShadow: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell>Imagen</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Categoría</TableCell>
              <TableCell>Tipo de Platillo</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dishes.length > 0 ? (
              dishes.map((dish) => (
                <TableRow key={dish._id}>
                  <TableCell>
                    <img
                      src={dish.image}
                      alt={dish.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  </TableCell>
                  <TableCell>{dish.name}</TableCell>
                  <TableCell>{dish.description}</TableCell>
                  <TableCell>{dish.price}</TableCell>
                  <TableCell>{dish.dishCategory?.dishCategoryname || "Sin categoría"}</TableCell>
                  <TableCell>{dish.typeDish?.typeName || "Sin tipo"}</TableCell>
                  <TableCell>
                    <Button color="primary">Editar</Button>
                    <Button color="secondary">Eliminar</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No hay platillos disponibles.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default Almacen;
