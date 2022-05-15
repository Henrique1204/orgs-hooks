import React from 'react';
import ReactNative from 'react-native';

import Estilos from './estilos';

import Logo from '../../../../assets/logo.png';

const Topo = () => {
  return (
    <ReactNative.View style={Estilos.Topo}>
      <ReactNative.Image source={Logo} style={Estilos.Imagem} />

      <ReactNative.Text style={Estilos.BoasVindas}>Olá, Paulo</ReactNative.Text>

      <ReactNative.Text style={Estilos.Legenda}>
        Encontro os melhores produtores
      </ReactNative.Text>
    </ReactNative.View>
  );
};

export default Topo;
