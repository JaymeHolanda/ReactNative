#  ReactNative 

## Criando a pasta SRC

Os componentes ficam dentro da pasta SRC. Então foi criado esta pasta e em seguida a pasta Components. 

## Aula 1 

- **Objetivo:** Criar um componente funcional que aceita um nome como prop e exibe uma mensagem de saudação.

### Solução: 

Criando um componente de nome `ComponenteNome.js` onde possui uma função com uma saudação.

- Dentro do `ComponenteNome.js`

~~~ javascript 
const ComponenteNome = ({ nome }) => {
    return (
      <View>
        <Text> Olá! {nome}! Seja muito bem-vindo! </Text>
      </View>
    );
  };
~~~

- Dentro do App.js

~~~ javascript 

const ComponenteNome = ({ nome }) => {
    return (
      <View>
        <Text> Olá! {nome}! Seja muito bem-vindo! </Text>
      </View>
    );
  };

~~~

### Execução da Aula 01 

<img src="/Prints/Aula%2001.jpg" alt="Aula 01" style="width: 50%;">


