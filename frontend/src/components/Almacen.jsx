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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDishCategory } from "../services/Dishcategory";
import { getAllTypeDish } from "../services/typeDish";
import { postDish, getDish } from "../services/Dish";

const Almacen = () => {
  const [formData, setFormData] = useState({
    dishName: "",
    dishDescription: "",
    dishPrice: "",
    image: null,
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
      toast.error("Error al cargar las categorías.");
      console.error("Error al cargar las categorías:", error);
    }
  };

  const fetchTypeDishes = async () => {
    try {
      const response = await getAllTypeDish();
      setTypeDishes(response);
    } catch (error) {
      toast.error("Error al cargar los tipos de platillos.");
      console.error("Error al cargar los tipos de platillos:", error);
    }
  };

  const fetchDishes = async () => {
    try {
      const response = await getDish();
      setDishes(response || []);
    } catch (error) {
      toast.error("Error al cargar los platillos.");
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

  const validateForm = () => {
    const { dishName, dishDescription, dishPrice, dishCategory, typeDish, image } = formData;

    if (!dishName) {
      toast.error("El nombre del platillo es obligatorio.");
      return false;
    }
    if (!dishDescription) {
      toast.error("La descripción del platillo es obligatoria.");
      return false;
    }
    if (!dishPrice || dishPrice <= 0) {
      toast.error("El precio del platillo debe ser mayor a 0.");
      return false;
    }
    if (!dishCategory) {
      toast.error("Selecciona una categoría para el platillo.");
      return false;
    }
    if (!typeDish) {
      toast.error("Selecciona un tipo de platillo.");
      return false;
    }
    if (!image) {
      toast.error("Debes cargar una imagen para el platillo.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const data = new FormData();
    data.append("dishName", formData.dishName);
    data.append("dishDescription", formData.dishDescription);
    data.append("dishPrice", formData.dishPrice);
    data.append("dishCategory", formData.dishCategory);
    data.append("typeDish", formData.typeDish);
    data.append("image", formData.image);

    try {
      await postDish(data);
      toast.success("Platillo agregado exitosamente.");
      fetchDishes(); // Recargar los platillos después de agregar uno nuevo
      setFormData({
        dishName: "",
        dishDescription: "",
        dishPrice: "",
        image: null,
        dishCategory: "",
        typeDish: "",
      }); // Reiniciar el formulario
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Error al agregar el platillo."
      );
      console.error("Error al agregar el platillo:", error);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
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
                <TableCell>Nombre</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Precio</TableCell>
                <TableCell>Categoría</TableCell>
                <TableCell>Tipo de Platillo</TableCell>
                <TableCell>Imagen</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dishes.length > 0 ? (
                dishes.map((dish) => (
                  <TableRow key={dish._id}>
                    <TableCell>{dish.name}</TableCell>
                    <TableCell>{dish.description}</TableCell>
                    <TableCell>{dish.price}</TableCell>
                    <TableCell>
                      {dish.dishCategory?.dishCategoryname || "Sin categoría"}
                    </TableCell>
                    <TableCell>
                      {dish.typeDish?.typeName || "Sin tipo"}
                    </TableCell>
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
    </>
  );
};

export default Almacen;
