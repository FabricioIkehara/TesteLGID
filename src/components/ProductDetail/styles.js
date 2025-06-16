import styled from 'styled-components';

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 40px auto;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
  }
`;

export const ProductImageDetail = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover; // ajusta para caber no quadrado 
  border-radius: 8px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    margin-right: 40px;
    margin-bottom: 0;
  }
`;

export const ProductInfo = styled.div`
  flex: 1;
`;

export const ProductNameDetail = styled.h2`
  font-size: 2.5em;
  margin-bottom: 15px;
  color: #333;
`;

export const ProductPriceDetail = styled.p`
  font-size: 1.8em;
  color: #007bff;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ProductDescription = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  color: #555;
  margin-bottom: 30px;
`;


export const AddToCartButtonDetail = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
  transition: background-color 0.3s ease;
  width: 100%; /* Faz o botão ocupar a largura total do grupo */

  &:hover {
    background-color: #218838;
  }
`;


export const BackButton = styled.button`
  background-color: #6c757d; /* Cor cinza para o botão de voltar */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
  width: 100%; /* Faz o botão ocupar a largura total do grupo */
  /* O gap do ButtonGroup já gerenciará o espaçamento entre os botões */

  &:hover {
    background-color: #5a6268;
  }
`;


export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column; /* Empilha os itens verticalmente */
  gap: 10px; /* Espaço entre os botões */
  margin-top: 20px; /* Espaçamento do grupo de botões com o conteúdo acima */
  width: 100%; /* Garante que o grupo ocupe a largura disponível */
`;