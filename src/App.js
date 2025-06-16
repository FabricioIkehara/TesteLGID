import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider, useAuth } from './contexts/AuthContext'; // Importe AuthProvider e useAuth
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import Home from './pages/Home';
import Product from './pages/Product';
import CartPage from './pages/CartPage';
import Login from './pages/Login'; // Importe a página de Login

// Componente para rotas protegidas
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};
//logica para o app iniciar o login.


function App() {
  return (
    <Router>
      <AuthProvider> 
        <CartProvider> 
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/product/:id"
              element={
                <PrivateRoute>
                  <Product />
                </PrivateRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <CartPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;