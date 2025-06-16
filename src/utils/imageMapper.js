// src/utils/imageMapper.js


import camisetaImg from '../assets/images/camiseta.jpg'; 
import canecaImg from '../assets/images/caneca.jpg';     
import mousepadImg from '../assets/images/mousepad.jpg';

//    o nome do arquivo (como está no JSON) para a variável importada.
//    As chaves devem ser os nomes exatos que você colocou ou vai colocar no dbTeste.json

const productImages = {
  'camiseta.jpg': camisetaImg,   
  'caneca.jpg': canecaImg,       
  'mousepad.jpg': mousepadImg,     
  
};

// Função para obter o src da imagem
export const getProductImageSrc = (imageName) => {
  // Criei esse mapa de imagens pois quando as imagens estavam no JSON, buscando pelo public/images
  // o caminho no componente ProductCard não funcionava corretamente. Eles estava adicionando uma barra extra.

  // A lógica abaixo força erro ou null se o imageName não for encontrado no mapeamento.
  return productImages[imageName] || null;
};