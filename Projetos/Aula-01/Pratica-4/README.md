#  ReactNative 

## Criando a pasta SRC

Os componentes ficam dentro da pasta SRC. Então foi criado esta pasta e em seguida a pasta Components. 

## Aula 1 - Atividade 4

- **Objetivo:** Criar um componente que inclui um **TextInput** para entrada de texto e um **Text** para exibir o texto digitado. Use useState para armazenar e atualizar o valor do texto

### Solução: 

Criando um componente de nome `componente.js` onde possui uma função de incremento com 2 botões

- Dentro do `Counter.js`

~~~ javascript 
const ItemListComponent = () => {
 
  const [items, setItems] = useState(['Item 1', 'Item 2']); 
  const [inputText, setInputText] = useState('');

  
  const addItem = () => {
    if (inputText.trim() !== '') {
      setItems([...items, inputText]); 
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputText}
        placeholder="Digite um novo item"
        onChangeText={setInputText} 
      />
      <Button title="Adicione a lista" onPress={addItem} />

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.itemText}>{item}</Text>}
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
      <MeuComponente />
      <StatusBar style="auto" />
    </View>
  );
}

~~~

### Execução da Aula 01 - Exercicio 04

<img src="/Prints/aula 4.jpg" alt="Aula 03" style="width: 50%;">
