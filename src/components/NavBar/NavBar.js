import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from './CartWidget.js';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from "../../context/AuthContext";
import { Typography, AppBar, Box, Toolbar, IconButton, Menu, Button, MenuItem } from '@mui/material'
import { Container } from '@mui/system'

const pages = [

    {
        categoria: 'Calzado',
        link: "/productos/calzado",
        submenu: [
            {
                titulo: 'nike',
                link: "/nike"
            },
            {
                titulo: 'puma',
                link: "/puma"
            },

        ],

    },
    {
        categoria: 'Indumentaria',
        link: '/productos/indumentaria'
    },
    {
        categoria: 'Accesorios',
        link: '/productos/accesorios'
    }
];

const NavBar = () => {

    const { logout, user } = useAuthContext();
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout()
            navigate("/")
        } catch (error) {
            console.error(error.message);
        }
    };

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" sx={{ bgcolor: "green" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ marginRight: 10 }}>

                        <Box component={Link} to={`/`}>
                            <Box
                                component="img"
                                sx={{
                                    height: 64,
                                    PaddingRight: 10
                                }}
                                alt="Naiky Store."
                                src={"https://i.ibb.co/2q8JdKg/Logo-tienda-de-ropa-moderno-moda-urbana-negro-verde-blanco-removebg-preview.png"}
                                to='/'
                            />
                        </Box>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem component={Link} to={page.link} key={index} onClick={handleCloseNavMenu}>
                                    {page.categoria}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <Button
                                component={Link}
                                to={page.link}
                                key={index}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.categoria}

                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>

                        {user ?

                            <Box>
                                <Button
                                    component={Link}
                                    to="/"
                                    variant="contained"
                                    sx={{ p: 0, marginLeft: 2 }}>
                                    <Typography textAlign="center" sx={{ my: 1, mx: 2, color: 'white' }}> Mi cuenta </Typography>
                                </Button>

                                <Button
                                    variant="contained"
                                    component={Link}
                                    to="/ordenes"
                                    sx={{ p: 0, marginLeft: 2 }}>
                                    <Typography textAlign="center" sx={{ my: 1, mx: 2, color: 'white' }}> Ordenes </Typography>
                                </Button>

                                <Button
                                    onClick={handleLogout}
                                    variant="contained"
                                    sx={{ p: 0, marginLeft: 2 }}>
                                    <Typography textAlign="center" sx={{ my: 1, mx: 2, color: 'white' }}> Cerrar sesión </Typography>
                                </Button>

                            </Box>

                            :

                            <Box>

                                <Button
                                    component={Link}
                                    to="/login"
                                    variant="contained"
                                    sx={{ p: 0, marginLeft: 2 }}
                                >
                                    <Typography textAlign="center" sx={{ my: 1, mx: 2, color: 'white' }}> Acceder </Typography>
                                </Button>

                            </Box>

                        }

                    </Box>

                    <CartWidget />

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
