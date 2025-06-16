import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px); /* Altura da tela menos a altura do header */
  background-color: #f0f2f5;
  padding: 20px;
`;

export const LoginFormWrapper = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

export const LoginTitle = styled.h2`
  font-size: 2.2em;
  color: #333;
  margin-bottom: 30px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
  font-size: 0.95em;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1em;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

export const ErrorMessage = styled.p`
  color: #dc3545;
  font-size: 0.85em;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const LoginStatus = styled.p`
  margin-top: 20px;
  font-size: 1em;
  color: ${(props) => (props.$success ? '#28a745' : '#dc3545')};
`;