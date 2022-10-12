import { Button, Typography, Stack, Grid } from '@mui/material';
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
    const { user } = useAuthContext()
    const [orderId, setOrderId] = useState(null)

    if (orderId) {
        return (
            <SuccessOrder orderId={orderId} />
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/cart" />
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    return (

        <Formik
            initialValues={{ nombre: "", direccion: "", telefono: "" }}
            validationSchema={Yup.object({
                nombre: Yup.string()
                    .required("Requerido"),
                direccion: Yup.string()
                    .required("Requerido"),
                telefono: Yup.string()
                    .matches(phoneRegExp, 'Telefono incorrecto')
                    .required("Requerido"),
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

                <Stack m={20}>

                    <Typography
                        mb={5}
                        textAlign="center"
                        variant="h3"
                        component='h5'
                    >

                        ¿A dónde enviamos tu compra?

                    </Typography>

                    <Typography
                        mb={5}
                        textAlign="center"
                        variant="h5"
                        component='h5'
                    >

                        Cantidad de productos en tu orden: {cart.length} - Pagás ${cartTotal()}

                    </Typography>

                    <Form>

                        <Grid
                            container
                            direction="column"
                            width="50%"
                            margin="auto"
                        >

                            <Grid item md={12} m={2}>

                                <Field
                                    fullWidth
                                    component={TextField}
                                    name="nombre"
                                    type="nombre"
                                    label="Nombre y apellido"
                                />

                            </Grid>

                            <Grid item md={12} m={2}>
                                <Field fullWidth
                                    component={TextField}
                                    type="direccion"
                                    name="direccion"
                                    label="Direccion"
                                />
                            </Grid>

                            <Grid item md={12} m={2}>
                                <Field fullWidth
                                    component={TextField}
                                    type="telefono"
                                    name="telefono"
                                    label="Telefono"
                                />
                            </Grid>

                        </Grid>

                        <Stack
                            width="48%"
                            margin="auto"
                            mt={2}
                        >

                            <Button
                                variant="contained"
                                color="warning"
                                disabled={isSubmitting}
                                onClick={submitForm}
                                size="large"
                                type="submit"
                            >
                                Enviar

                            </Button>

                        </Stack>

                    </Form>

                </Stack>
            )}
        </Formik>
    );
}

export default Checkout