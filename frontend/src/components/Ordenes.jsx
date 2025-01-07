import React, { useEffect, useState } from 'react';
import { Card, Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { getOrderDetail, updateOrderDetail } from '../services/OrderDetail';  // Importa el servicio de actualización

const Ordenes = () => {
  const [orders, setOrders] = useState([]);  // Estado para almacenar las órdenes

  // Función para obtener todas las órdenes desde el backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrderDetail();  // Llama al servicio para obtener todas las órdenes
        setOrders(response);  // Actualiza el estado de las órdenes con la respuesta de la API
      } catch (error) {
        console.error("Error al obtener las órdenes", error);
      }
    };

    fetchOrders();  // Llama a la función para obtener las órdenes
  }, []);

  // Función para manejar el cambio de estado de la orden
  const handleChangeStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'Pendiente' ? 'Completada' : 'Pendiente';  // Alterna el estado entre 'Pendiente' y 'Completada'
    try {
      // Llama al servicio para actualizar el estado de la orden
      await updateOrderDetail(id, { status: newStatus });

      // Actualiza el estado local de las órdenes en el frontend
      setOrders(prevOrders =>
        prevOrders.map(order =>
          order._id === id ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("Error al actualizar el estado de la orden", error);
    }
  };

  return (
    <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Historial de Órdenes
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 3, boxShadow: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Comida</TableCell>
              <TableCell>Bebida</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6}>No hay órdenes disponibles</TableCell>
              </TableRow>
            ) : (
              orders.map(order => (
                <TableRow key={order._id}>
                  {/* Accede a los campos correspondientes para Comida y Bebida */}
                  <TableCell>{order.dish ? order.dish.dishName : 'No disponible'}</TableCell>
                  <TableCell>{order.drink ? order.drink.drinkName : 'No disponible'}</TableCell>
                  {/* Verifica si el cliente existe antes de acceder a su propiedad */}
                  <TableCell>{order.client ? order.client.clientname : 'Cliente no disponible'}</TableCell>
                  <TableCell>${order.totalAmount}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color={order.status === 'Pendiente' ? 'primary' : 'secondary'}
                      onClick={() => handleChangeStatus(order._id, order.status)}
                    >
                      Cambiar Estado
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default Ordenes;
