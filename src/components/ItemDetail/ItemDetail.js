import ItemCount from '../ItemCount/ItemCount';
import React from 'react';
import { Container } from '@mui/system';

const ItemDetail = ({ item }) => {
    return (
        <Container maxWidth='md' sx={{marginTop: 15, display: 'flex', flexFlow: 'column', alignItems: 'center'}}>
            <img src={item.img} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <p>{item.desc}</p>
            <p>$ {item.precio}</p>
            <ItemCount stock={item.stock} />
        </Container>
    )
}

export default ItemDetail