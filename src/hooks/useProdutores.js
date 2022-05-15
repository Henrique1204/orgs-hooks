import React from 'react';

import {cerregarProdutores} from '../servicos/carregar-dados';

const useProdutores = () => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    setDados(cerregarProdutores());
  }, []);

  return dados;
};

export default useProdutores;
