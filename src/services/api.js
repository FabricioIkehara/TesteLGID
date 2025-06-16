import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export default api;

//para simular a requisição de produtos, você pode usar o JSON Server ou qualquer outro serviço de mock de API.