import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: 'green' }] } />
      <View style={[styles.box, { backgroundColor: 'blue' }]} />
      <View style={[styles.box, { backgroundColor: 'yellow' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: '100%',
    marginBottom: 10,
  },
});
