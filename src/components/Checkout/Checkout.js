import { Box, Button, Typography, Container } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as React from 'react';
import * as Yup from 'yup';
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { db } from "../../firebase/config"
import SuccessOrder from "../SuccessOrder/SuccessOrder"
import Swal from 'sweetalert2'
import { useAuthContext } from '../../context/AuthContext';

const Checkout = () => {

    const { cart, cartTotal, finishOrder } = useCartContext()
    const {user} = useAuthContext()

    const [orderId, setOrderId] = useState(null)

    if (orderId) {
        return (
            <SuccessOrder orderId={orderId} />
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    return (
        <Formik
            initialValues={{ nombre: '', direccion: '', email: '', telefono: '' }}
            validationSchema={Yup.object({
                nombre: Yup.string()
                    .required('Requerido'),
                direccion: Yup.string()
                    .required('Requerido'),
                email: Yup.string()
                    .email('eMail incorrecto')
                    .required('Requerido'),
                telefono: Yup.string()
                    .matches(phoneRegExp, 'Telefono incorrecto')
                    .required('Requerido'),
            })}

            onSubmit={async (values) => {
                const orden = {
                    comprador: values,
                    items: cart,
                    total: cartTotal(),
                    iduser: user.uid,
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

            }}
        >
            {({ submitForm, isSubmitting }) => (

                <Container sx={{ marginTop: 15, maxWidth: '80%'}}>

                    <Typography sx={{ margin: 4 }} variant="h3" component='h5'>Finaliza tu compra</Typography>

                    <Box sx={{ display: 'flex', flexFlow: 'column wrap', margin: 2 }}>
                        <Form >

                            <Field fullWidth sx={{margin: 2}}
                                component={TextField}
                                type="email"
                                name="email"
                                label="eMail"
                            />

                            <br />

                            <Field fullWidth sx={{margin: 2}}
                                component={TextField}
                                name="nombre"
                                type="nombre"
                                label="Nombre y apellido"
                            />

                            <br />

                            <Field fullWidth sx={{margin: 2}}
                                component={TextField}
                                type="direccion"
                                name="direccion"
                                label="Direccion"
                            />

                            <br />

                            <Field fullWidth sx={{margin: 2}}
                                component={TextField}
                                type="telefono"
                                name="telefono"
                                label="Telefono"
                            />

                            <br />

                            <Button fullWidth
                                variant="contained"
                                color="warning"
                                disabled={isSubmitting}
                                onClick={submitForm}
                                sx={{ margin: 2 }}
                                size="large"
                            >
                                Enviar
                            </Button>

                        </Form>
                    </Box>
                </Container>
            )}
        </Formik>
    );
}

export default Checkout