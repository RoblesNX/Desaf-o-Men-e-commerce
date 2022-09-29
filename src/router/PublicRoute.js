import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Cart from '../components/Cart/Cart'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Register from '../components/Register/Register'

const PrivateRoute = () => {
    console.log("Rutas publicas")
    
    return (

        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/productos/:categoryId' element={<ItemListContainer />} />
            <Route path='*' element={<Navigate to="/" />} />

        </Routes>

    )
}

export default PrivateRoute