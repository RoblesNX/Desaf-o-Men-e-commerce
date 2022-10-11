import ItemDetail from '../ItemDetail/ItemDetail';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import Loader from '../Loader/Loader'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() => {

        setLoading(true)

        const docRef = doc(db, 'productos', itemId)
        getDoc(docRef)
        .then((doc) => {
            setItem({id: doc.id, ...doc.data()})
        })
        
        .finally(() => {
            setLoading(false)
        })

        }, [itemId])

    return (
        <Container>
            {loading ? <Loader/> : <ItemDetail item={item} />}
        </Container>
    )
}

export default ItemDetailContainer