import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, CardHeader, Avatar, Card, CardMedia, CardActions } from '@mui/material';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';


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
                    subheader={`Stock: ${producto.stock} - Precio $ ${producto.precio} `}

                />
                <CardMedia
                    component="img"
                    height="auto"
                    image={producto.img}
                    alt={producto.nombre}

                />

                <CardActions>
                    <Button sx={{borderRadius: 2}} fullWidth size="small" variant="contained" component={Link} to={`/item/${producto.id}`}>Ver detalle del producto</Button>
                </CardActions>

            </Card>
        </div >
    )
}

export default Item