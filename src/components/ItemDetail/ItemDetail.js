import ItemCount from '../ItemCount/ItemCount';
import React from 'react';
import { Container } from '@mui/system';
import { Box } from '@mui/material';

const ItemDetail = ({ item }) => {
    return (
        <Container maxWidth="sm">
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
            <img src={item.img} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <p>{item.desc}</p>
            <p>$ {item.precio}</p>
            <ItemCount stock={item.stock} />
            </Box>
        </Container>
    )
}

export default ItemDetail