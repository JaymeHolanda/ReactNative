import React from 'react';
import { ThemeProvider } from './context/ThemeContext'; // Importar o ThemeProvider corretamente
import HomeScreen from './screens/HomeScreen'; // Tela Principal

function App() {
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  );
}

export default App;
