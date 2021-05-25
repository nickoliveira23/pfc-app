import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Inicio from './pages/Inicio';
import Index from './pages/Index';


export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name="Login" component={Login} />
                {/* <AppStack.Screen name="Inicio" component={Inicio} />
                <AppStack.Screen name="Index" component={Index} /> */}

            </AppStack.Navigator>
        </ NavigationContainer>
    );
}