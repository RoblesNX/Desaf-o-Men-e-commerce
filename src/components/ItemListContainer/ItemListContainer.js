import { useEffect, useState } from 'react';
import getData from '../../helpers/getData';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { Container } from '@mui/system';
import Loader from '../Loader/Loader'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        getData()
            .then((res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos(res.filter((product) => product.categoria === categoryId))
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <Container sx={{marginTop: 12, marginBottom: 10}}>
            {loading ?  <Loader/> :  <ItemList productos={productos}  />}
        </Container>
    );
}

export default ItemListContainer

