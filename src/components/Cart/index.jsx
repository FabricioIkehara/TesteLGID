import React from 'react';
import { useCart } from '../../contexts/CartContext';
import {
  CartContainer,
  CartTitle,
  CartItemList,
  CartItem,
  ItemDetails,
  ItemImage,
  ItemName,
  ItemPrice,
  QuantityControl,
  QuantityInput,
  RemoveButton,
  CartSummary,
  TotalPrice,
  CheckoutButton,
  ClearCartButton,
  EmptyCartMessage
} from './styles';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const handleQuantityChange = (id, e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      updateQuantity(id, value);
    }
  };
  // carrega a quantidade de um produto no carrinho e atualiza o estado do carrinho.

  const handleCheckout = () => {
    alert(`Compra finalizada! Total: R$ ${getTotalPrice().toFixed(2)}`);
    clearCart();
  };

  // Finaliza a compra, exibe o total e limpa o carrinho.

  return (
    <CartContainer>
      <CartTitle>Seu Carrinho de Compras</CartTitle>
      {cartItems.length === 0 ? (
        <EmptyCartMessage>Seu carrinho está vazio.</EmptyCartMessage>
      ) : (
        <>
          <CartItemList>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <ItemDetails>
                  <ItemImage src={item.imageUrl} alt={item.name} />
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>R$ {(item.price * item.quantity).toFixed(2)}</ItemPrice>
                </ItemDetails>
                <QuantityControl>
                  <QuantityInput
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e)}
                  />
                  <RemoveButton onClick={() => removeFromCart(item.id)}>Remover</RemoveButton>
                </QuantityControl>
              </CartItem>
            ))}
          </CartItemList>
          <CartSummary>
            <TotalPrice>Total: R$ {getTotalPrice().toFixed(2)}</TotalPrice>
            <div>
              <ClearCartButton onClick={clearCart}>Limpar Carrinho</ClearCartButton>
              <CheckoutButton onClick={handleCheckout}>Finalizar Compra</CheckoutButton>
            </div>
          </CartSummary>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;