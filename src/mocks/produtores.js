import * as ProdutosAssets from '../assets/produtores';

import gerarNumeroAleatorio from '../util/gerar-numero-aleatorio';

const gerarNome = nome => {
  const caracteres = nome.split('');

  const caracteresFormatados = caracteres.map((char, index) => {
    if (index === 0) {
      return char.toUpperCase();
    }

    if (char.match(/[A-Z]/g)) {
      return ' ' + char;
    }

    return char;
  });

  return caracteresFormatados.join('');
};

const gerarListaRandom = () => {
  return Object.entries(ProdutosAssets).map(([nome, imagem]) => ({
    nome: gerarNome(nome),
    imagem,
    distancia: gerarNumeroAleatorio(1, 500) + 'm',
    estrelas: gerarNumeroAleatorio(1, 5),
  }));
};

const produtores = {
  titulo: 'Produtores',
  lista: gerarListaRandom(),
};

export default produtores;
