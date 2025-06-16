// src/components/ProductDetail/index.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import {
  ProductDetailContainer,
  ProductImageDetail,
  ProductInfo,
  ProductNameDetail,
  ProductPriceDetail,
  ProductDescription,
  AddToCartButtonDetail,
  BackButton,
 
  ButtonGroup, 
} from './styles'; 
import { getProductImageSrc } from '../../utils/imageMapper';

const ProductDetail = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!product) return <p>Produto não encontrado.</p>;

  const imageUrl = getProductImageSrc(product.imageUrl); 

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <ProductDetailContainer>
      <ProductImageDetail src={imageUrl} alt={product.name} />
      <ProductInfo>
        <ProductNameDetail>{product.name}</ProductNameDetail>
        <ProductPriceDetail>R$ {product.price.toFixed(2)}</ProductPriceDetail>
        <ProductDescription>{product.description}</ProductDescription>
        
        {/* Usar o ButtonGroup aqui */}
        <ButtonGroup> {/* ALTERADO: Div normal para Styled Component */}
          <AddToCartButtonDetail onClick={() => addToCart(product)}>
            Adicionar ao Carrinho
          </AddToCartButtonDetail>
          <BackButton onClick={handleGoBack}>Voltar</BackButton> {/* Removido style inline */}
        </ButtonGroup>
      </ProductInfo>
    </ProductDetailContainer>
  );
};

export default ProductDetail;