# ReactNative

## Aula 2 - Atividade 3

______

### Objetivo:

Criar um layout de três <View>s em linha (row), onde a <View> do meio ocupa o espaço restante. As <View>s da esquerda e da direita devem ter 50 pixels de largura e a mesma altura. Todas devem ter cores de fundo diferentes.

### Solução:

Dentro da pasta SRC/Componentes, foi criado um componente chamado LinhaComTresCaixas.js. Esse componente contém três <View>s organizadas em linha, com as laterais possuindo 50 pixels de largura e a <View> do meio ocupando o restante do espaço. Cada <View> possui uma cor de fundo diferente para facilitar a distinção visual.

### Código:

LinhaComTresCaixas.js

~~~ javascript 
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

~~~  

- Dentro do App.js

~~~ javascript 

import React from 'react';
import LinhaComTresCaixas from './src/components/LinhaComTresCaixas';

export default function App() {
  return (
    <LinhaComTresCaixas />
  );
}


~~~

### Execução da Aula 02 - Atividade 3

<img src="/Prints/Aula2-atv3.jpg" alt="Aula 01" style="width: 50%;">


