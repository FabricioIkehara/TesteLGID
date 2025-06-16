import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail';
import api from '../../services/api';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchProduct = async () => {
    try {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
      console.log('1. Produto carregado em Product/index.jsx:', response.data); // Olhe aqui!
      setLoading(false);
    } catch (err) {
      setError('Produto não encontrado ou erro ao carregar.');
      setLoading(false);
    }
  };
  fetchProduct();
}, [id]);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '50px', fontSize: '1.2em' }}>Carregando detalhes do produto...</p>;
  }

  if (error) {
    return <p style={{ textAlign: 'center', marginTop: '50px', color: 'red', fontSize: '1.2em' }}>{error}</p>;
  }

  return <ProductDetail product={product} />;
};

export default Product;