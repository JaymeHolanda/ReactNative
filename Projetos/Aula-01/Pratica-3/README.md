#  ReactNative 

## Criando a pasta SRC

Os componentes ficam dentro da pasta SRC. Então foi criado esta pasta e em seguida a pasta Components. 

## Aula 1 - Atividade 2 

- **Objetivo:** Criar um componente que inclui um **TextInput** para entrada de texto e um **Text** para exibir o texto digitado. Use useState para armazenar e atualizar o valor do texto

### Solução: 

Criando um componente de nome `meucompo` onde possui uma função de incremento com 2 botões

- Dentro do `Counter.js`

~~~ javascript 
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const MeuComponente = () => {
  const [text, setText] = useState('');

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Escreva seu texto aqui:"
        value={text}
        onChangeText={handleTextChange}
        style={styles.textInput}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '80%',
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default MeuComponente;
~~~

- Dentro do App.js

~~~ javascript 


export default function App() {
  return (
    <View style={styles.container}>
      <MeuComponente />
      <StatusBar style="auto" />
    </View>
  );
}



~~~

### Execução da Aula 02 

<img src="/Prints/aula 03.2.jpg" alt="Aula 03" style="width: 50%;">
<img src="/Prints/aula 03.1.jpg" alt="Aula 03" style="width: 50%;">