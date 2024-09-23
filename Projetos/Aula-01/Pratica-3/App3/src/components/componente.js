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