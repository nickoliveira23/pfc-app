import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Index from './pages/Index';
import Password from './pages/Password';
import Email from './pages/Email';
import Profile from './pages/Profile';
import UserProfile from './pages/UserProfile';
import Home from './pages/Home';
import MatchList from './pages/MatchList';
import Login from './pages/Login';
import CadFoto from './pages/CadFoto'
import Detail from './pages/Detail'
import NextScreen from './pages/NextScreen';
import FullImage from './pages/FullImage';


const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="NextScreen" screenOptions={{ headerShown: false }}>
                <Stack.Screen name='NextScreen' component={NextScreen} />
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name='Email' component={Email} />
                <Stack.Screen name='Password' component={Password} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="UserProfile" component={UserProfile} />
                <Stack.Screen name="MatchList" component={MatchList} />
                <Stack.Screen name='Index' component={Index} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='CadFoto' component={CadFoto} />
                <Stack.Screen name='Detail' component={Detail} />
                <Stack.Screen name='FullImage' component={FullImage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
