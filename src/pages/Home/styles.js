import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

export const PageTitle = styled.h2`
  text-align: center;
  font-size: 2.5em;
  color: #333;
  margin-bottom: 40px;
  padding-top: 20px;
`;