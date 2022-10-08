import { Box } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'
import { Button, Divider } from '@mui/material'
import { Link } from 'react-router-dom'

const EmptyWishList = () => {
    return (
        <Box>
            <Typography sx={{ marginTop: 15, marginBottom: 3 }} variant="h2" component='h3' align='center'>Tu lista de deseos esta vacia</Typography>
            <Divider sx={{ marginRight: 10, marginLeft: 10 }}/>
            <Box sx={{display: 'flex', justifyContent: 'center', margin: 3 }} > <Button variant='contained' component={Link} to='/'>Ir al home</Button>
            </Box>
        </Box>
    )
}

export default EmptyWishList