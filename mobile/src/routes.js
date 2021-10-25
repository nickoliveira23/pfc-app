import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Index from './pages/Index';
import CadSenha from './pages/CadSenha';
import CadEmail from './pages/CadEmail';
import CadCodigo from './pages/CadCodigo';
import CadPerfil from './pages/CadPerfil';
import Perfil from './pages/Perfil';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Conversas from './pages/Conversas';
import RoutesTab from './pages/TabNavigator/routesTab';
import Login from './pages/Login';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CadPerfil" tabBar screenOptions={{headerShown:false}}>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Chat' component={Chat}/>
                <Stack.Screen name='CadPerfil' component={CadPerfil}/>
                <Stack.Screen name='Perfil' component={Perfil}/>
                <Stack.Screen name='CadCodigo' component={CadCodigo}/>
                <Stack.Screen name='CadEmail' component={CadEmail}/>
                <Stack.Screen name='CadSenha' component={CadSenha}/>
                <Stack.Screen name='Index' component={Index}/>
                <Stack.Screen name='Conversas' component={Conversas}/>
                <Stack.Screen name='RoutesTab' component={RoutesTab}/>
                <Stack.Screen name='Login' component={Login}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
