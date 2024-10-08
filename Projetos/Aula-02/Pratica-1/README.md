# ReactNative

Não foi necessário componentizar. 

# Aula 2 - Atividade 1

# Objetivo:

 Criar um layout vertical que contém três <View>s, cada uma com altura de 100 pixels e largura completa da tela. As **<View>s** devem ter cores de fundo diferentes para distingui-las visualmente.

# Solução:

Dentro da pasta SRC/Components, foi criado um componente chamado LayoutComponent.js. Este componente contém três **<View>s** empilhadas verticalmente, cada uma com uma altura de 100 pixels e largura total da tela, e cores de fundo diferentes para facilitar a distinção.


- Dentro do App.js

~~~ javascript 

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: 'green' }] } />
      <View style={[styles.box, { backgroundColor: 'blue' }]} />
      <View style={[styles.box, { backgroundColor: 'yellow' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: '100%',
    marginBottom: 10,
  },
});

~~~

### Execução da Aula 02 - Atividade 1 

<img src="/Prints/aula2-atv1.jpg" alt="Aula 01" style="width: 50%;">


