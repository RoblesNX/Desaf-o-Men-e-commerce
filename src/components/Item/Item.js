import * as React from 'react';
import { Link } from 'react-router-dom';
import { CardHeader, Avatar, Card, CardMedia, Typography, Grid, CardActionArea } from '@mui/material';


const Item = ({ producto }) => {

    return (

        <Card
            elevation={5}
            sx={{
                maxWidth: 350,
                borderRadius: 4
            }}
        >
            <CardActionArea
                component={Link}
                to={`/item/${producto.id}`}
            >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }}>
                            NS
                        </Avatar>
                    }

                    title={
                        <Typography
                            variant="body"
                            component='p'
                            fontWeight="medium"
                            fontSize="18px"
                        >

                            {producto.nombre}

                        </Typography>
                    }
                />

                <CardMedia
                    component="img"
                    image={producto.img}
                    alt={producto.nombre}
                    sx={{ mb: 1 }}
                />

                <Grid container >

                    <Grid item
                        md={12}
                        p={2}
                        bgcolor="#ebebeb"
                        display="flex"
                        justifyContent="space-evenly"
                    >
                        <Typography
                            variant="body1"
                            component='p'
                            fontWeight="medium"
                        >

                            Precio $ {producto.precio}

                        </Typography>

                        {producto.stock > 0
                            ? <Typography
                                variant="body1"
                                component='p'
                                fontWeight="medium"
                            >

                                Stock: {producto.stock}

                            </Typography>

                            : <Typography
                                variant="body1"
                                component='p'
                                fontWeight="medium"
                                color="red"
                                textTransform="uppercase"
                            >

                                Sin Stock

                            </Typography>}

                    </Grid>

                </Grid>

            </CardActionArea>

        </Card>

    )
}

export default Item