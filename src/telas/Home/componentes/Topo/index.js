import React from 'react';
import ReactNative from 'react-native';

import Estilos from './estilos';

import {logo} from '../../../../assets';

import Mock from '../../../../mocks/topo';

const Topo = () => {
  return (
    <ReactNative.View style={Estilos.Topo}>
      <ReactNative.Image source={logo} style={Estilos.Imagem} />

      <ReactNative.Text style={Estilos.BoasVindas}>
        {Mock.boasVindas}
      </ReactNative.Text>

      <ReactNative.Text style={Estilos.Legenda}>
        {Mock.legenda}
      </ReactNative.Text>
    </ReactNative.View>
  );
};

export default Topo;
