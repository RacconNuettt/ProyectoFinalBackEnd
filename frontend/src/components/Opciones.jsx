import React, { useState, useEffect } from 'react';
import { Card, Typography, Tabs, Tab, Box, TextField, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';  // Asegúrate de importar el ToastContainer
import 'react-toastify/dist/ReactToastify.css';
import { postDishCategory, getDishCategory, deleteDishCategory } from '../services/Dishcategory';
import { postDrinkCategory, getDrinkCategory, deleteDrinkCategory } from '../services/Drinkcategory';

const Opciones = () => {
  const [tab, setTab] = useState(0);
  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoryType, setCategoryType] = useState('Platillo'); 
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newDrinkName, setNewDrinkName] = useState('');
  const [newDrinkPrice, setNewDrinkPrice] = useState('');

  // Cargar las categorías al cambiar de pestaña
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const dishCategories = await getDishCategory();
        const drinkCategories = await getDrinkCategory();
        setCategories({
          platillos: dishCategories,
          bebidas: drinkCategories,
        });
      } catch (error) {
        console.error('Error fetching categories:', error);
        toast.error('Error al obtener categorías.');
      }
    };
    fetchCategories();
  }, []);

  // Crear categoría
  const handleCreateCategory = async () => {
    if (newCategory.trim()) {
      try {
        const categoryData = { name: newCategory }; 
        if (categoryType === 'Platillo') {
          await postDishCategory({ dishCategoryname: newCategory });
        } else {
          await postDrinkCategory({ drinkCategoryname: newCategory });
        }
        setNewCategory('');
        toast.success('Categoría creada correctamente.');
        fetchCategories();
      } catch (error) {
        console.error('Error creating category:', error);
        toast.error('Error al crear la categoría.');
      }
    }
  };

  // Eliminar categoría
  const handleDeleteCategory = async (id) => {
    try {
      if (categoryType === 'Platillo') {
        await deleteDishCategory(id);
      } else {
        await deleteDrinkCategory(id);
      }
      toast.success('Categoría eliminada correctamente.');
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
      toast.error('Error al eliminar la categoría.');
    }
  };

  // Crear bebida
  const handleCreateDrink = async () => {
    if (newDrinkName.trim() && newDrinkPrice > 0 && selectedCategory) {
      try {
        const drinkData = {
          name: newDrinkName,
          price: newDrinkPrice,
          category: selectedCategory,
        };
        // Aquí deberías enviar la bebida a la API (reemplazar con tu lógica)
        toast.success('Bebida creada correctamente.');
        setNewDrinkName('');
        setNewDrinkPrice('');
        setSelectedCategory('');
      } catch (error) {
        console.error('Error creating drink:', error);
        toast.error('Error al crear la bebida.');
      }
    } else {
      toast.error('Por favor complete todos los campos.');
    }
  };

  // Función para recargar las categorías
  const fetchCategories = async () => {
    try {
      const dishCategories = await getDishCategory();
      const drinkCategories = await getDrinkCategory();
      setCategories({
        platillos: dishCategories,
        bebidas: drinkCategories,
      });
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast.error('Error al obtener categorías.');
    }
  };

  return (
    <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Opciones
      </Typography>
      <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} sx={{ mb: 2 }}>
        <Tab label="General" />
        <Tab label="Categorías" />
        <Tab label="Bebidas" />
      </Tabs>
      <Box sx={{ p: 3 }}>
        {tab === 0 && (
          <>
            <Typography variant="h6" gutterBottom>
              Categorías Generales
            </Typography>
            <Typography variant="h6" gutterBottom>
              Platillos
            </Typography>
            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {categories.platillos && categories.platillos.map((category) => (
                    <TableRow key={category._id}>
                      <TableCell>{category.dishCategoryname}</TableCell>  {/* Asegúrate de acceder al nombre correcto */}
                      <TableCell>
                        <Button variant="contained" color="error" onClick={() => handleDeleteCategory(category._id)}>
                          Eliminar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Bebidas
            </Typography>
            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {categories.bebidas && categories.bebidas.map((category) => (
                    <TableRow key={category._id}>
                      <TableCell>{category.drinkCategoryname}</TableCell>
                      <TableCell>
                        <Button variant="contained" color="error" onClick={() => handleDeleteCategory(category._id)}>
                          Eliminar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}

        {tab === 1 && (
          <>
            <Typography variant="h6" gutterBottom>
              Crear Categoría
            </Typography>
            <TextField
              fullWidth
              label="Nombre Categoría"
              sx={{ mb: 2 }}
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <Button variant="contained" onClick={handleCreateCategory}>
              Agregar
            </Button>
            <FormControl fullWidth sx={{ mt: 3 }}>
              <InputLabel>Tipo de Categoría</InputLabel>
              <Select
                value={categoryType}
                label="Tipo de Categoría"
                onChange={(e) => setCategoryType(e.target.value)}
              >
                <MenuItem value="Platillo">Platillo</MenuItem>
                <MenuItem value="Bebida">Bebida</MenuItem>
              </Select>
            </FormControl>
          </>
        )}

        {tab === 2 && (
          <>
            <Typography variant="h6" gutterBottom>
              Crear Bebida
            </Typography>
            <TextField
              fullWidth
              label="Nombre Bebida"
              sx={{ mb: 2 }}
              value={newDrinkName}
              onChange={(e) => setNewDrinkName(e.target.value)}
            />
            <TextField
              fullWidth
              label="Precio"
              type="number"
              sx={{ mb: 2 }}
              value={newDrinkPrice}
              onChange={(e) => setNewDrinkPrice(e.target.value)}
            />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Categoría</InputLabel>
              <Select
                value={selectedCategory}
                label="Categoría"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.bebidas && categories.bebidas.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.drinkCategoryname}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="contained" onClick={handleCreateDrink}>
              Crear Bebida
            </Button>
          </>
        )}
      </Box>
      <ToastContainer />
    </Card>
  );
};

export default Opciones;
