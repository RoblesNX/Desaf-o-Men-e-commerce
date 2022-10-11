import { useState, useEffect } from "react"
import { Container } from '@mui/system'
import Loader from "../Loader/Loader"
import { db } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useParams, Link } from "react-router-dom"
import { Typography, Card, CardMedia, Grid, CardActionArea, CardHeader, Avatar} from "@mui/material"

const RelatedItems = ({ categoria }) => {

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'productos')
        const q = categoria
            ? query(productosRef, where('categoria', '==', categoria))
            : productosRef

        getDocs(q)
            .then((resp) => {
                let productosDB = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                productosDB = productosDB.filter((producto) => {
                    return producto.id !== itemId;
                });
                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoria, itemId])


    return (
        <Container sx={{ marginTop: 10 }}>
            {loading
                ? <Loader />
                : <Container productos={productos} sx={{ marginTop: 5, marginBottom: 15 }}>


                    <Typography variant="h4" component='h5' align="center">
                        Productos similares
                    </Typography>

                    <Container>

                        <Grid container
                            my={4}
                            rowSpacing={10}
                            columnSpacing={10}
                        >

                            {productos.map((prod) => {
                                return <Grid item md={4} key={prod.id}>

                                    <Card
                                        elevation={5}
                                        sx={{
                                            maxWidth: 350,
                                            borderRadius: 4
                                        }}
                                    >
                                        <CardActionArea
                                            component={Link}
                                            to={`/item/${prod.id}`}
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

                                                        {prod.nombre}

                                                    </Typography>
                                                }
                                            />

                                            <CardMedia
                                                component="img"
                                                image={prod.img}
                                                alt={prod.nombre}
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

                                                        Precio $ {prod.precio}

                                                    </Typography>

                                                    {prod.stock > 0
                                                        ? <Typography
                                                            variant="body1"
                                                            component='p'
                                                            fontWeight="medium"
                                                        >

                                                            Stock: {prod.stock}

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

                                </Grid>
                            })}
                        </Grid>

                    </Container>


                </Container>
            }
        </Container>
    )
}

export default RelatedItems