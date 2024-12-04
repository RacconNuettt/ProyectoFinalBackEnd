import React, { useState, useEffect } from 'react';
import {
  Card, Typography, Tabs, Tab, Box, TextField, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, MenuItem, Select, FormControl, InputLabel,
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postDishCategory, getDishCategory, deleteDishCategory } from '../services/Dishcategory';
import { postDrinkCategory, getDrinkCategory, deleteDrinkCategory } from '../services/Drinkcategory';
import { postDrink, getDrink, putDrink, deleteDrink } from '../services/Drink';

const Opciones = () => {
  const [tab, setTab] = useState(0);
  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState({ platillos: [], bebidas: [] });
  const [categoryType, setCategoryType] = useState('Platillo');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newDrinkName, setNewDrinkName] = useState('');
  const [newDrinkPrice, setNewDrinkPrice] = useState('');
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchDrinks();
  }, []);

  const fetchCategories = async () => {
    try {
      const dishCategories = await getDishCategory();
      const drinkCategories = await getDrinkCategory();
      setCategories({ platillos: dishCategories, bebidas: drinkCategories });
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast.error('Error al obtener categorías.');
    }
  };

  const fetchDrinks = async () => {
    try {
      const drinks = await getDrink();
      setDrinks(drinks);
    } catch (error) {
      console.error('Error fetching drinks:', error);
      toast.error('Error al obtener bebidas.');
    }
  };

  const handleCreateCategory = async () => {
    if (newCategory.trim()) {
      try {
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

  const handleCreateDrink = async () => {
    if (newDrinkName.trim() && newDrinkPrice > 0 && selectedCategory) {
      try {
        const drinkData = {
          drinkName: newDrinkName,
          drinkPrice: newDrinkPrice,
          drinkCategory: selectedCategory,
        };
        await postDrink(drinkData);
        toast.success('Bebida creada correctamente.');
        setNewDrinkName('');
        setNewDrinkPrice('');
        setSelectedCategory('');
        fetchDrinks();
      } catch (error) {
        console.error('Error creating drink:', error);
        toast.error('Error al crear la bebida.');
      }
    } else {
      toast.error('Por favor complete todos los campos.');
    }
  };

  const handleDeleteDrink = async (id) => {
    try {
      await deleteDrink(id);
      toast.success('Bebida eliminada correctamente.');
      fetchDrinks();
    } catch (error) {
      console.error('Error deleting drink:', error);
      toast.error('Error al eliminar la bebida.');
    }
  };

  const handleEditDrink = async (id) => {
    try {
      await putDrink(id);
      toast.success('Bebida actualizada correctamente.');
      fetchDrinks();
    } catch (error) {
      console.error('Error updating drink:', error);
      toast.error('Error al actualizar la bebida.');
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
              Platillos
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {categories.platillos.map((category) => (
                    <TableRow key={category._id}>
                      <TableCell>{category.dishCategoryname}</TableCell>
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
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {categories.bebidas.map((category) => (
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
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Tipo de Categoría</InputLabel>
              <Select
                value={categoryType}
                onChange={(e) => setCategoryType(e.target.value)}
              >
                <MenuItem value="Platillo">Platillo</MenuItem>
                <MenuItem value="Bebida">Bebida</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" onClick={handleCreateCategory}>
              Agregar
            </Button>
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
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.bebidas.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.drinkCategoryname}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="contained" onClick={handleCreateDrink}>
              Crear Bebida
            </Button>

            <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
              Lista de Bebidas
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Precio</TableCell>
                    <TableCell>Categoría</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {drinks.map((drink) => (
                    <TableRow key={drink._id}>
                      <TableCell>{drink.drinkName}</TableCell>
                      <TableCell>₡{drink.drinkPrice}</TableCell>
                      <TableCell>{drink.drinkCategory?.drinkCategoryname}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ mr: 1 }}
                          onClick={() => handleEditDrink(drink._id)}
                        >
                          Editar
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => handleDeleteDrink(drink._id)}
                        >
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
      </Box>
      <ToastContainer />
    </Card>
  );
};

export default Opciones;
