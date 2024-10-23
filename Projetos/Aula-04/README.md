# Aula 04 

## Objetivos: 

Toggle de `Tema Claro/Escuro` com Context API no React Native

## Prints: 

<img src="/Prints/aula4/aula4-1.jpg" alt="Aula 01" style="width: 50%;">

<img src="/Prints/aula4/aula4-2.jpg" alt="Aula 01" style="width: 50%;">

## Arquivos Principais: 

### ThemeContext.Js

Este arquivo cria o contexto de tema e o provedor que gerencia o estado do tema.

~~~ js 
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
~~~


### HomeScreen 

A tela principal exibe o tema atual e tem um botão para alternar entre os temas.

~~~ js 
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

function HomeScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);

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

~~~

### App.js 

O arquivo App.js envolve o aplicativo com o ThemeProvider para que o estado do tema seja acessível em todos os componentes.

~~~ js 
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  );
}

export default App;
~~~