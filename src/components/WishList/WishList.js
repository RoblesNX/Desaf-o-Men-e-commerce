import { Button, Divider, Typography, Box, Grid, Stack } from '@mui/material'
import { useWishListContext } from '../../context/WishListContext'
import DeleteIcon from '@mui/icons-material/Delete';
import EmptyWishList from '../EmptyWishList/EmptyWishList';
import { Link } from 'react-router-dom';

const WishList = () => {

  const { wishList, removeItemWishList } = useWishListContext()

  if (wishList.length === 0) {
    return (
      <EmptyWishList />
    )
  }

  return (

    <Stack m={20}>

      <Typography
        variant="h2"
        component="h3"
        fontWeight="medium"
        mb={6}
        textAlign="center"
      >
        Tu lista de deseos

      </Typography>

      <Divider />

      {wishList.map((item) => (
        <Box key={item.id}>

          <Grid container
            m={1}
            justifyContent="space-between"
            alignItems="center"
          >

            <Grid item
              md={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
              component={Link}
              to={`/item/${item.id}`}
            >
              <Box
                maxWidth="60%"
                component='img'
                src={item.img}
                alt={item.name}
              />

            </Grid>

            <Grid item
              md={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h6"> {item.nombre} </Typography>

            </Grid>

            <Grid item
              md={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                sx={{ margin: 1 }}
                variant="contained"
                size='small'
                color='error'
                onClick={() => removeItemWishList(item.id)}
              >

                <DeleteIcon />

              </Button>

            </Grid>

          </Grid>

          <Divider />

        </Box>

      ))}

    </Stack>

  )
}

export default WishList