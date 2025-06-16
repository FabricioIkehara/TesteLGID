// src/components/ProductCard/index.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { Card, ProductImage, ProductName, ProductPrice, AddToCartButton, DetailsLink } from './styles';
import { getProductImageSrc } from '../../utils/imageMapper'; 

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  const imageUrl = getProductImageSrc(product.imageUrl); 

  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <ProductImage src={imageUrl} alt={product.name} /> {/* imagem  */}
      </Link>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
      <AddToCartButton onClick={() => addToCart(product)}>
        Adicionar ao Carrinho
      </AddToCartButton>
      <Link to={`/product/${product.id}`}>
        <DetailsLink>Ver Detalhes</DetailsLink>
      </Link>
    </Card>
  );
};

export default ProductCard;