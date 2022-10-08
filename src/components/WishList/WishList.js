import { Button, Divider, Typography, Box } from '@mui/material'
import { Container } from '@mui/system'
import { useWishListContext } from '../../context/WishListContext'
import DeleteIcon from '@mui/icons-material/Delete';
import EmptyWishList from '../EmptyWishList/EmptyWishList';

const WishList = () => {
  
  const { wishList, removeItemWishList } = useWishListContext()

  if (wishList.length === 0) {
    return (
      <EmptyWishList />
    )
  }

  return (
    <Container sx={{ marginTop: 15, display: 'flex', flexFlow: 'column', justifyContent: 'center' }}>
      <Typography variant="h2" component='h2' sx={{ padding: 2 }} >
        Lista de productos deseados
      </Typography>

      <Divider />

      {wishList.map((item) => (
        <Container key={item.id} >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ width: "10%", padding: 2 }} component='img' src={item.img} alt={item.name} />
            <Typography sx={{ padding: 2 }} variant="h5" component='h5' >{item.nombre} </Typography>
            <Typography sx={{ padding: 2 }} variant="h6" component='h6' >Precio $ {item.precio} </Typography>
            <Button sx={{ margin: 1 }} variant="contained" size='small' color='error' onClick={() => removeItemWishList(item.id)}>
              <DeleteIcon />
            </Button>
          </Box>
          <Divider />
        </Container>
      ))}
    </Container>
  )
}

export default WishList