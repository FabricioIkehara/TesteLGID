import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext'; // Importe o AuthContext
import { HeaderContainer, Nav, CartCount, AuthButton } from './styles'; // Adicione AuthButton

const Header = () => {
  const { cartItems } = useCart();
  const { isAuthenticated, logout, user } = useAuth(); // Use o AuthContext
  const navigate = useNavigate();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redireciona para a página de login após o logout
  };

  return (
    <HeaderContainer>
      <h1><Link to="/">Loja Teste LGID</Link></h1>
      <Nav>
        <Link to="/">Produtos</Link>
        <Link to="/cart">
          Carrinho <CartCount>{totalItems}</CartCount>
        </Link>
        {isAuthenticated ? (
          <>
            <span>Olá, {user?.username}!</span> {/* Exibe o nome do usuário logado */}
            <AuthButton $logout onClick={handleLogout}>Sair</AuthButton>
          </>
        ) : (
          <Link to="/login">
            <AuthButton>Entrar</AuthButton>
          </Link>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;