import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from '../screens/WelcomeScreen';
import UsuarioScreen from '../screens/UsuarioScreen';
import EmpleadosScreen from '../screens/EmpleadosScreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Usuario" component={UsuarioScreen} />
      <Tab.Screen name= 'Empleado' component={EmpleadosScreen} />
    </Tab.Navigator>
  );
}

function MyStack() {
    return (
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Tabs" component={MyTabs} />
        <Stack.Screen name='Welcome' component={WelcomeScreen}/>
      </Stack.Navigator>
    );
  }


export default function TopTabNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}
