import React,{useState} from 'react';
import {Text, View, Dimensions, Image, TouchableOpacity, StatusBar, ImageBackground} from 'react-native';
import { FontAwesome5, FontAwesome, Entypo, AntDesign, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';


export default function Conversas( {navigation} ){

    const user = [
        {key:1, nome: 'Ney', status: 'Online', uri: require('../../assets/neymar.jpg')},
        {key:1, nome: 'Cat', status: 'Offline', uri: require('../../assets/a9.jpeg')},
        {key:1, nome: 'Camila', status: 'Online', uri: require('../../assets/a1.jpg')},
        {key:1, nome: 'Fernanda', status: 'Online', uri: require('../../assets/a10.jpeg')},
        {key:1, nome: 'Jessica', status: 'Online', uri: require('../../assets/a8.jpg')},
        {key:1, nome: 'Ney', status: 'Online', uri: require('../../assets/a7.jpg')},
        {key:1, nome: 'Ney', status: 'Online', uri: require('../../assets/a6.jpg')},
        {key:1, nome: 'Ney', status: 'Online', uri: require('../../assets/a5.jpg')},
        {key:1, nome: 'Ney', status: 'Online', uri: require('../../assets/a4.jpg')},
        {key:1, nome: 'Ney', status: 'Online', uri: require('../../assets/a3.jpg')},
        {key:1, nome: 'Ney', status: 'Online', uri: require('../../assets/a2.jpg')},
        {key:1, nome: 'Ney', status: 'Online', uri: require('../../assets/bruna.jpg')},
    ]

    let gerarUsers = (dados,i)=>{
        return (
            <TouchableOpacity onPress={()=>{setConversa(dados.nome); setStatus(dados.status)}}>
                <View key={i} >
                    <Image source={dados.uri} style={[styles.matches,{width:80,height:80,borderRadius:80}]} />
                </View>
            </TouchableOpacity>
        );
    }

    const [nomeConversa,setConversa] = useState('');
    const [status,setStatus] = useState('');

    return(

        <View style={styles.container}>
            <StatusBar barStyle='dark-content'/>
            <View style={{flex:0.11,backgroundColor:"red"}}>

            </View>

            <View style={{flex:1,backgroundColor:'#FFFFFF',alignItems:'center',justifyContent:'center'}}>
                <ScrollView horizontal={true}>
                    <View style={{flexDirection:'row',paddingHorizontal:5}}>
                        {user.map((dados,i)=>gerarUsers(dados,i))}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}