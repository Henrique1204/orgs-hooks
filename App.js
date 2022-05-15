import React from 'react';
import ReactNative from 'react-native';

import Home from './src/telas/Home';

const Estilos = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return (
    <ReactNative.SafeAreaView style={Estilos.container}>
      <Home />
    </ReactNative.SafeAreaView>
  );
};

export default App;
