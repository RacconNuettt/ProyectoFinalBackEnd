import React, { useEffect, useState } from 'react';
import {
  Card,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { getClient } from '../services/client'; 

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        setLoading(true);
        const data = await getClient();
        setClientes(data);
      } catch (err) {
        setError(err.message || 'Error al cargar los clientes');
      } finally {
        setLoading(false);
      }
    };

    fetchClientes();
  }, []);

  return (
    <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Clientes
      </Typography>
      <Typography variant="h6">Lista de clientes registrados</Typography>

      {loading ? (
        <Typography sx={{ mt: 2 }}>Cargando...</Typography>
      ) : error ? (
        <Typography sx={{ mt: 2, color: 'red' }}>Error: {error}</Typography>
      ) : (
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
              {clientes.length > 0 ? (
                clientes.map((cliente) => (
                  <TableRow key={cliente.id}>
                    <TableCell>{cliente.name}</TableCell>
                    <TableCell>{cliente.email}</TableCell>
                    <TableCell>Editar | Eliminar</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    No hay clientes registrados.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Card>
  );
};

export default Clientes;
