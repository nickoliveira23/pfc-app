import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Index from './pages/Index';
import Login from './pages/Login';


export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name="Index" component={Index} />
                <AppStack.Screen name="Login" component={Login} />
            </AppStack.Navigator>
        </ NavigationContainer>
    );
}