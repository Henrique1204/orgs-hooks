import React from 'react';
import ReactNative from 'react-native';

import Estilos from './estilos';
import Estrelas from '../../../../componentes/Estrelas';

const ItemCard = ({nome, imagem, distancia, estrelas}) => {
  const [selecionado, setSelecionado] = React.useState(false);

  return (
    <ReactNative.TouchableOpacity
      style={Estilos.card}
      onPress={() => setSelecionado(prevSelecionado => !prevSelecionado)}>
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
          {distancia}
        </ReactNative.Text>
      </ReactNative.View>
    </ReactNative.TouchableOpacity>
  );
};

export default ItemCard;
