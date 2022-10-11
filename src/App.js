
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext'
import { WishListProvider } from './context/WishListContext';
import AppRouter from './router/AppRouter';

function App() {
  return (

    <AuthProvider>

      <WishListProvider>

        <CartProvider>

          <AppRouter />

        </CartProvider>

      </WishListProvider>

    </AuthProvider>

  );
}

export default App;
