import { AccountCircleSharp, Logout } from '@mui/icons-material';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import MenuIcon from '@mui/icons-material/Menu';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { ListItemIcon, ListItemText, Snackbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Injector } from '../../../injector';

export function DashboardToolbar() {
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    setAnchorElUser(null);
    try {
      await Injector.authManager.logout();
      setOpen(true);
    } catch (e) {
      setError(`${e}`);
    }
  };

  return (
    <AppBar position="static">
      <Snackbar
        open={open}
        autoHideDuration={3000}
        message={error || "Logout successfully!"}
      />

      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', }}>

          {/* MENU ICON */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="page menu"
              aria-controls="left-menu"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* LOGO */}
          <Box flexGrow={{ xs: 1, md: 0 }} mr={{ xs: 2, md: 6 }}>
            <Link to="/home">
              <img src="/logo.png" style={{ height: 35, objectFit: 'contain' }} />
            </Link>
          </Box>

          {/* MOBILE MENU */}
          <Menu
            id="left-menu"
            sx={{ display: { xs: 'block', md: 'none' } }}
            keepMounted
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            <MenuItem component={Link} to="/home" onClick={handleCloseNavMenu}>
              <Typography>Home</Typography>
            </MenuItem>
            <MenuItem component={Link} to="/properties" onClick={handleCloseNavMenu}>
              <Typography>Properties</Typography>
            </MenuItem>
            <MenuItem component={Link} to="/corporate" onClick={handleCloseNavMenu}>
              <Typography>Corporate</Typography>
            </MenuItem>
          </Menu>

          {/* WEB MENU */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              component={Link}
              to="/home"
              style={{ color: '#E5ECFF', display: 'flex', textTransform: 'none', }}>
              <img src="/icon.png" style={{ marginRight: 10, width: 30 }} /> Home
            </Button>
            <Button
              component={Link}
              to="/properties"
              style={{ color: '#E5ECFF', display: 'flex', textTransform: 'none', }}>
              <MapsHomeWorkIcon sx={{ mr: '10px' }} />   Properties
            </Button>
            <Button
              component={Link}
              to="/corporate"
              style={{ color: '#E5ECFF', display: 'flex', textTransform: 'none', }} >
              <TextSnippetIcon sx={{ mr: '10px' }} />   Corporate
            </Button>
          </Box>

          {/* RIGHT */}
          <Box>
            <Tooltip title="Open Settings">
              <IconButton
                onClick={handleOpenUserMenu}
                aria-label="account of current user"
                aria-controls="user-menu"
                aria-haspopup="true"
                sx={{ p: 0 }}>
                <Avatar
                  src="/missing-image"
                  alt="Remy Sharp"
                  sx={{
                    height: 35,
                    width: 35,
                    bgcolor: theme => theme.palette.common.white,
                    color: theme => theme.palette.primary.main,
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              id="user-menu"
              keepMounted
              sx={{ mt: '45px' }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <ListItemIcon>
                  <AccountCircleSharp fontSize="small" />
                </ListItemIcon>
                <ListItemText>Profile</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
              </MenuItem>
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
