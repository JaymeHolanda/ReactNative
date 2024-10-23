import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/HomeScreenStyles'; 

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Inicial</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => 
          navigation.navigate('Details', {
            message: 'Olá da HomeScreen!', 
          })
        }
      >
        <Text style={styles.buttonText}>Ir para Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
