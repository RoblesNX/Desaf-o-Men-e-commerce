import Login from '../components/Login/Login'
import { Routes, Route, Navigate } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import Home from '../components/Home/Home'
import Register from '../components/Register/Register'

const PublicRoutes = () => {
    console.log("rutas públicas")
    
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route path='/productos/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Navigate to="/login" />} />
        </Routes>
    )
}

export default PublicRoutes