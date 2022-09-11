import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { useCartContext  } from '../../context/CartContext';

const CartWidget = () => {

    const { cartQuantity } = useCartContext ()

    return (
        <Badge badgeContent={cartQuantity()} component={Link} to="/cart" color="primary" sx={{mx: 3, color: '#FFFFFF'}}> 
        <ShoppingCartIcon sx={{ display: { xs: 'flex', md: 'flex' }, }} />  
        </Badge>
    );
};

export default CartWidget