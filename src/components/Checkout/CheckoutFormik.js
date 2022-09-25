import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { db } from "../../firebase/config"
import { Button, Container, Typography, Box, TextField } from '@mui/material'
import SuccessOrder from "../SuccessOrder/SuccessOrder"
import Swal from 'sweetalert2'


const Checkout = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }

        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos')
        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))

        const productos = await getDocs(q)

        const outOfStock = []

        productos.docs.forEach(doc => {
            const itemInCart = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.cantidad
                })
            } else {
                outOfStock.push(itemInCart)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordenesRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            finishOrder()
                        })
                })
        } else {

            Swal.fire({
                title: "Hay un problema con tu compra:",
                text: (`Los siguientes items no están en stock:
                 ${(outOfStock.map((item) => (item.nombre)))}`),
                icon: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar'
            })
        }

    }

    if (orderId) {
        return (
            <SuccessOrder orderId={orderId} />
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <Container sx={{ marginTop: 15 }}>
            <Typography sx={{ padding: 5 }} variant="h4" component='h5'>Checkout</Typography>

            <Box sx={{ display: 'flex', flexFlow: 'column wrap', margin: 2 }} component="form" noValidate
                autoComplete="off" onSubmit={handleSubmit}>

                <TextField sx={{ margin: 2 }}
                    name="nombre"
                    onChange={handleTextFieldChange}
                    value={values.nombre}
                    type={'text'}
                    placeholder="Tu nombre y apellido"
                />

                <TextField sx={{ margin: 2 }}
                    name="email"
                    onChange={handleTextFieldChange}
                    value={values.email}
                    type={'email'}
                    placeholder="Email"
                />

                <TextField sx={{ margin: 2 }}
                    name="direccion"
                    onChange={handleTextFieldChange}
                    value={values.direccion}
                    type={'text'}
                    placeholder="Dirección"
                />

                <TextField sx={{ margin: 2 }}
                    required
                    name="celular"
                    onChange={handleTextFieldChange}
                    value={values.celular}
                    type={'number'}
                    placeholder="Tu número de celular"
                />

                <Button sx={{ margin: 3 }} type="submit" variant="contained" size='small' color='warning'>Enviar</Button>

            </Box>


        </Container>
    )
}

export default Checkout
