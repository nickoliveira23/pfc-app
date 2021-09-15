import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Index from './pages/Index';
import CadSenha from './pages/CadSenha'
import CadNumero from './pages/CadNumero'
import CadCodigo from './pages/CadCodigo'
import CadPerfil from './pages/CadPerfil';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Conversas from './pages/Conversas';
import RoutesTab from './pages/TabNavigator/routesTab';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

export default function Routes(){
    return(

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Chat" tabBar screenOptions={{headerShown:false}}>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Chat' component={Chat}/>
                <Stack.Screen name='CadPerfil' component={CadPerfil}/>
                <Stack.Screen name='CadCodigo' component={CadCodigo}/>
                <Stack.Screen name='CadNumero' component={CadNumero}/>
                <Stack.Screen name='CadSenha' component={CadSenha}/>
                <Stack.Screen name='Index' component={Index}/>
                <Stack.Screen name='Conversas' component={Conversas}/>
                <Stack.Screen name='RoutesTab' component={RoutesTab}/>
                
            </Stack.Navigator>
        </NavigationContainer>

        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName="Chat" screenOptions={{headerShown:false}}>
        //         <Stack.Screen name='Index' component={Index} />
        //         <Stack.Screen name='CadNumero' component={CadNumero} />
        //         <Stack.Screen name='CadCodigo' component={CadCodigo} />
        //         <Stack.Screen name='CadSenha' component={CadSenha} />
        //         <Stack.Screen name='CadPerfil' component={CadPerfil}/>
        //         <Stack.Screen name='Home' component={Home}/>
        //         <Stack.Screen name='Chat' component={Chat}/>
        //     </Stack.Navigator>
        // </NavigationContainer>
    );
}
