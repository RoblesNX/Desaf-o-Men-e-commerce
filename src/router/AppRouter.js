import PrivateRoutes from "./PrivateRoutes"
import NavBar from '../components/NavBar/NavBar'
import Login from '../components/Login/Login'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import Home from '../components/Home/Home'
import Register from '../components/Register/Register'
import OrdersContainer from '../components/OrdersContainer/OrdersContainer'
import WishList from '../components/WishList/WishList'
import Checkout from '../components/Checkout/Checkout'
import { useAuthContext } from '../context/AuthContext'

const AppRouter = () => {

    const { user } = useAuthContext()
    
    return (
        <BrowserRouter>

            <NavBar />

            <Routes>

                <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
                <Route path='/register' element={user ? <Navigate to="/" /> : <Register />} />
                <Route path='/' element={<Home />} />
                <Route path='/productos/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<Navigate to="/login" />} />
                
                <Route element={<PrivateRoutes />}>
                        <Route path='/ordenes' element={<OrdersContainer />} />
                        <Route path='/wishlist' element={<WishList />} />
                        <Route path='/checkout' element={<Checkout />} />
                </Route>
                
            </Routes>

        </BrowserRouter>
    )
}

export default AppRouter


