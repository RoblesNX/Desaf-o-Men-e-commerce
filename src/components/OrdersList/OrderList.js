import React from 'react'
import { Box, Container, Typography } from "@mui/material"
import Orders from '../Orders/Orders'

const OrderList = ({ ordenes = [] }) => {
    return (
        <Container>
            <Typography variant="h3" sx={{ padding: 2 }}>
                Historial de pedidos
            </Typography>
            {ordenes.map((order, index) => {
                return <Box key={index}>
                    <Orders order={order} />
                </Box>
            })}
        </Container>
    )
}

export default OrderList