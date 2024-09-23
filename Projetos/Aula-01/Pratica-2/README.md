#  ReactNative 

## Criando a pasta SRC

Os componentes ficam dentro da pasta SRC. Então foi criado esta pasta e em seguida a pasta Components. 

## Aula 1 - Atividade 2 

- **Objetivo:** Criar um componente que exibe um numer, inicialmente 0, e dois botões de incrementar e Descrementar o valor usando **useState** .

### Solução: 

Criando um componente de nome `Counter.js` onde possui uma função de incremento com 2 botões

- Dentro do `Counter.js`

~~~ javascript 
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
~~~

- Dentro do App.js

~~~ javascript 

export default function App() {
  return (
    <View style={styles.container}>
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

~~~

### Execução da Aula 02 

<img src="/Prints/aula 02.jpg" alt="Aula 02" style="width: 50%;">