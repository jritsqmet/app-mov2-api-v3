import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, TextInput } from 'react-native-gesture-handler'

//FIREBASE
import { db } from '../config/Config'
import { ref, set, onValue, update, remove } from "firebase/database";


export default function UsuarioScreen() {

  const [cedula, setCedula] = useState('')
  const [nombre, setNombre] = useState('')
  const [ciudad, setCiudad] = useState('')

  const [datos, setDatos] = useState([])

  //GUARDAR
  function guardar(cedula: string, nombre: string, ciudad: string) {
    set(ref(db, 'usuarios/' + cedula), {
      name: nombre,
      city: ciudad
    });

    Alert.alert('Mensaje', 'Datos guardados')
  }

  // LEER
  useEffect(() => {

    function leer() {
      const starCountRef = ref(db, 'usuarios/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();

        //adaptacion del arreglo
        const dataTemp: any = Object.keys(data).map((cedula) => ({
          cedula, ...data[cedula]
        }))

        setDatos(dataTemp)
      });
    }

    leer()
    console.log(datos)


  }, [])

  //ACTUALIZAR - EDITAR
  function actualizar(cedula: string, nombre: string, ciudad: string) {
    update(ref(db, 'usuarios/' + cedula), {
      name: nombre,
      city: ciudad
    });

    Alert.alert('Mensaje', 'Datos guardados')
  }

  //ELIMINAR
  function eliminar( cedula: string){
    remove(ref(db, 'usuarios/' + cedula) )
  }

  type usuario ={
    cedula: string,
    name: string,
    city: string
  }




  return (
    <View>
      <Text>UsuarioScreen</Text>
      {/* ################### GUARDAR ################################ */}
      <TextInput
        placeholder='Ingrese cedula'
        onChangeText={(texto) => setCedula(texto)}
      />

      <TextInput
        placeholder='Ingrese un nombre'
        onChangeText={(texto) => setNombre(texto)}
      />

      <TextInput
        placeholder='Ingrese ciudad'
        onChangeText={(texto) => setCiudad(texto)}
      />

      <Button title='GUARDAR' onPress={() => guardar(cedula, nombre, ciudad)} />


      {/* ################### EDITAR ACTUALIZAR ################################ */}
      <View style={{ borderWidth: 1, width: '100%', marginTop: 10 }} />
      <TextInput
        placeholder='Ingrese cedula'
        onChangeText={(texto) => setCedula(texto)}
      />

      <TextInput
        placeholder='Ingrese un nombre'
        onChangeText={(texto) => setNombre(texto)}
      />

      <TextInput
        placeholder='Ingrese ciudad'
        onChangeText={(texto) => setCiudad(texto)}
      />

      <Button title='EDITAR' onPress={() => actualizar(cedula, nombre, ciudad)} color={'green'} />

       {/* ################### ELIMINAR ################################ */}
       <View style={{ borderWidth: 1, width: '100%', marginTop: 10 }} />
      <TextInput
        placeholder='Ingrese cedula'
        onChangeText={(texto) => setCedula(texto)}
      />
       <Button title='ELIMINAR' onPress={() => eliminar(cedula) } color={'red'} />


      {/* ################### LEER ################################ */}
      <View style={{ borderWidth: 1, width: '100%', marginTop: 10 }} />
      <FlatList
        data={datos}
        renderItem={( { item } : { item: usuario } ) => (
          <View>
            <View style={{ borderWidth: 1, width: '100%', marginTop: 10 }} />
            <Text>Cedula: {item.cedula}</Text>
            <Text>Nombre: {item.name}</Text>
            <Text>Ciudad: {item.city}</Text>
          </View>
        )}
      />




    </View>
  )
}

const styles = StyleSheet.create({})