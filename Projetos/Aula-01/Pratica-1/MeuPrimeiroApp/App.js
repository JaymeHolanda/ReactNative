import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComponenteNome from './src/components/ComponenteNome';

export default function App() {
  return (
    <View style={styles.container}>
      <ComponenteNome nome="Jayme" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
