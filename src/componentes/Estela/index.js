import React from 'react';
import ReactNative from 'react-native';

import {estrela, estrelaCinza} from '../../assets';

const estilos = ReactNative.StyleSheet.create({
  estrela: editavel => ({
    width: editavel ? 36 : 12,
    height: editavel ? 36 : 12,
  }),
});

const Estrela = ({disabled, onPress, ativo}) => {
  const imagemEstrela = ativo ? estrela : estrelaCinza;

  return (
    <ReactNative.TouchableOpacity onPress={onPress} disabled={disabled}>
      <ReactNative.Image
        source={imagemEstrela}
        style={estilos.estrela(!disabled)}
      />
    </ReactNative.TouchableOpacity>
  );
};

export default Estrela;
