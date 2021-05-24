import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import xxxxx from './pages/xxxxx';
import xxxxx from './pages/xxxxx';


export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name="xxxxx" component={xxxxx} />
                <AppStack.Screen name="xxxxx" component={xxxxx} />
            </AppStack.Navigator>
        </ NavigationContainer>
    );
}