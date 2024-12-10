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
  MenuItem 
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { getDishCategory } from '../services/Dishcategory';

const Almacen = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState(null);
  const [platillos, setPlatillos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState({ platillos: [] });

  useEffect(() => {
    fetchCategoryDish();
  }, []);

  const fetchCategoryDish = async () => {
    try {
      const dishCategories = await getDishCategory();
      setCategories({ platillos: dishCategories });
    } catch (error) {
      console.error('Error al cargar las categorías');
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagen(URL.createObjectURL(file));
    }
  };

  return (
    <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Agregar Platillos
      </Typography>
      <TextField
        fullWidth
        label="Nombre del Platillo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Precio"
        type="number"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        sx={{ mb: 2 }}
      />
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Categoria</InputLabel>
        <Select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.platillos.map((category) => (
            <MenuItem key={category._id} value={category._id}>
              {category.dishCategoryname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ marginBottom: '16px' }}
      />
      {imagen && (
        <img
          src={imagen}
          alt="Previsualización"
          style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: '16px' }}
        />
      )}
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Agregar Platillo
      </Button>
      <TableContainer component={Paper} sx={{ mt: 3, boxShadow: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Imagen</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Categoría</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {platillos.map((platillo) => (
              <TableRow key={platillo.id}>
                <TableCell>
                  <img
                    src={platillo.imagen}
                    alt={platillo.nombre}
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                </TableCell>
                <TableCell>{platillo.nombre}</TableCell>
                <TableCell>{platillo.descripcion}</TableCell>
                <TableCell>{platillo.precio}</TableCell>
                <TableCell>{platillo.categoria}</TableCell>
                <TableCell>Editar | Eliminar</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default Almacen;
