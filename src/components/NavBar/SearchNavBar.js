import * as React from 'react';
import { useState, useEffect } from 'react';
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Container } from '@mui/system'
import { useLocation } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import ItemList from '../../components/ItemList/ItemList'
import { Typography } from '@mui/material'




const SearchNavBar = () => {

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let search = useQuery().get('name')

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

        const catalogoRef = collection(db, 'productos')
        const q = query(catalogoRef, where('nombre', '==', search))

        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [search])

    return (

        <Container sx={{ marginTop: 12, marginBottom: 10 }}>
            {productos.length !== 0
                ? (loading
                    ? <Loader />
                    : <ItemList productos={productos} />)
                : (loading
                    ? <Loader />
                    : <Typography variant="h1">No hay productos que coincidan con tu búsqueda</Typography>)}
        </Container>

    );
}

export default SearchNavBar