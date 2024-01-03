import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

//FIREBASE
import { db } from '../config/Config'
import { ref, set } from "firebase/database";


export default function UsuarioScreen() {

  const [cedula, setCedula] = useState('')
  const [nombre, setNombre] = useState('')
  const [ciudad, setCiudad] = useState('')

  //GUARDAR
  function guardar(cedula: string, nombre: string, ciudad:string) {
    set(ref(db, 'usuarios/' + cedula), {
      name: nombre,
      city: ciudad
    });

    Alert.alert('Mensaje', 'Datos guardados')
  }

  return (
    <View>
      <Text>UsuarioScreen</Text>
      <TextInput 
        placeholder='Ingrese cedula'
        onChangeText={ (texto) => setCedula(texto)  }
      />

      <TextInput
        placeholder='Ingrese un nombre'
        onChangeText={ (texto) => setNombre(texto)}
      />

      <TextInput
        placeholder='Ingrese ciudad'
        onChangeText={ (texto) => setCiudad(texto)}
      />

      <Button title='GUARDAR' onPress={ () => guardar(cedula, nombre, ciudad) }/>

    </View>
  )
}

const styles = StyleSheet.create({})