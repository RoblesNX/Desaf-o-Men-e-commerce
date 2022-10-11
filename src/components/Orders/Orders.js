import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardMedia, Grid, Divider } from "@mui/material"



const Orders = ({ order }) => {

  return (

    <Card sx={{
      py: 5,
      px: 5,
      borderRadius: 3,
      marginTop: 10,
      marginBottom: 10,
      border: 2,
      borderColor: 'grey.400'
    }}
    >

      <CardContent sx={{
        padding: 0,
        mb: 3
      }}
      >

        <Box sx={{
          borderRadius: '15px',
          overflow: 'hidden'
        }}
        >

          <Grid container>

            <Grid item
              md={4}
              sx={{
                background: '#1976d2',
                p: 2
              }}
            >
              <Typography
                variant='body1'
                component="p"
                color={'white'}
                fontWeight="medium"
              >

                Número de orden

              </Typography>

            </Grid>

            <Grid item
              md={8}
              sx={{
                background: '#388ee3',
                p: 2
              }}
            >
              <Typography
                variant='body1'
                component="p"
                color={'white'}
                fontWeight="medium"
              >

                #{order.id}

              </Typography>

            </Grid>


            <Divider sx={{ width: "100%" }} />

            <Grid item
              md={4}
              sx={{
                background: '#ebebeb',
                p: 2
              }}
            >
              <Typography
                variant='body1'
                component="p"
              >

                Teléfono

              </Typography>

            </Grid>

            <Grid item
              md={8}
              sx={{
                background: '#f5f5f5',
                p: 2
              }}
            >
              <Typography
                variant='body1'
                component="p"
              >

                {order.comprador.telefono}

              </Typography>

            </Grid>

            <Divider sx={{ width: "100%" }} />

            <Grid item
              md={4}
              sx={{
                background: '#ebebeb',
                padding: 2
              }}
            >
              <Typography
                variant='body1'
                component="p">

                Nombre:

              </Typography>

            </Grid>

            <Grid item
              md={8}
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

                {order.comprador.nombre}

              </Typography>

            </Grid>

            <Divider sx={{ width: "100%" }} />

            <Grid item
              md={4}
              sx={{
                background: '#ebebeb',
                padding: 2
              }}
            >
              <Typography
                variant='body1'
                component="p">

                Dirección:

              </Typography>

            </Grid>

            <Grid item
              md={8}
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

                {order.comprador.direccion}

              </Typography>

            </Grid>

            <Divider sx={{ width: "100%" }} />

            <Grid item
              md={4}
              sx={{
                background: '#ebebeb',
                padding: 2
              }}
            >
              <Typography
                variant='body1'
                component="p">

                Total

              </Typography>

            </Grid>

            <Grid item
              md={8}
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

                ${order.total}

              </Typography>

            </Grid>

          </Grid>

        </Box>

      </CardContent>

      {order.items.map((items, index) => {
        return <Grid container key={index} sx={{ border: 2, borderColor: 'grey.200', borderRadius: 3, p: 5, my: 2 }}>

          <Grid item md={6} pl={8}>

            <CardMedia
              component="img"
              image={items.img}
              alt="imagen"
              sx={{ maxWidth: '100px' }}
            />

          </Grid>

          <Grid item md={6}>

            <Typography variant="h6" component='p'>
              {items.nombre}
            </Typography>

            <Typography variant="h6" component='p'>
              Precio: ${items.precio}
            </Typography>

            <Typography variant="h6" component='p'>
              Cantidad: {items.cantidad}
            </Typography>

          </Grid>

        </Grid>


      })}

    </Card>
  )
}

export default Orders