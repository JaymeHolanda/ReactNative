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

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cabecalho: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 30,
    textAlign: 'center',
  },
  entrada: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  itemLista: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ListaDeTarefas;
