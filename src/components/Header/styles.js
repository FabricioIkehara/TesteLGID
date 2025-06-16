import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white; /* Cor padrão do texto do header */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);


  h1 {
    margin: 0; /* Remover margem padrão do h1 */
    
    a { 
      color: white; 
      text-decoration: none; 
      transition: color 0.3s ease;
      font-family: 'Roboto Mono', "arial", sans-serif; 

      &:hover {
        color: #ffff00; /* Cor amarela no hover */
      }
    }
  }
`;

export const Nav = styled.nav`
  a {
    color: white;
    margin-left: 20px;
    font-size: 1.1em;
    transition: color 0.3s ease;

    &:hover {
      color: #61dafb;
    }
  }
`;

export const CartCount = styled.span`
  background-color: #61dafb;
  color: #282c34;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 0.8em;
  margin-left: 5px;
`;

export const AuthButton = styled.button`
  background-color: ${props => props.$logout ? '#dc3545' : '#61dafb'};
  color: ${props => props.$logout ? 'white' : '#282c34'};
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-left: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.$logout ? '#c82333' : '#4fa3d7'};
  }
`;