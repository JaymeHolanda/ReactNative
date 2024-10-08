import React from 'react';
import { View, StyleSheet } from 'react-native';

const LayoutVerticalTresCaixas = () => {
  return (
    <View style={estilos.container}>
      <View style={[estilos.caixa, { backgroundColor: 'red' }]} />
      <View style={[estilos.caixa, { backgroundColor: 'green' }]} />
      <View style={[estilos.caixa, { backgroundColor: 'blue' }]} />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  caixa: {
    flex: 1, // Cada <View> ocupa o mesmo espaço
    margin: 5, // Pequeno espaçamento entre as caixas
  },
});

export default LayoutVerticalTresCaixas;
