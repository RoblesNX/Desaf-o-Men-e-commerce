import * as React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { Container } from "@mui/system";


const ItemCount = ({ max, counter, handleAgregar, setCantidad }) => {

  const handleRestar = () => {
    if (counter > 0) {
      setCantidad(counter - 1);
    }
  };

  const handleSumar = () => {
    if (counter < max) {
      setCantidad(counter + 1);
    }
  };

  return (
    <Container sx={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
      <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group" sx={{ my: 2 }} >
        <Button sx={{ px: 3 }} onClick={handleRestar}>-</Button>
        <Button variant="outlined" sx={{ px: 3 }}>{counter}</Button>
        <Button sx={{ px: 3 }} onClick={handleSumar}>+</Button>
      </ButtonGroup>
      <Button fullWidth color="warning" size="small" variant="contained" sx={{ px: 2, py: 1 }} disabled={counter === 0} onClick={handleAgregar}>Agregar al carrito</Button>
    </Container>
  );
};

export default ItemCount;