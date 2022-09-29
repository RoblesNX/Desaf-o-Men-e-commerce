import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { Container } from '@mui/system';
import Loader from '../Loader/Loader'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'productos')
        const q = categoryId
            ? query(productosRef, where('categoria', '==', categoryId))
            : productosRef

            

        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <Container sx={{ marginTop: 12, marginBottom: 10 }}>
            {loading ? <Loader /> : <ItemList productos={productos} />}
        </Container>
    );
}

export default ItemListContainer

