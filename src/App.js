import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './components/Home/Home'
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import OrdersContainer from './components/OrdersContainer/OrdersContainer';
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (

    
    <AuthProvider>

      <CartProvider>

        <BrowserRouter>

          <NavBar />

          <Routes>

{/* RUTAS LUEGO DE AGREGAR LOGIN */}

            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

{/* RUTAS NATIVAS */}
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/myorders/:userId' element={<OrdersContainer />} />
            <Route path='/productos/:categoryId' element={<ItemListContainer />} />
            <Route path='*' element={<Navigate to="/" />} />

          </Routes>

        </BrowserRouter>

      </CartProvider>

    </AuthProvider>
  );
}

export default App;
