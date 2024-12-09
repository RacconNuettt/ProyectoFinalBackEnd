import { Card, Typography, TextField, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React, {useState} from 'react'

const Almacen = () => {
  return (
    <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Agregar Platillos
      </Typography>
      <TextField fullWidth label="Nombre del Platillo" sx={{ mb: 2 }} />
      <TextField fullWidth label="Descripción" sx={{ mb: 2 }} />
      <TextField fullWidth label="Precio" type="number" sx={{ mb: 2 }} />
      <TextField fullWidth label="Categoría" sx={{ mb: 2 }} />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Agregar Platillo
      </Button>
      <TableContainer component={Paper} sx={{ mt: 3, boxShadow: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Categoría</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default Almacen;
