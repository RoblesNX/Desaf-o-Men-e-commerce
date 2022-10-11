import * as React from 'react';
import { Button, ButtonGroup, Grid } from '@mui/material';


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

    <Grid container
      display="flex"
      justifyContent="center"
      alignItems="center"
    >

      <Grid item md={12}>

        <ButtonGroup
          fullWidth
          variant="contained"
          sx={{ my: 2 }} >

          <Button sx={{ px: 3 }} onClick={handleRestar}> - </Button>
          <Button variant="outlined" sx={{ px: 3 }}> {counter} </Button>
          <Button sx={{ px: 3 }} onClick={handleSumar}> + </Button>

        </ButtonGroup>

      </Grid>

      <Grid item md={12}>
        <Button
          fullWidth
          color="success"
          size="medium"
          variant="contained"
          sx={{ px: 2, py: 1 }}
          disabled={counter === 0}
          onClick={handleAgregar}
        >

          Agregar al carrito
          
        </Button>
      </Grid>

    </Grid>
  );
};

export default ItemCount;