import React from 'react';
import ReactNative from 'react-native';

import TopoLista from '../TopoLista';
import ItemCard from '../ItemCard';

import useProdutores from '../../../../hooks/useProdutores';

const Produtores = ({children}) => {
  const dados = useProdutores();

  if (!dados) {
    return null;
  }

  return (
    <ReactNative.FlatList
      data={dados.lista}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={() => (
        <>
          {children}
          <TopoLista>{dados.titulo}</TopoLista>
        </>
      )}
      renderItem={({item}) => <ItemCard {...item} />}
    />
  );
};

export default Produtores;
