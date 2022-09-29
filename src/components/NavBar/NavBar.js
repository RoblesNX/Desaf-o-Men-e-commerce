import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from './CartWidget.js';
import { Link } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import { InputBase, Typography, AppBar, Box, Toolbar, IconButton, Menu, Container, Button, MenuItem } from '@mui/material'

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
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const NavBar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const { logout, user } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error.message);
        }
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

                    <Search sx={{ width: 125 }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Buscar"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>


                    <CartWidget />


                    <Box sx={{ flexGrow: 0 }}>

                        {user ?

                            <Box>
                                <Button
                                    component={Link}
                                    to="/micuenta"
                                    variant="contained"
                                    sx={{ p: 0 }}>
                                    <Typography textAlign="center" sx={{ my: 1, mx: 2, color: 'white' }}> Mi cuenta </Typography>
                                </Button>

                                <Button
                                    onClick={handleLogout}
                                    variant="contained"
                                    sx={{ p: 0, marginLeft: 2 }}>
                                    Cerrar sesión
                                </Button>

                            </Box>

                            :

                            <Box>

                                <Button
                                    component={Link}
                                    to="/login"
                                    variant="contained"
                                    sx={{ p: 0 }}
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


                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
