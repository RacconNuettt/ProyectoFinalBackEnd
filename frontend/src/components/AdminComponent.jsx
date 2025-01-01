import React from 'react';
import { Container, Grid, Button, Typography, CssBaseline, GlobalStyles } from '@mui/material';
import { FaHome, FaSignOutAlt, FaFileAlt, FaBell, FaUserAlt, FaList } from 'react-icons/fa';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/login');
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
          {/* Barra lateral */}
          <Grid
            item
            xs={12}
            sm={3}
            md={2}
            sx={{
              background: 'linear-gradient(180deg, #3f51b5, #1a237e)',
              color: 'white',
              minHeight: '100vh',
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
                color: location.pathname === '/admin' ? '#ffeb3b' : 'white',
                mb: 2,
              }}
              component={Link}
              to="/admin"
            >
              Inicio
            </Button>

            <Button
              fullWidth
              startIcon={<FaFileAlt />}
              sx={{
                color: location.pathname === '/admin/almacen' ? '#ffeb3b' : 'white',
                mb: 2,
              }}
              component={Link}
              to="/admin/almacen"
            >
              Almacén
            </Button>

            <Button
              fullWidth
              startIcon={<FaBell />}
              sx={{
                color: location.pathname === '/admin/ordenes' ? '#ffeb3b' : 'white',
                mb: 2,
              }}
              component={Link}
              to="/admin/ordenes"
            >
              Órdenes
            </Button>

            <Button
              fullWidth
              startIcon={<FaUserAlt />}
              sx={{
                color: location.pathname === '/admin/clientes' ? '#ffeb3b' : 'white',
                mb: 2,
              }}
              component={Link}
              to="/admin/clientes"
            >
              Clientes
            </Button>

            <Button
              fullWidth
              startIcon={<FaList />}
              sx={{
                color: location.pathname === '/admin/opciones' ? '#ffeb3b' : 'white',
                mb: 2,
              }}
              component={Link}
              to="/admin/opciones"
            >
              Opciones
            </Button>

            <Button
              fullWidth
              startIcon={<FaSignOutAlt />}
              sx={{
                color: 'white',
                mt: 4,
              }}
              onClick={handleLogout}
            >
              Salir
            </Button>
          </Grid>

          {/* Contenido dinámico */}
          <Grid item xs={12} sm={9} md={10} sx={{ padding: 2 }}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AdminPage;
