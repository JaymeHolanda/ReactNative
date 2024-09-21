import React from "react";
import { Text, View } from "react-native";

const ComponenteNome = ({ nome }) => {
    return (
      <View>
        <Text> Olá! {nome}! Seja muito bem-vindo! </Text>
      </View>
    );
  };
  
  export default ComponenteNome;
  