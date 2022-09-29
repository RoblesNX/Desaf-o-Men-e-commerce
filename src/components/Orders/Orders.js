import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardMedia } from "@mui/material"


const Orders = ({ order }) => {

  return (

    <Card sx={{ padding: 2, borderRadius: 3, marginBottom: 4 }}>

      <Box sx={{ alignItems: 'center', justifyContent: 'space-around' }} elevation={5}>

        <CardContent>
          <Typography variant="h4" component='h5'>
            Datos del pedido
          </Typography>

          <Typography variant="h5" component='h5'>
            eMail: {order.comprador.email}
          </Typography>
          <Typography variant="h5" component='h5'>
            Teléfono: {order.comprador.telefono}
          </Typography>
          <Typography variant="h5" component='h5'>
            Nombre: {order.comprador.nombre}
          </Typography>
          <Typography variant="h5" component='h5'>
            Dirección: {order.comprador.direccion}
          </Typography>

          <Typography variant="h5" component='h5'>
            Número de orden:
          </Typography>
        </CardContent>

          {order.items.map((items, index) => {
            return <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}} key={index}>

              <CardMedia
                component="img"
                image={items.img}
                alt="imagen"
                sx={{ maxWidth: '100px', marginBottom: 1 }}
              />

              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center'}}>

              <Typography variant="h5" component='h5'>
                Precio ${items.precio}
              </Typography>

              <Typography variant="h5" component='h5'>
                Artículo: {items.nombre}
              </Typography>

              <Typography variant="h5" component='h5'>
                Cantidad: {items.cantidad}
              </Typography>
              </Box>
            </Box>
          })}
        
        <Typography variant="h5" component='h5'>
            Total de la orden: ${order.total}
          </Typography>
      </Box>
    </Card>
  )
}

export default Orders