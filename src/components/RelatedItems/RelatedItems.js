import { useState, useEffect } from "react"
import { Container } from '@mui/system'
import Loader from "../Loader/Loader"
import { db } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useNavigate, useParams} from "react-router-dom"
import { Typography, Card, CardMedia, CardContent, Grid } from "@mui/material"

const RelatedItems = ({categoria}) => {

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
                productosDB =  productosDB.filter((producto) => {
                    return producto.id !== itemId;
                 });
                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoria, itemId])

    const navigate = useNavigate()
    const handleNavigation = (prodId) => {
        navigate(`/item/${prodId}`)
    }

    return (
        <Container sx={{ marginTop: 10 }}>
            {loading
                ? <Loader />
                : <Container productos={productos} sx={{ marginTop: 5, marginBottom: 15 }}>
                    <Typography variant="h4" component='h5' align="center">
                        Productos Relacionados
                    </Typography>
                    <Container>
                        <Grid container my={4} spacing={4}>
                            {productos.map((prod) => {
                                return <Grid item md={4} key={prod.id}>

                                    <Card>

                                    <CardContent>{prod.nombre}</CardContent>

                                    <CardMedia 
                                    onClick={() => handleNavigation(prod.id)} 
                                    component="img" 
                                    image={prod.img} 
                                    alt={prod.descripcion} 
                                    sx={{ borderRadius: `10px` }} />

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