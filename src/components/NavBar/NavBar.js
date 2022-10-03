import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from './CartWidget.js';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from "../../context/AuthContext";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Typography, AppBar, Box, Toolbar, IconButton, Menu, Button, MenuItem } from '@mui/material'
import { useState } from 'react';
import { Container } from '@mui/system'

const pages = [

    {
        categoria: 'Calzado',
        link: "/productos/calzado"
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

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const NavBar = () => {

    const { logout, user } = useAuthContext();

    const handleLogout = async () => {
        try {
            await logout();
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

    // ACA TOMO EL DATO DE LA BARRA DE BÚSQUEDA PARA LLEVARLO AL SEARCHNAVBAR

    const navigate = useNavigate()
    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?name=${search}`)
    }

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


                    {/* <Box>
                        <form onSubmit={handleSubmit}>
                            <input
                                placeholder="Buscar..."
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                                id="message"
                                name="message"
                            />

                            <Button

                                variant="contained"
                                color="warning"
                                type="submit"
                            >
                                Buscar
                            </Button>
                        </form>

                    </Box> */}

                    <Search >
                        <form onSubmit={handleSubmit}>
                            <StyledInputBase
                                placeholder="Buscar..."
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                                id="message"
                                name="message"
                            />
                            <Button

                                variant="contained"
                                color="warning"
                                type="submit"
                            >
                                Buscar
                            </Button>
                        </form>
                    </Search>



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

                                <Button
                                    component={Link}
                                    to="/register"
                                    variant="contained"
                                    sx={{ p: 0, marginLeft: 2 }}>
                                    <Typography textAlign="center" sx={{ my: 1, mx: 2, color: 'white' }}> Registrate </Typography>
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
