import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Index from './pages/Index';
import CadSenha from './pages/CadSenha'
import CadNumero from './pages/CadNumero'
import CadCodigo from './pages/CadCodigo'
import CadPerfil from './pages/CadPerfil';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown:'false'}}>
                <Tab.Screen name='Index' component={Index} />
                <Tab.Screen name='CadNumero' component={CadNumero} />
                <Tab.Screen name='CadCodigo' component={CadCodigo} />
                <Tab.Screen name='CadSenha' component={CadSenha} />
                <Tab.Screen name='CadPerfil' component={CadPerfil}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
