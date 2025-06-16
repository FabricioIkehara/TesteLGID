import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import api from '../../services/api';
import { HomeContainer, ProductGrid, PageTitle } from './styles';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar produtos. Tente novamente mais tarde.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '50px', fontSize: '1.2em' }}>Carregando produtos...</p>;
  }

  if (error) {
    return <p style={{ textAlign: 'center', marginTop: '50px', color: 'red', fontSize: '1.2em' }}>{error}</p>;
  }

  return (
    <HomeContainer>
      <PageTitle>Nossos Produtos</PageTitle>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </HomeContainer>
  );
};

export default Home;