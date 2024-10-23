import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from '../styles/HomeScreenStyles'; // Reutilizando o mesmo estilo do botão

function DetailsScreen({ navigation }) {
  const route = useRoute();
  const { message } = route.params; // Acessando o parâmetro 'message'

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Detalhes</Text>
      <Text style={{ marginTop: 20, fontSize: 18 }}> 

        Mensagem recebida: {message}
        
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()} // Voltar para HomeScreen
      >
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DetailsScreen;
