import { Container } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'
import { Button, Divider } from '@mui/material'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <Container sx={{ marginTop: 10, padding: 10, display: 'flex', flexFlow: 'column', justifyContent: 'center' }}>
            <Typography variant="h3" sx={{ padding: 2 }}>
                No tiene productos en su carrito.
            </Typography>
            <Typography variant="h5" sx={{ padding: 2 }}>
                Agregue productos para continuar.
            </Typography>
            <Divider sx={{ margin: 5 }} />

            <Button variant='contained' component={Link} to='/'>
                Ir a comprar
            </Button>
        </Container>
    )
}

export default EmptyCart