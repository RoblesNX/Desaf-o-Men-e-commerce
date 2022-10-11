import React from 'react';
import { Button, Box, Typography, Grid, Divider, Card, CardMedia, CardContent, Stack, CardActions, ButtonGroup } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useWishListContext } from '../../context/WishListContext'
import RelatedItems from '../RelatedItems/RelatedItems';

const OutOfStock = ({ item }) => {

  const { addToWishList, isInWishList } = useWishListContext()

  const handleWishList = () => {
    const itemToWishList = {
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      img: item.img
    }

    addToWishList(itemToWishList)
  }

  return (

    <Stack pt={15} >

      <Card sx={{
        p: 5,
        borderRadius: 3
      }}
      >

        <Stack
          spacing={1}
          justifyContent="space-around"
          alignItems="center"
          direction="row"
        >

          <CardMedia
            component='img'
            image={item.img}
            alt={item.nombre}
            sx={{ maxWidth: '400px' }}
          />

          <Box
            p={5}
            borderRadius={3}
            border={1}
            borderColor='grey.300'
          >

            <CardContent>

              <Typography
                variant='h5'
                component='h1'
              >

                {item.nombre}

              </Typography>

              <Typography
                variant='h6'
                component='h6'
                textTransform="capitalize"
                color='green'
                mt={1}
              >

                Categoría: {item.categoria}

              </Typography>

              <Typography
                variant='h4'
                component='p'
                mt={2}
              >

                $ {item.precio}

              </Typography>

              {isInWishList(item.id)
                ? <Typography
                  variant="body2"
                  component="p"
                  color="primary"
                  fontWeight="medium"
                  p={1}
                  textTransform="uppercase"
                  mt={2}
                >

                  Este producto ya esta en sus favoritos

                </Typography>

                :

                <Button
                sx={{mt: 2}}
                  onClick={handleWishList}>

                  Agregar a mi Wishlist

                  <FavoriteBorderIcon
                    sx={{ paddingLeft: 1 }}
                  />

                </Button>
              }

            </CardContent>

            <CardActions>

              <ButtonGroup
                fullWidth
                variant="contained"
                sx={{ my: 2 }}
              >

                <Button
                  disabled
                  fullWidth
                >

                  Sin Stock

                </Button>

              </ButtonGroup>

            </CardActions>

          </Box>

        </Stack>

        <Typography
          variant='h6'
          component="h6"
          py={2}
          pr={2}
        >

          Características principales:

        </Typography>

        <Box
          sx={{
            borderRadius: '15px',
            overflow: 'hidden'
          }}
        >

          <Grid container>

            <Grid item
              md={2}
              sx={{
                background: '#ebebeb',
                p: 2
              }}
            >
              <Typography
                variant='body1'
                component="p"
              >

                Marca

              </Typography>
            </Grid>

            <Grid item
              md={10}
              sx={{
                background: '#f5f5f5',
                p: 2
              }}
            >

              <Typography
                variant='body1'
                component="p"
              >

                {item.marca}

              </Typography>

            </Grid>

            <Divider sx={{ width: "100%" }} />

            <Grid item
              md={2}
              sx={{
                background: '#ebebeb',
                padding: 2
              }}
            >
              <Typography
                variant='body1'
                component="p"
              >

                Categoría

              </Typography>

            </Grid>

            <Grid item
              md={10}
              sx={{
                background: '#f5f5f5',
                padding: 2
              }}
            >

              <Typography
                variant='body1'
                component="p"
                sx={{ textTransform: 'capitalize' }}
              >

                {item.categoria}

              </Typography>

            </Grid>

          </Grid>

        </Box>

        <Typography
          variant='h6'
          component="h6"
          py={2}
          pr={2}
        >

          Descripción:

        </Typography>

        <Typography
          variant='body1'
          component="p"
          pl={0}
        >

          {item.desc}:

        </Typography>

      </Card>

      <RelatedItems categoria={item.categoria} />

    </Stack>
  )
}

export default OutOfStock