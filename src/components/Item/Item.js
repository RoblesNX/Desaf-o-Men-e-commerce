import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../../components/ItemCount/ItemCount';

const Item = ({ producto }) => {

    return (
        <div>
            <Card sx={{ maxWidth: 345 }} elevation={5}>
                <CardMedia
                    component="img"
                    height="auto"
                    image={producto.img}
                    alt={producto.descripcion}
                    
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {producto.nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <p>Precio $ {producto.precio}</p>
                        <p>Descripción: {producto.desc}</p>
                        <p>{producto.descripcion}</p>
                        <p>Stock: {producto.stock}</p>
                        <ItemCount stock={producto.stock} />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained"  >Agregar al carrito</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Item