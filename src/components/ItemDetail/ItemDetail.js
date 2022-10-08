import React from 'react';
import { Button, Box, Typography, Grid, Divider, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from "react";
import OutOfStock from '../OutOfStock/OutOfStock';
import { Container } from '@mui/system'
import RelatedItems from '../RelatedItems/RelatedItems';
import { useWishListContext } from '../../context/WishListContext'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const ItemDetail = ({ item }) => {

  const { addToCart, isInCart } = useCartContext()
  const { addToWishList, isInWishList } = useWishListContext()

  const [cantidad, setCantidad] = useState(0)

  const handleAgregar = () => {
    const itemToCart = {
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      img: item.img,
      stock: item.stock,
      cantidad
    }
    addToCart(itemToCart)
  }

  const handleWishList = () => {
    const itemToWishList = {
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      img: item.img
    }

    addToWishList(itemToWishList)
  }


  if(item.stock === 0) {
    return (

      <OutOfStock item={item}/>
      
    )
  }

  return (

    <Container>

    <Card sx={{ padding: 5, borderRadius: 3 }}>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>

        <CardMedia component='img' image={item.img} alt={item.nombre} sx={{ maxWidth: '400px' }} />

        <Box sx={{ padding: 5, borderRadius: 3, border: 1, borderColor: '#ebebeb' }}>

          <CardContent>
            <Typography variant='h5'>{item.nombre}</Typography>
            <Typography variant='h6' sx={{ textTransform: 'capitalize', color: '#008012', marginTop: 1 }}>Categoría: {item.categoria}</Typography>
            <Typography sx={{ fontSize: '36px', marginTop: 2 }}>$ {item.precio}</Typography>
            {isInWishList(item.id)
              ? <Typography> Este producto ya esta en sus favoritos </Typography>
              : <FavoriteBorderIcon onClick={handleWishList}/>
            }
          </CardContent>

          <CardActions>
            {isInCart(item.id)
              ? <Button fullWidth variant="contained" component={Link} to='/cart'>Terminar mi compra</Button>
              : <ItemCount
                max={item.stock}
                counter={cantidad}
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}
              />
            }
          </CardActions>

        </Box>

      </Box>

      <Typography variant='h6' color={'#000000'} sx={{ padding: 2, paddingLeft: 0 }}>
        Características principales:
      </Typography>

      <Box sx={{ borderRadius: '15px', overflow: 'hidden' }}>

        <Grid container>
          <Grid item lg={2} md={2} xs={4} sx={{ background: '#ebebeb', padding: 2 }}>
            <Typography variant='body1'>
              Marca
            </Typography>
          </Grid>

          <Grid item lg={10} md={10} xs={8} sx={{ background: '#f5f5f5', padding: 2 }}>
            <Typography variant='body1'>
              {item.marca}
            </Typography>
          </Grid>
        </Grid>

        <Divider />

        <Grid container>
          <Grid item lg={2} md={2} xs={4} sx={{ background: '#ebebeb', padding: 2 }}>
            <Typography variant='body1'>
              Categoría
            </Typography>
          </Grid>

          <Grid item lg={10} md={10} xs={8} sx={{ background: '#f5f5f5', padding: 2 }}>
            <Typography variant='body1' sx={{ textTransform: 'capitalize' }}>
              {item.categoria}
            </Typography>
          </Grid>
        </Grid>

      </Box>

      <Typography variant='h6' color={'#000000'} sx={{ padding: 2, paddingLeft: 0, marginTop: 2 }}>
        Descripción:
      </Typography>

      <Typography color={'#000000'} sx={{ paddingLeft: 0, fontSize: '18px' }}>
        {item.desc}:
      </Typography>


    </Card>

    <RelatedItems categoria={item.categoria}/>

    </Container>
  )
}

export default ItemDetail