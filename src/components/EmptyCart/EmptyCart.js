import React from 'react'
import Typography from '@mui/material/Typography'
import { Button, Divider, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (

        <Stack
            m={20}  
            justifyContent="center"
            alignItems="center"
        >

            <Typography variant="h3" component="h3" p={2}>
                No tienes productos en tu carrito
            </Typography>

            <Typography variant="h5" component="h5" p={2}>
                Agregue productos para continuar con la compra
            </Typography>

            <Divider sx={{ width: "50%", margin: 2 }} />

            <Button variant="contained" component={Link} to="/">
                Volver a la tienda
            </Button>

        </Stack>
    )
}

export default EmptyCart