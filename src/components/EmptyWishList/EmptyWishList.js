import React from 'react'
import Typography from '@mui/material/Typography'
import { Button, Divider, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

const EmptyWishList = () => {
    return (

        <Stack
            m={20}
            justifyContent="center"
            alignItems="center"
        >

            <Typography variant="h3" component="h3" p={2}>
                Tu lista de deseos esta vacía
            </Typography>

            <Typography variant="h5" component="h5" p={2}>
                Agregá tus productos favoritos visitando todas las secciones
            </Typography>

            <Divider sx={{ width: "50%", margin: 2 }}/>

            <Button variant="contained" component={Link} to="/">
                Volver a la tienda
            </Button>

        </Stack>

    )
}

export default EmptyWishList