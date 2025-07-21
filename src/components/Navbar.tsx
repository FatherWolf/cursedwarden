// src/components/Navbar.tsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../Images/Logo.png';

const navItems = [
  { text: 'Home', to: '/' },
  { text: 'Services', to: '/services' },
  { text: 'Contact', to: '/contact' },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        bgcolor: '#000000',
        height: '100%',
      }}
    >
      <Box
        component={RouterLink}
        to="/"
        sx={{
          display: 'block',
          my: 2,
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="Cursed Warden Labs Logo"
          sx={{ height: 40, mx: 'auto', display: 'block' }}
        />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.to}
              sx={{ textAlign: 'center', color: '#ffffff' }}
            >
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{ color: '#c3f73a' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" position="static" sx={{ bgcolor: '#1c1018' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Cursed Warden Labs Logo"
              sx={{ height: 40 }}
            />
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                component={RouterLink}
                to={item.to}
                sx={{ color: '#c3f73a' }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            bgcolor: '#000000',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
