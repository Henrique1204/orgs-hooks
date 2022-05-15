import React from 'react';
import ReactNative from 'react-native';

import Estilos from './estilos';
import Estrelas from '../../../../componentes/Estrelas';

const reducer = state => !state;

const gerarDistanciaEmMetros = distancia => {
  return `${distancia}m`;
};

const ItemCard = ({nome, imagem, distancia, estrelas}) => {
  const [selecionado, inverterSelecionado] = React.useReducer(reducer, false);

  const distanciaEmMetros = React.useMemo(
    () => gerarDistanciaEmMetros(distancia),
    [distancia],
  );

  return (
    <ReactNative.TouchableOpacity
      style={Estilos.card}
      onPress={inverterSelecionado}>
      <ReactNative.Image
        source={imagem}
        accessibilityLabel={nome}
        style={Estilos.imagem}
      />

      <ReactNative.View style={Estilos.informacoes}>
        <ReactNative.View>
          <ReactNative.Text style={Estilos.nome}>{nome}</ReactNative.Text>

          <Estrelas nome={nome} quantidade={estrelas} editavel={selecionado} />
        </ReactNative.View>

        <ReactNative.Text style={Estilos.distancia}>
          {distanciaEmMetros}
        </ReactNative.Text>
      </ReactNative.View>
    </ReactNative.TouchableOpacity>
  );
};

export default ItemCard;
