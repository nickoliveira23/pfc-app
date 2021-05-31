import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import CadNumero from './pages/CadNumero';
import Index from './pages/Index';
import CadCodigo from './pages/CadCodigo';
import CadSenha from './pages/CadSenha';
import CadNascimento from './pages/CadNascimento';
import estudo from './pages/estudo';


export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false}}>
               <AppStack.Screen name="estudo" component={estudo} />
                {/* <AppStack.Screen name="Numero" component={Numero} /> */}
                {/* <AppStack.Screen name="Login" component={Login} /> */}
                {/* <AppStack.Screen name="Inicio" component={Inicio} />*/}

            </AppStack.Navigator>
        </ NavigationContainer>
    );
}