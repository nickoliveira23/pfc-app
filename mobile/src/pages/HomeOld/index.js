import React,{useEffect, useState} from 'react';
import {Text, View, Dimensions, Button, Image, TouchableOpacity, StatusBar, ImageBackground, Alert } from 'react-native';
import { FontAwesome5, FontAwesome, AntDesign, Entypo, Ionicons} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-deck-swiper';

import styles from './styles';

import data from '../../assets/dados/data'

import api from '../../services/api'


export default function Home({navigation}){
    const [profiles, setProfiles] = useState('');
    const [stringProfiles, setStringProfiles] = useState('');
    const SCREEN_HEIGHT = Dimensions.get('window').height;
    const SCREEN_WIDTH = Dimensions.get('window').width

    

    useEffect (() => {
        async function loadProfiles() {
        
            const response = await api.get('profile/list');
    
            setProfiles(response.data);

        }
        loadProfiles()
    }, []);

    //Parametros referente aos Cards {width:SCREEN_WIDTH,height:SCREEN_HEIGHT}
    const Card = ({card}) => (
        <View style={styles.card}>
                    <View style={{flex:1,justifyContent:'flex-end',paddingHorizontal:30,paddingBottom:100, borderColor:'black', borderWidth:0,borderRadius:2}}>
                        <View style={{backgroundColor:'',width:150}}>
                            <TouchableOpacity activeOpacity={0.6} onPress={()=>{}}>
                                <View>
                                    <Text style={{marginLeft:-10,color:'#CCCCCC',fontSize:60,fontWeight:'300'}}>{card.age}</Text>
                                </View>
                                <View>
                                    <Text style={{/*color:'#CCCCCC'*/color:'#ff8c00',fontSize:35,fontWeight:'300'}}>{card.name}</Text>
                                </View>
                                <View>
                                    <Text style={{color:'#ffffffb8'}}>SP, Mogi das Cruzes</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>                
        </View>
    )


    
    
    const [index,setIndex] = useState(0);
    const onSwiped = () => {
        setIndex(index + 1);
    };

    // const user = [
    //     {key:1, chat:'oi', uri: require('../../assets/neymar.jpg')},
    //     {key:1, chat:'oi', uri: require('../../assets/a9.jpeg')},
    //     {key:1, chat:'oi',  uri: require('../../assets/a1.jpg')},
    //     {key:1, chat:'oi',  uri: require('../../assets/a10.jpeg')},
    //     {key:1, chat:'oi',  uri: require('../../assets/a8.jpg')},
    //     {key:1, chat:'oi',  uri: require('../../assets/a7.jpg')},
    //     {key:1, chat:'oi',  uri: require('../../assets/a6.jpg')},
    //     {key:1, chat:'oi',  uri: require('../../assets/a5.jpg')},
    //     {key:1, chat:'oi',  uri: require('../../assets/a4.jpg')},
    //     {key:1, chat:'oi',  uri: require('../../assets/a3.jpg')},
    //     {key:1, chat:'oi',  uri: require('../../assets/a2.jpg')},
    //     {key:1, chat:'oi',  uri: require('../../assets/bruna.jpg')},
    // ]

    let gerarUsers = (dados,i)=>{
        return (

            <View key={i} >
                <View>
                </View>
                <TouchableOpacity>
                    <Image source={dados.uri} style={[styles.matches,{width:80,height:80,borderRadius:80}]} />
                </TouchableOpacity>
            </View>
        );
    }

    return(
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'}/>
            <View style={{flex:0.11,borderWidth:1,borderColor:'rgb(196, 196, 196)',flexDirection:'row',backgroundColor:'rgb(232, 232, 232)'}}>
                <View style={{paddingTop:17,flex:1,alignItems:'center',justifyContent:'center'}}> 
                    <AntDesign name="exclamationcircleo" size={24} color="#808080" />
                </View>
                <View style={{paddingTop:17,flex:1,alignItems:'center',justifyContent:'center'}}> 
                    <FontAwesome name="diamond" size={37} color="#808080" />
                </View>
                <View style={{paddingTop:17,flex:1,alignItems:'center',justifyContent:'center'}}> 
                    <Ionicons name="settings-outline" size={30} color="#808080" />
                </View>
            </View>
            
            {/* Cards */}
            <View style={{flex:1}}>
                <Swiper
                    cards={data}
                    cardIndex={index}
                    renderCard={(card) => <Card card={card}/>}
                    // onSwiper={onSwiped} 
                    backgroundColor='white'
                    cardVerticalMargin={0}
                    cardHorizontalMargin={0}
                    showSecondCard={true}
                    stackSize={3}
                    infinite={true}
                    animateOverlayLabelsOpacity={true}
                    verticalSwipe={false}
                    disableBottomSwipe
                    
                    overlayLabels={{
                        left: {
                            title: 'NOPE',
                            style: {
                                label:{
                                    borderColor:'red',
                                    borderWidth:5,
                                    fontSize:25,
                                    color:'red',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginLeft:200,
                                    marginRight:50,
                                    marginTop:400,
                                    padding:30,
                                    transform:[{rotate:'-14deg'}]
                                }
                            },
                            wrapper: {
                                flexDirection:'column',
                                alignItems:'center',
                                justifyContent:'center',
                            }
                        },
                        right: {
                            title: 'LIKE',
                            style: {
                                label:{
                                    borderColor:'green',
                                    borderWidth:5,
                                    fontSize:30,
                                    color:'green',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginLeft:50,
                                    marginRight:200,
                                    marginTop:400,
                                    padding:30,
                                    transform:[{rotate:'14deg'}]
                                }
                            },
                            wrapper: {
                                flexDirection:'column',
                                alignItems:'center',
                                justifyContent:'center',
 
                            },
                            
                        },
                        top: {
                            title: 'SUPER LIKE',
                            style: {
                                label:{
                                    borderColor:'blue',
                                    borderWidth:5,
                                    fontSize:30,
                                    color:'blue',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginLeft:40,
                                    marginRight:200,
                                    marginTop:300,
                                    padding:30,
                                    transform:[{rotate:'14deg'}]
                                }
                            },
                            wrapper: {
                                flexDirection:'column',
                                alignItems:'center',
                                justifyContent:'center',
 
                            }, 
                        }
                    }}
                    // onSwiper={onSwiped} #rgba(153, 50, 205, 0.73) "#ff8c00ad"    rgba(255, 20, 147, 0.60)
                />
                
            </View>
            {/*Navegacao*/}
             <View style={{flex:0.09,paddingTop:5,flexDirection:'row',justifyContent:'space-around',borderWidth:1,borderColor:'rgb(196, 196, 196)',backgroundColor:'rgb(232, 232, 232)'}}>
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Perfil')}>
                        <Ionicons name="person-outline" size={28} color="#808080" />
                        <Text style={{fontSize:10,textAlign:'center'}}>Perfil</Text>
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity>
                        <AntDesign name="home" size={31} color="#808080" />
                        <Text style={{fontSize:10,textAlign:'center'}}>Match</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Conversas')}>
                        <Ionicons name="ios-chatbubbles-outline" size={28} color="#808080" />
                        <Text style={{fontSize:10,marginLeft:-10}}>Conversas</Text>
                    </TouchableOpacity>
                </View>
            </View> 
        </View>
    );
}