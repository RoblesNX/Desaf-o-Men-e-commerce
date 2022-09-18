import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, CardHeader, Avatar, Card, CardMedia, CardActions, IconButton, Typography, Grid } from '@mui/material';
import { red } from '@mui/material/colors';


const Item = ({ producto }) => {

    return (
        <div>
            <Card sx={{ maxWidth: 350, borderRadius: 4, paddingBottom: 1 }} elevation={5}>
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
                    title={
                        <Typography variant="body" component='p' sx={{fontWeight: 'medium', fontSize: 18}}>
                            {producto.nombre}
                        </Typography>
                    }
                />
                

                <CardMedia
                    component="img"
                    height="auto"
                    image={producto.img}
                    alt={producto.nombre}
                    sx={{marginBottom: 1}}
                />

<Grid container>
                    <Grid item lg={12} md={12} xs={12} sx={{ background: '#ebebeb', padding: 1, display: 'flex', justifyContent: 'space-evenly', marginBottom: 1}}>
                    <Typography variant="body1" component='p' >Precio $ {producto.precio} </Typography>
                    {producto.stock > 0
                        ? <Typography variant="body1" component='p' sx={{fontWeight: 'medium'}}>Stock: {producto.stock} </Typography>
                        : <Typography variant="body1" component='p' sx={{fontWeight: 'medium', color: "red"}}> SIN STOCK</Typography>}
                    </Grid>
                </Grid>
                <CardActions>
                    <Button sx={{ borderRadius: 2 }} fullWidth size="small" variant="contained" component={Link} to={`/item/${producto.id}`}>Ver detalle del producto</Button>
                </CardActions>

            </Card>
        </div >
    )
}

export default Item