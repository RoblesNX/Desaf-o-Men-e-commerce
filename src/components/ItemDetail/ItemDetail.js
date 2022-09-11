import React from 'react';
import { useState } from "react";
import { Button, Box, Typography, Grid, Divider, Card, CardMedia, CardContent, CardActions } from '@mui/material';
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
      img: item.img,
      cantidad
    }
    addToCart(itemToCart)
  }

  return (
    <Card sx={{padding: 5, borderRadius: 3}}>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>

        <CardMedia component='img' image={item.img} alt={item.nombre} sx={{maxWidth: '500px'}} />

        <Box sx={{padding: 5, borderRadius: 3, border: 1, borderColor: '#ebebeb'}}>

          <CardContent>
            <Typography variant='h5'>{item.nombre}</Typography>
            <Typography variant='h6' sx={{textTransform: 'capitalize', color: '#008012', marginTop: 1}}>Categoría: {item.categoria}</Typography>
            <Typography sx={{fontSize: '36px', marginTop: 2}}>$ {item.precio}</Typography>
          </CardContent>

          <CardActions>
            {isInCart(item.id)
              ? <Button fullWidth variant="contained" component={Link} to='/cart'>Terminar mi compra</Button>
              : <ItemCount
                max={item.stock}
                counter={cantidad}
                setCantidad={setCantidad}
                handleAgregar={handleAgregar} />
            }
          </CardActions>

        </Box>

      </Box>


      <Typography variant='h5' color={'#000000'} sx={{ padding: 2, paddingLeft: 0}}>
          Características principales:
        </Typography>

      <Box sx={{ borderRadius: '15px', overflow: 'hidden' }}>

        <Grid container>
          <Grid item lg={2} md={2} xs={2} sx={{ background: '#ebebeb', padding: 2 }}>
            <Typography variant='body1'>
              Marca
            </Typography>
          </Grid>

          <Grid item lg={10} md={10} xs={10} sx={{ background: '#f5f5f5', padding: 2 }}>
            <Typography variant='body1'>
              {item.marca}
            </Typography>
          </Grid>
        </Grid>

        <Divider />

        <Grid container>
          <Grid item lg={2} md={2} xs={2} sx={{ background: '#ebebeb', padding: 2 }}>
            <Typography variant='body1'>
Categoría
            </Typography>
          </Grid>

          <Grid item lg={10} md={10} xs={10} sx={{ background: '#f5f5f5', padding: 2 }}>
            <Typography variant='body1' sx={{textTransform: 'capitalize'}}>
              {item.categoria}
            </Typography>
          </Grid>
        </Grid>

      </Box>

      <Typography variant='h5' color={'#000000'} sx={{ padding: 2, paddingLeft: 0, marginTop: 2}}>
          Descripción:
        </Typography>

        <Typography color={'#000000'} sx={{ paddingLeft: 0, fontSize: '18px'}}>
        {item.desc}:
        </Typography>


    </Card>
  )
}

export default ItemDetail