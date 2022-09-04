import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const CartWidget = () => {
    return (
        <Badge badgeContent={4} color="primary" sx={{mx: 3}}> 
        <ShoppingCartIcon sx={{ display: { xs: 'flex', md: 'flex' }, }} />  
        </Badge>
    );
};

export default CartWidget