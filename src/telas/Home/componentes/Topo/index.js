import React from 'react';
import ReactNative from 'react-native';

import Estilos from './estilos';

import {cerregarTopo} from '../../../../servicos/carregar-dados';

const Topo = () => {
  const [dadosTopo, setDadosTop] = React.useState(null);

  React.useEffect(() => {
    setDadosTop(cerregarTopo());
  }, []);

  if (!dadosTopo) {
    return null;
  }

  return (
    <ReactNative.View style={Estilos.Topo}>
      <ReactNative.Image source={dadosTopo.logo} style={Estilos.Imagem} />

      <ReactNative.Text style={Estilos.BoasVindas}>
        {dadosTopo?.boasVindas}
      </ReactNative.Text>

      <ReactNative.Text style={Estilos.Legenda}>
        {dadosTopo?.legenda}
      </ReactNative.Text>
    </ReactNative.View>
  );
};

export default Topo;
