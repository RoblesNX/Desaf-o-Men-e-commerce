import React from 'react';
import { useState } from "react";
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {

    const { addToCart, isInCart } = useCartContext()
  
    const [cantidad, setCantidad] = useState(1)
  
    const handleAgregar = () => {
      const itemToCart = {
        id: item.id,
        nombre: item.nombre,
        precio: item.precio,
        cantidad
      }
      addToCart(itemToCart)
    }

    return (
        <Container maxWidth='md' sx={{marginTop: 15, display: 'flex', flexFlow: 'column', alignItems: 'center'}}>
            <img src={item.img} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <p>{item.desc}</p>
            <p>$ {item.precio}</p>

            {isInCart(item.id)
        ? <Button variant="contained" component={Link} to='/cart'>Terminar mi compra</Button> 
        : <ItemCount
          max={item.stock}
          counter={cantidad}
          setCantidad={setCantidad}
          handleAgregar={handleAgregar} />
      }

        </Container>
    )
}

export default ItemDetail