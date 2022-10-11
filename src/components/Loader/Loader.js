import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Stack } from '@mui/material/';

const Loader = () => {
  return (
    <Stack justifyContent='center' alignItems="center" my={12}>
      <CircularProgress />
    </Stack>
  );
}

export default Loader