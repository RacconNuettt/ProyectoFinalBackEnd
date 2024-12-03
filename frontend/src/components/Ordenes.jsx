import React from 'react';
import { Card, Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const Ordenes = () => {
  return (
    <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Historial de Órdenes
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 3, boxShadow: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>ID Orden</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>#001</TableCell>
              <TableCell>Juan Pérez</TableCell>
              <TableCell>$250</TableCell>
              <TableCell>Pendiente</TableCell>
              <TableCell>Ver Detalles</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default Ordenes;
