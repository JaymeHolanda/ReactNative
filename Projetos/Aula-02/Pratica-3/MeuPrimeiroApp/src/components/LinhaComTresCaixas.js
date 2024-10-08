import React from 'react';
import { View, StyleSheet } from 'react-native';

const LinhaComTresCaixas = () => {
  return (
    <View style={estilos.container}>
      <View style={[estilos.lateral, { backgroundColor: 'red' }]} />
      <View style={[estilos.meio, { backgroundColor: 'green' }]} />
      <View style={[estilos.lateral, { backgroundColor: 'blue' }]} />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  lateral: {
    width: 50,
    height: 100,
  },
  meio: {
    flex: 1, 
    height: 100,
  },
});

export default LinhaComTresCaixas;
