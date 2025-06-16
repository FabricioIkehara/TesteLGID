import styled from 'styled-components';

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductImage = styled.img`
  width: 150px;
  height: 150px;
//   object-fit: cover;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const ProductName = styled.h3`
  font-size: 1.3em;
  margin-bottom: 10px;
  color: #333;
`;

export const ProductPrice = styled.p`
  font-size: 1.1em;
  color: #007bff;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const AddToCartButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const DetailsLink = styled.button`
  background: none;
  border: 1px solid #007bff;
  color: #007bff;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  margin-top: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;
