import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, CardHeader, Avatar, Card, CardMedia, CardActions, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { Box } from '@mui/system';


const Item = ({ producto }) => {

    return (
        <div>
            <Card sx={{ maxWidth: 345, borderRadius: 4, paddingBottom: 1 }} elevation={5}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            NS
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                        </IconButton>
                    }
                    title={producto.nombre}
                />

                <Box sx={{display: 'flex', justifyContent:'space-evenly' }}>
                    {producto.stock > 0
                        ? <Typography variant="body1" component='p'>Stock: {producto.stock} </Typography>
                        : <Typography variant="body1" component='p' color="text.secondary"> Sin stock</Typography>}
                    <Typography variant="body1" component='p' >Precio $ {producto.precio} </Typography>
                </Box>


                <CardMedia
                    component="img"
                    height="auto"
                    image={producto.img}
                    alt={producto.nombre}
                />

                <CardActions>
                    <Button sx={{ borderRadius: 2 }} fullWidth size="small" variant="contained" component={Link} to={`/item/${producto.id}`}>Ver detalle del producto</Button>
                </CardActions>

            </Card>
        </div >
    )
}

export default Item