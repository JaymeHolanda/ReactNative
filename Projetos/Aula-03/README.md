# ReactNative

## Exercicio 01 - Aula 03 

<img src="/Prints/aula3/aula3-atv1.jpg" alt="Aula 01" style="width: 50%;">
<img src="/Prints/aula3/aula3-atv1.1.jpg" alt="Aula 01" style="width: 50%;">

### Comandos usados para instalar o React Navigation

-` npm install @react-navigation/native`
- `npm install react-native-screens react-native-safe-area-context`
- `npm install @react-navigation/native-stack`

### Criação da pasta Screen e Códigos 

#### Screen - Home 

~~~ js
import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Página Inicial</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen;

~~~

#### Screen - DetailsScreen

~~~ js
import React from 'react';
import { View, Text } from 'react-native';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Aqui é uma segunda página! </Text>
    </View>
  );
}

export default DetailsScreen;

~~~

#### App.js

~~~ js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

~~~

## Exercicio 02 - Aula 03 

### Objetivo:  

- Implementar a funcionalidade para navegar do HomeScreen para o DetailsScreen ao pressionar um botão.

<img src="/Prints/aula3/aule3-atv2.jpg" alt="Aula 01" style="width: 50%;">


## Exercicio 03 - Aula 03 

### Objetivo: 
 
- Objetivo: Modificar o HomeScreen para passar parâmetros para o DetailsScreen e exibi-los.

<img src="/Prints/aula3/aule3-atv2.jpg" alt="Aula 01" style="width: 50%;">
<img src="/Prints/aula3/aula3-atv3.jpg.jpg" alt="Aula 01" style="width: 50%;">
