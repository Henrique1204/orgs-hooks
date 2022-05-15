import React from 'react';
import ReactNative from 'react-native';

import Estilos from './estilos';

const ItemCard = ({nome, imagem, distancia, estrelas}) => {
  return (
    <ReactNative.View style={Estilos.card}>
      <ReactNative.Image
        source={imagem}
        accessibilityLabel={nome}
        style={Estilos.imagem}
      />

      <ReactNative.View style={Estilos.informacoes}>
        <ReactNative.Text style={Estilos.nome}>{nome}</ReactNative.Text>

        <ReactNative.Text style={Estilos.distancia}>
          {distancia}
        </ReactNative.Text>
      </ReactNative.View>
    </ReactNative.View>
  );
};

export default ItemCard;
