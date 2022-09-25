import { Button, Typography, Divider, ButtonGroup } from '@mui/material'
import { Container, Box } from '@mui/system'
import { useCartContext } from '../../context/CartContext'
import DeleteIcon from '@mui/icons-material/Delete';
import EmptyCart from '../EmptyCart/EmptyCart';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem, increaseQuantityInCart, decreaseQuantityInCart} = useCartContext()

    if (cart.length === 0) {
        return (
            <EmptyCart />
        )
    }

    return (
        <Container sx={{ marginTop: 10, padding: 10, display: 'flex', flexFlow: 'column', justifyContent: 'center' }}>
            <Typography variant="h3" sx={{ padding: 2 }}>
                Carrito de compras
            </Typography>

            <Divider />
            {cart.map((item) => (
                <Container key={item.id}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box sx={{ width: "10%", padding: 2 }} component='img' src={item.img} alt={item.name} />
                        <Typography sx={{ padding: 2, textAlign: 'left' }} variant="h6">{item.nombre} </Typography>
                        <Typography sx={{ padding: 2 }} variant="h6">${item.precio} </Typography>
                        <Button sx={{ margin: 1 }} variant='contained' onClick={() => removeItem(item.id)}>
                            <DeleteIcon />
                        </Button>

                        <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ my: 2 }} >
                            <Button onClick={ () => decreaseQuantityInCart(item)} sx={{ px: 3 }}>-</Button>
                            <Button variant="outlined" sx={{ px: 3 }}>{item.cantidad}</Button>
                            <Button onClick={ () => increaseQuantityInCart (item)} sx={{ px: 3 }}>+</Button>

                        </ButtonGroup>
                    </Box>
                    <Divider />
                </Container>
            ))}

            <Typography sx={{ padding: 2, textAlign: 'right' }} variant="h4">
                Total con envío ${cartTotal()}
            </Typography>

            <Button sx={{ marginBottom: 2}} variant='contained' component={Link} to="/checkout">
                Finalizar compra
            </Button>

            <Button variant='contained' onClick={emptyCart}>
                Vaciar carrito
            </Button>
            

        </Container>
    )
}

export default Cart