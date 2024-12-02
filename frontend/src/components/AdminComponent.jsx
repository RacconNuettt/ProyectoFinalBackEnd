import React, { useState } from 'react';
import {
  Container,
  Grid,
  Button,
  Typography,
  Card,
  CssBaseline,
  GlobalStyles,
  TextField,
  Tabs,
  Tab,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { FaHome, FaFileAlt, FaBell, FaSignOutAlt, FaUserAlt, FaList } from 'react-icons/fa';

const AdminPage = () => {
  const [menu, setMenu] = useState('Bienvenida Reina Isabel, desde esta página podrás observar órdenes y agregar nuevos platos');
  const [tab, setTab] = useState(0);

  const optionMenu = (option) => {
    setMenu(option);
  };

  const renderAlmacen = () => (
    <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Agregar Platillos
      </Typography>
      <TextField fullWidth label="Nombre del Platillo" sx={{ mb: 2 }} />
      <TextField fullWidth label="Descripción" sx={{ mb: 2 }} />
      <TextField fullWidth label="Precio" type="number" sx={{ mb: 2 }} />
      <TextField fullWidth label="Categoría" sx={{ mb: 2 }} />
      <Typography variant="h6" gutterBottom>
        Cargar Imagen
      </Typography>
      <input accept="image/*" type="file" style={{ marginBottom: '10px' }} />
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
              <TableCell>Imagen</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Ejemplo 1</TableCell>
              <TableCell>Descripción ejemplo</TableCell>
              <TableCell>$100</TableCell>
              <TableCell>Categoría ejemplo</TableCell>
              <TableCell>imagen.jpg</TableCell>
              <TableCell>Editar | Eliminar</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );

  const renderOpciones = () => (
    <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Crear Categorías y Bebidas
      </Typography>

      <Tabs
        value={tab}
        onChange={(e, newValue) => setTab(newValue)}
        variant="fullWidth"
        sx={{
          backgroundColor: '#3f51b5',
          color: 'white',
          borderRadius: '4px 4px 0 0',
        }}
      >
        <Tab label="Categoría" />
        <Tab label="Bebida" />
      </Tabs>

      <Box sx={{ p: 3 }}>
        {tab === 0 ? (
          <>
            <Typography variant="h6" gutterBottom>
              Crear Categoría
            </Typography>
            <TextField fullWidth label="Nombre de la Categoría" sx={{ mb: 2 }} />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Crear Categoría
            </Button>

            {/* Tabla de Categorías */}
            <TableContainer component={Paper} sx={{ mt: 3, boxShadow: 2 }}>
              <Table>
                <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableRow>
                    <TableCell>Nombre de la Categoría</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Aquí se pueden agregar dinámicamente las categorías creadas */}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <>
            <Typography variant="h6" gutterBottom>
              Crear Bebida
            </Typography>
            <TextField fullWidth label="Nombre de la Bebida" sx={{ mb: 2 }} />
            <TextField fullWidth label="Descripción" sx={{ mb: 2 }} />
            <TextField fullWidth label="Precio" type="number" sx={{ mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Cargar Imagen
            </Typography>
            <input accept="image/*" type="file" style={{ marginBottom: '10px' }} />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Crear Bebida
            </Button>
          </>
        )}
      </Box>
    </Card>
  );

  const renderOrdenes = () => (
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

  const renderAdministradoresClientes = () => (
    <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Administradores y Clientes
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 3, boxShadow: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Rol</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Admin 1</TableCell>
              <TableCell>admin1@example.com</TableCell>
              <TableCell>Administrador</TableCell>
              <TableCell>Editar | Eliminar</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );

  const content = () => {
    switch (menu) {
      case 'Inicio':
        window.location.href = '/Home';
        return null;
      case 'Almacén':
        return renderAlmacen();
      case 'Órdenes':
        return renderOrdenes();
      case 'Administradores':
        return renderAdministradoresClientes();
      case 'Opciones':
        return renderOpciones();
      case 'Salir':
        window.location.href = '/Login';
        return null;
      default:
        return (
          <Typography variant="h5" gutterBottom>
            {menu}
          </Typography>
        );
    }
  };

  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            fontFamily: "'Patrick Hand', cursive",
          },
          '*': {
            fontFamily: "'Patrick Hand', cursive",
          },
        }}
      />
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: '#fafafa',
          minHeight: '100vh',
          padding: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={3}
            md={2}
            sx={{
              background: 'linear-gradient(180deg, #3f51b5, #1a237e)',
              color: 'white',
              height: '100vh',
              padding: 2,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}
            >
              Admin Panel
            </Typography>
            <Button fullWidth startIcon={<FaHome />} sx={{ color: 'white', mb: 2 }} onClick={() => optionMenu('Inicio')}>
              Inicio
            </Button>
            <Button fullWidth startIcon={<FaFileAlt />} sx={{ color: 'white', mb: 2 }} onClick={() => optionMenu('Almacén')}>
              Almacén
            </Button>
            <Button fullWidth startIcon={<FaBell />} sx={{ color: 'white', mb: 2 }} onClick={() => optionMenu('Órdenes')}>
              Órdenes
            </Button>
            <Button fullWidth startIcon={<FaUserAlt />} sx={{ color: 'white', mb: 2 }} onClick={() => optionMenu('Administradores')}>
              Administradores
            </Button>
            <Button fullWidth startIcon={<FaList />} sx={{ color: 'white', mb: 2 }} onClick={() => optionMenu('Opciones')}>
              Opciones
            </Button>
            <Button fullWidth startIcon={<FaSignOutAlt />} sx={{ color: 'white' }} onClick={() => optionMenu('Salir')}>
              Salir
            </Button>
          </Grid>
          <Grid item xs={12} sm={9} md={10} sx={{ padding: 2 }}>
            {content()}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AdminPage;
