import React from 'react';
import { Card, Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const Administradores = () => {
  return (
    <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Administradores y Clientes
      </Typography>
      <Typography variant="h6">Administradores</Typography>
      <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Admin 1</TableCell>
              <TableCell>admin@gmail.com</TableCell>
              <TableCell>Editar | Eliminar</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default Administradores;
