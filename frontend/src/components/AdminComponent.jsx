import React, { useState } from 'react';
import {
  Container,
  Grid,
  Button,
  Typography,
  Card,
  CssBaseline,
  GlobalStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tabs,
  Tab,
  Box,
  TextField,
} from '@mui/material';
import { FaHome, FaFileAlt, FaBell, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';

const AdminPage = () => {
  const [menu, setMenu] = useState('Bienvenida Reina Isabel, desde esta página podrás observar órdenes y agregar nuevos platos');
  const [tab, setTab] = useState(0);

  const optionMenu = (option) => {
    setMenu(option);
  };

  const renderAdministradoresClientes = () => (
    <Card sx={{ boxShadow: 4, borderRadius: 3, mt: 2 }}>
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
        <Tab label="Administradores" />
        <Tab label="Clientes" />
      </Tabs>
      <Box sx={{ p: 3 }}>
        {tab === 0 ? (
          <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
            <Table>
              <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Correo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Aquí se agregarán los datos de los administradores */}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
            <Table>
              <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Correo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Aquí se agregarán los datos de los clientes */}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Card>
  );

  const renderAlmacen = () => (
    <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Almacén - Agregar Platillos
      </Typography>
      {/* Formulario visual sin lógica */}
      <TextField
        fullWidth
        label="Nombre del Platillo"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Descripción"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Categoría"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Precio"
        type="number"
        sx={{ mb: 2 }}
      />
      <Typography variant="h6" gutterBottom>
        Cargar Imagen
      </Typography>
      <input
        accept="image/*"
        type="file"
        style={{ marginBottom: '10px' }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Agregar Platillo
      </Button>

      {/* Tabla visual sin lógica */}
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
            {/* Aquí se agregarán los platillos */}
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
        return (
          <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, mt: 2 }}>
            <Typography variant="h5">Órdenes</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableRow>
                    <TableCell>Orden</TableCell>
                    <TableCell>Cliente</TableCell>
                    <TableCell>Estado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Aquí se agregarán las órdenes */}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        );
      case 'Administradores':
        return renderAdministradoresClientes();
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
            xs={12} sm={3} md={2}
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
            <Button
              fullWidth
              startIcon={<FaHome />}
              sx={{
                color: 'white',
                mb: 2,
                textTransform: 'none',
                ':hover': {
                  backgroundColor: '#1a237e',
                },
              }}
              onClick={() => optionMenu('Inicio')}
            >
              Inicio
            </Button>
            <Button
              fullWidth
              startIcon={<FaFileAlt />}
              sx={{
                color: 'white',
                mb: 2,
                textTransform: 'none',
                ':hover': {
                  backgroundColor: '#1a237e',
                },
              }}
              onClick={() => optionMenu('Almacén')}
            >
              Almacén
            </Button>
            <Button
              fullWidth
              startIcon={<FaBell />}
              sx={{
                color: 'white',
                mb: 2,
                textTransform: 'none',
                ':hover': {
                  backgroundColor: '#1a237e',
                },
              }}
              onClick={() => optionMenu('Órdenes')}
            >
              Órdenes
            </Button>
            <Button
              fullWidth
              startIcon={<FaUserAlt />}
              sx={{
                color: 'white',
                mb: 2,
                textTransform: 'none',
                ':hover': {
                  backgroundColor: '#1a237e',
                },
              }}
              onClick={() => optionMenu('Administradores')}
            >
              Administradores
            </Button>
            <Button
              fullWidth
              startIcon={<FaSignOutAlt />}
              sx={{
                color: 'white',
                textTransform: 'none',
                ':hover': {
                  backgroundColor: '#1a237e',
                },
              }}
              onClick={() => optionMenu('Salir')}
            >
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
