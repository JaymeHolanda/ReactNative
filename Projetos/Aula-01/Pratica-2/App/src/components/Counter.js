import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Contador: {count}</Text>

      
      <Button
        title="Incrementar"
        onPress={() => setCount(count + 1)}
        color="Blue" 
      />

    
      <View style={{ margin: 10 }} />

    
      <Button
        title="Decrementar"
        onPress={() => setCount(count - 1)}
        color="red" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Counter;
