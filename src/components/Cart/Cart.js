import { Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { useCartContext } from '../../context/CartContext'
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {


    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()


    return (
        <Container sx={{ marginTop: 10, padding: 10, display: 'flex', flexFlow: 'column', justifyContent: 'center' }}>
            <Typography variant="h2">
                Carrito de compras
            </Typography>

            {cart.map((item) => (
                <Container key={item.id}>
                    <h2>{item.nombre} </h2>
                    <p>Precio $ {item.precio} </p>
                    <p>Cantidad: {item.cantidad}</p>
                    <Button variant='contained' onClick={() => removeItem(item.id)}>
                        <DeleteIcon />
                    </Button>
                </Container>
            ))}

            <Typography variant="h4">
                Total ${cartTotal()}
            </Typography>
            <Button variant='contained' onClick={emptyCart}>
                Vaciar carrito
            </Button>

        </Container>
    )
}

export default Cart