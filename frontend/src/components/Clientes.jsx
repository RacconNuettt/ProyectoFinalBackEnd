import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
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
  Box,
  Button,
  TextField,
  Modal,
} from '@mui/material';
import { getAllClients, getClientById, updateClient, deleteClient, registerClient } from '../services/client';
import { toast } from 'react-toastify';
import { Edit, Delete, Add } from '@mui/icons-material'; // Íconos de Material UI

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newClientName, setNewClientName] = useState('');
  const [newClientEmail, setNewClientEmail] = useState('');
  const [newClientPassword, setNewClientPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        setLoading(true);
        const data = await getAllClients();
        setClientes(data);
      } catch (err) {
        setError(err.message || 'Error al cargar los clientes');
      } finally {
        setLoading(false);
      }
    };

    fetchClientes();
  }, []);

  const handleUpdate = async (clientData) => {
    try {
      if (!newClientName && !newClientEmail && !newClientPassword) {
        toast.error("No hay cambios para guardar.");
        return;
      }

      const newData = {
        clientname: newClientName,
        clientemail: newClientEmail,
        clientpassword: newClientPassword,
      };

      const response = await updateClient(clientData._id, newData);
      if (response) {
        toast.success("Datos actualizados exitosamente.");
        setClientes((prev) =>
          prev.map((client) =>
            client._id === clientData._id ? { ...client, ...newData } : client
          )
        );
      } else {
        toast.error("Respuesta inesperada del servidor.");
      }
    } catch (error) {
      console.error("Error al actualizar datos:", error);
      toast.error("Error al conectar con el servidor.");
    }
  };

  const handleDelete = async (cliente) => {
    try {
      const codedToken = sessionStorage.getItem("token");

      if (!codedToken) {
        throw new Error("Token not found in sessionStorage");
      }

      const decodedToken = jwtDecode(codedToken);
      if (!decodedToken || !decodedToken.id) {
        throw new Error("Token inválido o no contiene un ID");
      }

      setLoading(true);
      const response = await deleteClient(cliente._id);
      console.log('Client deleted successfully:', response);
      setClientes((prev) => prev.filter((c) => c._id !== cliente._id));
    } catch (error) {
      console.error('Error deleting the client:', error);
      alert('Failed to delete the client. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async () => {
    try {
      if (!newClientName || !newClientEmail || !newClientPassword) {
        toast.error("Por favor, completa todos los campos.");
        return;
      }

      const newData = {
        clientname: newClientName,
        clientemail: newClientEmail,
        clientpassword: newClientPassword,
      };

      const response = await registerClient(newData);
      if (response) {
        toast.success("Cliente agregado exitosamente.");
        const updatedClientes = await getAllClients();
        setClientes(updatedClientes);
        handleClose();
      } else {
        toast.error("Respuesta inesperada del servidor.");
      }
    } catch (error) {
      console.error("Error al agregar el cliente:", error);
      toast.error("Error al conectar con el servidor.");
    }
  };

  const handleClose = () => {
    setOpen(false);
    setOpenEdit(false);
    setOpenAdd(false);
    setSelectedClient(null);
    setNewClientName('');
    setNewClientEmail('');
    setNewClientPassword('');
  };

  const handleOpenEdit = (cliente) => {
    setSelectedClient(cliente);
    setNewClientName(cliente.clientname);
    setNewClientEmail(cliente.clientemail);
    setNewClientPassword('');
    setOpenEdit(true);
  };

  const handleOpen = (cliente) => {
    setSelectedClient(cliente);
    setOpen(true);
  };

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  return (
    <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Clientes
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6">Lista de clientes registrados</Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleOpenAdd}
          startIcon={<Add />} // Ícono de "+" 
        >
          Añadir Cliente
        </Button>
      </Box>

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
                        onClick={() => handleOpenEdit(cliente)}
                      >
                        <Edit /> {/* Ícono de lápiz */}
                      </Button>
                      <Button 
                        variant="contained" 
                        color="secondary"
                        onClick={() => handleOpen(cliente)} 
                      >
                        <Delete /> {/* Ícono de basurero */}
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

      {/* Modal de Confirmación de Eliminación */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <Typography variant="h6">
            ¿Quieres eliminar este usuario?
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" color="secondary" onClick={() => handleDelete(selectedClient)}>
              Borrar
            </Button>
            <Button variant="contained" onClick={handleClose}>
              No
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Modal de Edición de Cliente */}
      <Modal open={openEdit} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <Typography variant="h6">
            Editar Cliente
          </Typography>
          <Box component="form" onSubmit={(e) => { e.preventDefault(); handleUpdate(selectedClient); handleClose(); }} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Nombre"
              value={newClientName}
              onChange={(e) => setNewClientName(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              value={newClientEmail}
              onChange={(e) => setNewClientEmail(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              value={newClientPassword}
              onChange={(e) => setNewClientPassword(e.target.value)}
              margin="normal"
            />
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="contained" color="primary" type="submit">
                Editar
              </Button>
              <Button variant="contained" onClick={handleClose}>
                Cancelar
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      {/* Modal para Agregar Cliente */}
      <Modal open={openAdd} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <Typography variant="h6">
            Añadir Cliente
          </Typography>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Nombre"
              value={newClientName}
              onChange={(e) => setNewClientName(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              value={newClientEmail}
              onChange={(e) => setNewClientEmail(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              value={newClientPassword}
              onChange={(e) => setNewClientPassword(e.target.value)}
              margin="normal"
            />
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="contained" color="primary" onClick={handleUpload}>
                Crear Cliente
              </Button>
              <Button variant="contained" onClick={handleClose}>
                Cancelar
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Card>
  );
};

export default Clientes;
