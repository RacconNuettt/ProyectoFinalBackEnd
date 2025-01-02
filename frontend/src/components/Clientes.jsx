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
  CssBaseline, 
  GlobalStyles, 
  TextField, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  Grid, 
  Button,
  Modal,
  Box,
} from '@mui/material';
import { getAllClients } from '../services/client'; // Servicio para obtener clientes
import { getClientById } from '../services/client';
import { updateClient } from '../services/client';
import { deleteClient } from '../services/client';
import {registerClient} from '../services/client';
import { toast } from 'react-toastify';

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
  // const handleUpdate = async (clientData) => {
  //   try {
  //     if (!newClientName && !newClientEmail && !newClientPassword) {
  //       toast.error("No hay cambios para guardar.");
  //       return;
  //     }
  
  //     const newData = {
  //       clientname: newClientName,
  //       clientemail: newClientEmail,
  //       clientpassword: newClientPassword,
  //     };
  
  //     const response = await updateClient(clientData._id, newData);
  //     if (response) {
  //       toast.success("Datos actualizados exitosamente.");
  //       setClientes((prev) =>
  //         prev.map((client) =>
  //           client._id === clientData._id ? { ...client, ...newData } : client
  //         )
  //       );
  //     } else {
  //       toast.error("Respuesta inesperada del servidor.");
  //     }
  //   } catch (error) {
  //     console.error("Error al actualizar datos:", error);
  //     toast.error("Error al conectar con el servidor.");
  //   }
  // };
  
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


  const handleUpdateConfirm = async (e) => {
    e.preventDefault();
    if (selectedClient) {
      await handleUpdate(selectedClient);
    }
    handleCloseEdit();
  };
      const handleOpenEdit = (cliente) => {
        setSelectedClient(cliente);
        setNewClientName(cliente.clientname);
        setNewClientEmail(cliente.clientemail);
        setNewClientPassword('');
        setOpenEdit(true);
      };
      
      const handleCloseEdit = () => {
        setOpenEdit(false);
        setSelectedClient(null);
        setNewClientName('');
        setNewClientEmail('');
        setNewClientPassword('');
      };
      

    //   const handleDelete = async (cliente) => {
    //     try {
    //                   const codedToken = sessionStorage.getItem("token");
              
    //                   if (!codedToken) {
    //                       throw new Error("Token not found in sessionStorage");
    //                   }
              
    //                   const decodedToken = jwtDecode(codedToken);
    //                   if (!decodedToken || !decodedToken.id) {
    //                     throw new Error("Token inválido o no contiene un ID");
    //                 }
            
    //         setLoading(true);
    
    //         const response = await deleteClient(cliente._id);
    //         console.log('Client deleted successfully:', response);
    //         setClientes((prev) => prev.filter((c) => c._id !== cliente._id));
    //     } catch (error) {
    //         console.error('Error deleting the client:', error);
    //         alert('Failed to delete the client. Please try again.');
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    
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

    const handleDeleteConfirm = () => {
        handleDelete(selectedClient);
        handleClose();
    };
    const handleOpen = (cliente) => {
      setSelectedClient(cliente);
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      setSelectedClient(null);
    };
    const handleUpload = async () => {
      try {
        if (!newClientName && !newClientEmail && !newClientPassword) {
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
          handleCloseAdd();
        } else {
          toast.error("Respuesta inesperada del servidor.");
        }
      } catch (error) {
        console.error("Error al agregar el cliente:", error);
        toast.error("Error al conectar con el servidor.");
      }
    };
    const handleOpenAdd = () => {
      setOpenAdd(true);
    };
    
    const handleCloseAdd = () => {
      setOpenAdd(false);
      setNewClientName('');
      setNewClientEmail('');
      setNewClientPassword('');
    };
    
  return (
    <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Clientes
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant="h6">Lista de clientes registrados</Typography>
      <Button variant="contained" color="primary" onClick={handleOpenAdd}>
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
                        Editar
                      </Button>
                      <Button 
                        variant="contained" 
                        color="secondary"
                        onClick={() => handleOpen(cliente)} 
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
            <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
    <Typography id="modal-title" variant="h6" component="h2">
      ¿Quieres eliminar este usuario?
    </Typography>
    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
      <Button variant="contained" color="secondary" onClick={handleDeleteConfirm}>
        Borrar
      </Button>
      <Button variant="contained" onClick={handleClose}>
        No
      </Button>
    </Box>
  </Box>
</Modal>
<Modal
  open={openEdit}
  onClose={handleCloseEdit}
  aria-labelledby="edit-modal-title"
  aria-describedby="edit-modal-description"
>
  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
    <Typography id="edit-modal-title" variant="h6" component="h2">
      Editar Cliente
    </Typography>
    <Box component="form" onSubmit={handleUpdateConfirm} sx={{ mt: 2 }}>
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
        <Button variant="contained" onClick={handleCloseEdit}>
          Cancelar
        </Button>
      </Box>
    </Box>
  </Box>
</Modal>
<Modal
  open={openAdd}
  onClose={handleCloseAdd}
  aria-labelledby="add-client-modal-title"
  aria-describedby="add-client-modal-description"
>
  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
    <Typography id="add-client-modal-title" variant="h6" component="h2">
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
        <Button variant="contained" onClick={handleCloseAdd}>
          Cancelar
        </Button>
      </Box>
    </Box>
  </Box>
</Modal>
          </Table>
        </TableContainer>
      )}
    </Card>
  );
};

export default Clientes;
