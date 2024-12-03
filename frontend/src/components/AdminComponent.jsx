import React from 'react';
import { Container, Grid, Button, Typography, CssBaseline, GlobalStyles } from '@mui/material';
import { FaHome, FaSignOutAlt, FaFileAlt, FaBell, FaUserAlt, FaList } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const AdminPage = () => {
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
            <Button
              fullWidth
              startIcon={<FaHome />}
              sx={{ color: 'white', mb: 2 }}
              component={Link}
              to="/admin"
            >
              Inicio
            </Button>
            <Button
              fullWidth
              startIcon={<FaFileAlt />}
              sx={{ color: 'white', mb: 2 }}
              component={Link}
              to="/admin/almacen"
            >
              Almacén
            </Button>
            <Button
              fullWidth
              startIcon={<FaBell />}
              sx={{ color: 'white', mb: 2 }}
              component={Link}
              to="/admin/ordenes"
            >
              Órdenes
            </Button>
            <Button
              fullWidth
              startIcon={<FaUserAlt />}
              sx={{ color: 'white', mb: 2 }}
              component={Link}
              to="/admin/administradores"
            >
              Administradores
            </Button>
            <Button
              fullWidth
              startIcon={<FaList />}
              sx={{ color: 'white', mb: 2 }}
              component={Link}
              to="/admin/opciones"
            >
              Opciones
            </Button>
            <Button
              fullWidth
              startIcon={<FaSignOutAlt />}
              sx={{ color: 'white' }}
              component={Link}
              to="/login"
            >
              Salir
            </Button>
          </Grid>
          <Grid item xs={12} sm={9} md={10} sx={{ padding: 2 }}>
            <Outlet /> {/* Este es el lugar donde se renderizarán las rutas anidadas */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AdminPage;
