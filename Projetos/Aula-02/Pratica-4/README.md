# ReactNative

## Aula 2 - Atividade 4
_______

### Objetivo:

Criar um layout vertical onde três <View>s ocupam igualmente o espaço disponível na tela. Cada <View> deve ter uma cor de fundo diferente.

### Solução:

Dentro da pasta SRC/Componentes, foi criado um componente chamado LayoutVerticalTresCaixas.js. Esse componente contém três <View>s organizadas verticalmente, cada uma ocupando igualmente o espaço disponível. Cada <View> tem uma cor de fundo diferente para facilitar a visualização.

### Código:

LayoutVerticalTresCaixas.js

~~~~ js
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

~~~~

~~~~ js
import React from 'react';
import LayoutVerticalTresCaixas from './SRC/Componentes/LayoutVerticalTresCaixas';

export default function App() {
  return (
    <LayoutVerticalTresCaixas />
  );
}

~~~~

### Execução da Aula 02 - Atividade 4

<img src="/Prints/aula2-atv.jpg" alt="Aula 01" style="width: 50%;">
