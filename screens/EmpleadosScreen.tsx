import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'

export default function EmpleadosScreen() {

    const [datos, setDatos] = useState([])

    const API_EMPLEADOS = 'https://api.sampleapis.com/futurama/characters'

    useEffect(() => {

        fetch( API_EMPLEADOS)
        .then( ( response )=> response.json() )
        .then( ( data ) => setDatos( data ) )
        .catch( ( error )=>  console.log(error))

        //console.log(datos)

    }, [])
    

  return (
    <View>
      <Text>EmpleadosScreen</Text>
      <FlatList
        data={datos}
        renderItem={ ( {item} )=> (
            <View>
                <Text>Nombre: {item.name.first}</Text>
                <Text>Ocupacion: {item.occupation}</Text>
                <Image source={{ uri: item.images.main}} style={styles.img} />
            </View>
        ) }
      />
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
        width:150,
        height:150,
        resizeMode:'contain'
    }

})