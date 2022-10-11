import { Button, Typography, Divider, ButtonGroup, Grid, Stack } from '@mui/material'
import { Box } from '@mui/system'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import EmptyCart from '../EmptyCart/EmptyCart';



const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem, increaseQuantityInCart, decreaseQuantityInCart } = useCartContext()

    if (cart.length === 0) {
        return (
            <EmptyCart />
        )
    }

    return (
        <Stack m={20}>

            <Typography
                variant="h2"
                component="h3"
                fontWeight="medium"
                mb={6}
                textAlign="center"
            >
                Tu carrito actual
            </Typography>

            <Divider />

            {cart.map((item) => (

                <Box key={item.id}>

                    <Grid container
                        m={1}
                        justifyContent="space-between"
                        alignItems="center"
                    >

                        <Grid item
                            md={2}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            component={Link}
                            to={`/item/${item.id}`}
                        >
                            <Box
                                maxWidth="60%"
                                component='img'
                                src={item.img}
                                alt={item.name}
                            />

                        </Grid>

                        <Grid item
                            md={4}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Typography variant="h6"> {item.nombre} </Typography>

                        </Grid>

                        <Grid item
                            md={2}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Typography variant="h6"> $ {item.precio} </Typography>

                        </Grid>

                        <Grid item
                            md={2}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <ButtonGroup
                                variant="contained"
                                aria-label="outlined primary button group"
                            >
                                <Button
                                    variant="contained"
                                    color="error"
                                    startIcon={<DeleteIcon />}
                                    onClick={() => removeItem(item.id)}
                                />

                                <Button
                                    onClick={() => decreaseQuantityInCart(item)}
                                    disabled={item.cantidad === 1}
                                >
                                    -
                                </Button>

                                <Button variant="outlined"> {item.cantidad} </Button>
                                <Button onClick={() => increaseQuantityInCart(item)}> + </Button>

                            </ButtonGroup>

                        </Grid>

                    </Grid>

                    <Divider />

                </Box>

            ))}

            <Stack
                direction="column"
                spacing={5}
                justifyContent="flex-end"
                mt={4}
            >
                <Typography
                    textAlign="right"
                    color="green"
                    fontWeight="medium"
                    variant="h4"
                    component="h4"
                >
                    Envío gratis incluído
                </Typography>

                <Typography
                    textAlign="right"
                    variant="h4"
                    component="h4"
                >
                    Total $ {cartTotal()}
                </Typography>

                <Button
                    size="large"
                    variant="contained"
                    color="success"
                    component={Link}
                    to="/checkout"
                >
                    Finalizar compra
                </Button>

                <Button
                    variant="contained"
                    color="error"
                    onClick={emptyCart}
                >
                    Vaciar carrito
                </Button>

            </Stack>

        </Stack>
    )
}

export default Cart