import React from 'react';
import ReactNative from 'react-native';

import TopoLista from '../TopoLista';
import ItemCard from '../ItemCard';

import {cerregarProdutores} from '../../../../servicos/carregar-dados';

const Produtores = ({children}) => {
  const [dadosProdutores, setDadosProdutores] = React.useState(null);

  React.useEffect(() => {
    setDadosProdutores(cerregarProdutores());
  }, []);

  if (!dadosProdutores) {
    return null;
  }

  return (
    <ReactNative.FlatList
      data={dadosProdutores.lista}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={() => (
        <>
          {children}
          <TopoLista>{dadosProdutores.titulo}</TopoLista>
        </>
      )}
      renderItem={({item}) => <ItemCard {...item} />}
    />
  );
};

export default Produtores;
