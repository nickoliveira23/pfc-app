import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CadPerfil from '../CadPerfil';
import Home from '../Home';
import Conversas from '../Conversas';

export default function RoutesTab( {navigation} ){

    const Tab = createBottomTabNavigator();

    return(
            <Tab.Navigator initialRouteName="Match" screenOptions={{tabBarActiveTintColor: 'red',}}>
                <Tab.Screen name='Perfil' component={CadPerfil}  />
                <Tab.Screen name='Match' component={Home}/>
                <Tab.Screen name='Conversas' component={Conversas}/>
            </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})