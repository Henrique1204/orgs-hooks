import React from 'react';
import ReactNative from 'react-native';

import Estrela from '../Estela';

const listaEstrelas = new Array(5).fill(null);

const estilos = ReactNative.StyleSheet.create({
  estrelasView: {
    flexDirection: 'row',
  },
});

const Estrelas = ({nome, quantidade: quantidadeInicial, editavel = false}) => {
  const [estrelasAtivas, setEstrelasAtivas] = React.useState(quantidadeInicial);

  const atualizarEstrelas = estrelasNova => {
    setEstrelasAtivas(estrelasAntigas => {
      if (estrelasNova === estrelasAntigas) {
        return 0;
      }

      return estrelasNova;
    });
  };

  return (
    <ReactNative.View style={estilos.estrelasView}>
      {listaEstrelas.map((_, index) => (
        <Estrela
          onPress={() => atualizarEstrelas(index + 1)}
          disabled={!editavel}
          key={`${nome}_${index}`}
          ativo={index < estrelasAtivas}
        />
      ))}
    </ReactNative.View>
  );
};

export default Estrelas;
