import * as React from 'react';
import { useState } from "react";
import { Button, ButtonGroup } from '@mui/material';
import { Container } from "@mui/system";

const ItemCount = ({ stock }) => {
    const [counter, setCounter] = useState(0);
    const handleSumar = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    };

    const handleRestar = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    return (
        <Container sx={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
            <ButtonGroup sx={{ my: 2 }}variant="contained" size='smaill' aria-label="outlined primary button group">
                <Button sx={{ px: 3 }} onClick={handleRestar}>-</Button>
                <Button variant="outlined" sx={{ px: 3 }}>{counter}</Button>
                <Button sx={{ px: 3 }} onClick={handleSumar}>+</Button>
            </ButtonGroup>
            <Button color="warning" size="small" variant="contained" sx={{ px: 2, py: 1 }}>Agregar al carrito</Button>
        </Container>
    );
};

export default ItemCount;