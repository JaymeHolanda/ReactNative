import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const ItemListComponent = () => {
 
  const [items, setItems] = useState(['Item 1', 'Item 2']); 
  const [inputText, setInputText] = useState('');

  
  const addItem = () => {
    if (inputText.trim() !== '') {
      setItems([...items, inputText]); 
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputText}
        placeholder="Digite um novo item"
        onChangeText={setInputText} 
      />
      <Button title="Adicione a lista" onPress={addItem} />

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.itemText}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  itemText: {
    padding: 10,
    fontSize: 18,
  },
});

export default ItemListComponent;
