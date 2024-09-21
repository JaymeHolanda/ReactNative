import { View, Text, Button } from 'react-native'
import React from 'react'
import { useState } from 'react';

const Exercicio02 = () => {
    const [Contador, setContador] = useState(1)
    
    function incrementar () {
        setContador(Contador + 1)
    }

    function decrementar () {
        setContador(Contador -1 )
    }



  return (
    <View>

        <Text>O Contador está em : {Contador} </Text>

        <Button  title='Incrementar' onPress={incrementar }/>

        <Button title='Decrementar' onPress={decrementar} />

    </View>
  )

  
 
}



export default Exercicio02