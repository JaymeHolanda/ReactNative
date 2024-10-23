import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext'; // Caminho correto para o contexto

function HomeScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Usa o tema e a função de alternância

  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#fff' : '#333' }]}>
      <Text style={{ color: theme === 'light' ? '#000' : '#fff' }}>
        Tema Atual: {theme}
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
