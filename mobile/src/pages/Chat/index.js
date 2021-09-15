import React,{useState} from 'react';
import {Text, View, Dimensions, Image, TouchableOpacity, StatusBar, ImageBackground} from 'react-native';
import { FontAwesome5, FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';


export default function Chat( {navigation} ){

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
            <View style={{height:80,backgroundColor:/*'#1A1919'*/""}}>
                <View style={{height:15,backgroundColor:/*'#FFFFFF'*/"transparent"}}>
                </View>
                <View style={{padding:4,flexDirection:'row',marginTop:12,height:42,backgroundColor:/*'#201E20'*/"transparent"}}>
                    <View style={{flex:0.3,backgroundColor:''}}>
                        <AntDesign name='left' size={30} color='rgba(255,255,255, 0.50)' onPress={()=>navigation.navigate('Home')}/>
                    </View>
                    <View style={{flex:2,alignItems:'center'}}>
                        <Text style={{color:'#e3e3e3',height:24,fontSize:15}}>{nomeConversa}</Text>
                        <Text style={{fontSize:10,color:'rgba(255,255,255, 0.45)'}}><Entypo name="controller-record" size={12} color="green" /> {status}</Text>
                    </View>
                    <View style={{flex:0.3,backgroundColor:''}}>
                        <TouchableOpacity activeOpacity={0.30}>
                            <FontAwesome5 style={{marginTop:4,paddingHorizontal:10}} name="phone-alt" size={24} color="rgba(255,255,255, 0.50)" />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            
            <View style={{flex:1,backgroundColor:'#FFFFFF',alignItems:'center',justifyContent:'center'}}>
                <Entypo name="chat" size={200} color="#00000073" />
            </View>
            <View style={{height:140}}>
                <Text style={{fontWeight:'100',padding:10,color:'#CCCCCC'}}>Matches</Text>
                <ScrollView horizontal={true}>
                    <View style={{flexDirection:'row',paddingHorizontal:5}}>
                        {user.map((dados,i)=>gerarUsers(dados,i))}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}