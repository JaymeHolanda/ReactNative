import React from 'react';
import { View, StyleSheet } from 'react-native';

const CaixaCentralizada = () => {
  return (
    <View style={estilos.container}>
      <View style={estilos.caixa} />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  caixa: {
    width: 50,
    height: 50,
    backgroundColor: 'blue', 
  },
});

export default CaixaCentralizada;
