import React from 'react';
import { Container } from '@mui/system';
import { Button, Divider, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const SuccessOrder = ({ orderId }) => {
    return (
        <Container sx={{ marginTop: 15 }}>

            <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
            >
                <Typography
                    variant="h3"
                    component='h3'
                    p={2}
                    textAlign="center"
                >

                    Compra exitosa!

                </Typography>

            </Box>

            <Divider />

            <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
            >

                <Typography variant="body1" component='p' p sx={{ padding: 2, textAlign: 'center' }} >Tu número de orden es: <strong>{orderId}</strong></Typography>

                <Button variant='contained' color='primary' size='large' component={Link} to='/'>Volver al inicio</Button>

            </Box>

        </Container>
    )
}

export default SuccessOrder