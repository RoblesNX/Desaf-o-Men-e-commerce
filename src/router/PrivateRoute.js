import { Routes, Route, Navigate} from 'react-router-dom'
import Checkout from '../components/Checkout/Checkout';
import WishList from '../components/WishList/WishList'
import OrdersContainer from '../components/OrdersContainer/OrdersContainer'
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Cart from '../components/Cart/Cart'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Register from '../components/Register/Register'

const PrivateRoute = () => {

    console.log("Rutas privadas")
    
    return (
        
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/productos/:categoryId' element={<ItemListContainer />} />
            <Route path='*' element={<Navigate to="/" />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/myorders' element={<OrdersContainer />} />

        </Routes>

    )
}

export default PrivateRoute