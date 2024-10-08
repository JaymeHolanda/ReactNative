# Aula 2 - Atividade 5

## Objetivo:

Desenvolver um layout simples para um aplicativo de lista de tarefas que inclua um cabeçalho, uma área para adicionar novas tarefas e uma lista de tarefas adicionadas.

### Estrutura do Projeto:

#### Cabeçalho: Mostrará o título do aplicativo.

Área de Entrada de Tarefa: Um campo de texto onde o usuário pode digitar o nome de uma nova tarefa e um botão para adicionar a tarefa à lista.
Lista de Tarefas: Área onde as tarefas adicionadas serão listadas.
### Solução:

Dentro da pasta SRC/Componentes, foi criado um componente chamado ListaDeTarefas.js. Esse componente contém o layout de uma lista de tarefas com uma área para o usuário adicionar novas tarefas, e uma lista onde as tarefas inseridas são exibidas.

### Código:

- ListaDeTarefas.js

~~~ js 
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const ListaDeTarefas = () => {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.length > 0) {
      setTarefas([...tarefas, { key: String(tarefas.length + 1), nome: tarefa }]);
      setTarefa('');
    }
  };

  return (
    <View style={estilos.container}>
      {/* Cabeçalho */}
      <Text style={estilos.cabecalho}>Lista de Tarefas</Text>
      
      {/* Área de Entrada de Tarefa */}
      <TextInput
        style={estilos.entrada}
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChangeText={setTarefa}
      />
      <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />
      
      {/* Lista de Tarefas */}
      <FlatList
        data={tarefas}
        renderItem={({ item }) => (
          <View style={estilos.itemLista}>
            <Text>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
};
~~~


- App 

~~~ js 
import React from 'react';
import ListaDeTarefas from './src/components/ListaDeTarefa';

export default function App() {
  return (
    <ListaDeTarefas />
  );
}

~~~

<img src="/Prints/aula2-atividade5.jpg" alt="Aula 01" style="width: 50%;">