import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Index from './pages/Index';
import CadSenha from './pages/CadSenha';
import CadEmail from './pages/CadEmail';
import CadCodigo from './pages/CadCodigo';
import CadPerfil from './pages/CadPerfil';
import Perfil from './pages/Perfil';
import Home from './pages/Home';
import ListaMatch from './pages/ListaMatch';
import Login from './pages/Login';
import CadFoto from './pages/CadFoto'


const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function HomeTab() {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Perfil" component={Perfil} />
//             <Tab.Screen name="Conversas" component={Conversas} />
//         </Tab.Navigator>
//     );
// }

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Index" screenOptions={{ headerShown: false }}>
                <Stack.Screen name='CadPerfil' component={CadPerfil} />
                <Stack.Screen name='CadCodigo' component={CadCodigo} />
                <Stack.Screen name='CadEmail' component={CadEmail} />
                <Stack.Screen name='CadSenha' component={CadSenha} />
                {/* <Stack.Screen name='HomeTab' component={HomeTab} /> */}
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Perfil" component={Perfil} />
                <Stack.Screen name="ListaMatch" component={ListaMatch} />
                <Stack.Screen name='Index' component={Index} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='CadFoto' component={CadFoto} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
