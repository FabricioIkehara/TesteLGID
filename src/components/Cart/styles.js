import styled from 'styled-components';

export const CartContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 40px auto;
  max-width: 900px;
`;

export const CartTitle = styled.h2`
  font-size: 2em;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
`;

export const CartItemList = styled.div`
  border-top: 1px solid #eee;
  padding-top: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 15px;
`;

export const ItemName = styled.span`
  font-weight: bold;
  font-size: 1.1em;
  color: #555;
`;

export const ItemPrice = styled.span`
  color: #007bff;
  font-weight: bold;
  margin-left: 20px;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityInput = styled.input`
  width: 60px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  font-size: 1em;
  margin: 0 10px;
`;

export const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  margin-left: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;

export const CartSummary = styled.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid #007bff;
  text-align: right;
`;

export const TotalPrice = styled.p`
  font-size: 1.8em;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

export const CheckoutButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const ClearCartButton = styled.button`
  background-color: #ffc107;
  color: #333;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-right: 15px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0a800;
  }
`;

export const EmptyCartMessage = styled.p`
  text-align: center;
  font-size: 1.2em;
  color: #777;
  margin-top: 50px;
`;