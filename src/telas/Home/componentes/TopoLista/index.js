import React from 'react';
import ReactNative from 'react-native';

import Estilos from './estilos';

const TopoLista = ({children}) => {
  return (
    <ReactNative.Text style={Estilos.TopoLista}>{children}</ReactNative.Text>
  );
};

export default TopoLista;
