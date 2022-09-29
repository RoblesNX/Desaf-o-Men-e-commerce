import React from 'react'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Container } from '@mui/system';
import Loader from '../Loader/Loader'
import OrderList from '../OrdersList/OrderList'

const OrdersContainer = () => {
    const [ordenes, setOrdenes] = useState([])
    const [loading, setLoading] = useState(true)
    const { userId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        const ordenesRef = collection(db, 'ordenes')

        const q = userId
            ? query(ordenesRef, where('comprador.email', '==', userId))
            : ordenesRef

        getDocs(q)
            .then((resp) => {
                const ordenesDB = resp.docs.map((doc) => doc.data())
                
                setOrdenes(ordenesDB)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [userId])


  return (
    <Container sx={{ marginTop: 12, marginBottom: 10 }}>
            {loading ? <Loader /> : <OrderList ordenes={ordenes} />}
        </Container>
  )
}

export default OrdersContainer