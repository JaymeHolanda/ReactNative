
// Formulário // Lembrar de Sempre importar o useState

// Componeten com textinput
//text para exibir o texto
//UseState para armazenar o valor e atualizar o valor do texto

import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Exercicio03 = () => {

    const [Texto, setTexto] = useState("")




  return (



    <View>


      
      <TextInput 
       value= {Texto}
       onChangeText={setTexto}
       placeholder='Digite aqui' />


       <Text>Você está digitando: {Texto}</Text>


    </View>
  )
}

export default Exercicio03

