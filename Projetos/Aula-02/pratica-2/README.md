# ReactNative


## Aula 2 - Atividade 2

### Objetivo:

Dentro de um container <View>, posicionar um item filho <View> no centro vertical e horizontalmente. O item filho deve ter dimensões de 50x50 pixels e uma cor de fundo.

### Solução:

Dentro da pasta SRC/Componentes, foi criado um componente chamado CaixaCentralizada.js. Esse componente contém um layout que posiciona um item <View> de 50x50 pixels no centro da tela, tanto vertical quanto horizontalmente. O item possui uma cor de fundo para facilitar sua visualização.

### Componente - CaixaCentralizada.js

~~~ js
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
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center',     // Centraliza horizontalmente
  },
  caixa: {
    width: 50,
    height: 50,
    backgroundColor: 'blue', // Cor de fundo
  },
});

export default CaixaCentralizada;

~~~

### Dentro de App 

~~~ js 
import React from 'react';
import CaixaCentralizada from './SRC/Componentes/CaixaCentralizada';

export default function App() {
  return (
    <CaixaCentralizada />
  );
}
~~~

### Execução da Aula 02 - Atividade 2 

<img src="/Prints/aula2-atv2.jpg" alt="Aula 01" style="width: 50%;">


