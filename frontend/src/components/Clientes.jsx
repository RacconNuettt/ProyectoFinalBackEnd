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
  TableBody,CssBaseline, GlobalStyles, TextField, Dialog, DialogTitle, DialogContent, Grid, Button
} from '@mui/material';
import { getAllClients } from '../services/client'; // Servicio para obtener clientes
import { getClientById } from '../services/client';
import { updateClient } from '../services/client';
import { deleteClient } from '../services/client';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newClientName, setNewClientName] = useState('');
  const [newClientEmail, setNewClientEmail] = useState('');
  const [newClientPassword, setNewClientPassword] = useState('');

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        setLoading(true);
        const data = await getAllClients();
        console.log("Datos obtenidos:", data); // Para depuración
        setClientes(data);
      } catch (err) {
        setError(err.message || 'Error al cargar los clientes');
      } finally {
        setLoading(false);
      }
    };

    fetchClientes();
  }, []);
  const fetchClienteById = async () => {
    try {
          const ClienteById = await getClientById(cliente._id); //Posiblemente deba usarse en dentro de otros cruds
          return ClienteById;
        } catch (error) {
            console.error('Error fetching the client id:', error);
            throw error;
          }
      };

  const handleUpdate = async (e) => {
          e.preventDefault();
      
          if (!newClientName && !newClientEmail && !newClientPassword) {
              toast.error("No hay cambios para guardar.");
              return;
          }
      
          try {
      

              const newData = {
                  clientname: newClientName,
                  clientemail: newClientEmail,
                  clientpassword: newClientPassword,
              };
      
              const response = await updateClient(cliente._id, newData);
              if (response) {
                  toast.success("Datos actualizados exitosamente.");
              } else {
                  toast.error("Respuesta inesperada del servidor.");
              }
          } catch (error) {
              console.error("Error al actualizar datos:", error);
              toast.error("Error al conectar con el servidor.");
          }
      };

      const handleDelete = async (e) => {
        e.preventDefault();
    
        try {
            const confirmDelete = window.confirm('Are you sure you want to delete your account?');
            if (!confirmDelete) {
                return;
            }
    
            setLoading(true);
    
            const response = await deleteClient(cliente._id);
            console.log('Client deleted successfully:', response);
        } catch (error) {
            console.error('Error deleting the client:', error);
            alert('Failed to delete the client. Please try again.');
        } finally {
            setLoading(false);
        }
    };

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
                <TableCell>Contraseña</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clientes.length > 0 ? (
                clientes.map((cliente) => (
                  <TableRow key={cliente._id}>
                    <TableCell>{cliente.clientname}</TableCell>
                    <TableCell>{cliente.clientemail}</TableCell>
                    <TableCell>*****</TableCell> {/* Contraseña en asteriscos */}
                    <TableCell>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        style={{ marginRight: '8px' }}
                      >
                        Editar
                      </Button>
                      <Button 
                        variant="contained" 
                        color="secondary" 
                      >
                        Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
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
