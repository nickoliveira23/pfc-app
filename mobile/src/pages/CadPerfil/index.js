import React, {useState} from 'react';
import {View, Text, TextInput, Slider, TouchableOpacity} from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

import styles from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function CadPerfil( {navigation} ){

    const [name,setNome] = useState('');
    const [age,setIdade] = useState('');
    const [gender,setSexo] = useState('');

    return(
        <View style={{flex:1}}>
            <View style={styles.header}>
                <View style={{flex:1,alignItems:'center'}}></View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:15,fontWeight:'600',textAlign:'center'}}>Editar Informações</Text>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                        <Text style={{color:'#ff8c00ad',top:10, left:20, fontSize:15}}>Concluido</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <KeyboardAwareScrollView style={styles.container}>
                <View style={{alignItems:'center'}}>
                    <EvilIcons name="user" size={300} color="rgba(0,0,0, 0.75)" style={{paddingBottom:15}}/>
                </View>
                <View style={{borderBottomColor:'#CCCCCC',borderBottomWidth:1,borderTopWidth:1,borderTopColor:'#CCCCCC',paddingHorizontal:15,paddingVertical:15,backgroundColor:'#FFFFFF'}}>
                    <View style={{borderBottomWidth:1,borderBottomColor:'#CCCCCC',paddingBottom:15}}>
                        <Text style={styles.titulos}>   NOME</Text>
                        <TextInput keyboardType='default' clearButtonMode='always' maxLength={25} style={styles.textInput} onChangeText={(text)=>setNome(text)}/>
                    </View>
                    <View style={{marginTop:10,borderBottomWidth:1,borderBottomColor:'#CCCCCC',paddingBottom:15}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.titulos}>   IDADE</Text>
                        </View>
                        <TextInput keyboardType='numeric' clearButtonMode='always' maxLength={2} style={styles.textInput} onChangeText={(text)=>setIdade(text)}/>
                    </View>
                    <View style={{marginTop:10,borderBottomWidth:1,borderBottomColor:'#CCCCCC',paddingBottom:15}}>
                        <Text style={styles.titulos}>   SEXO</Text>
                        <RNPickerSelect
                            placeholder={{}}
                            style={{
                                ...styles,
                                iconContainer: {
                                    top: 9,
                                    right: 5,
                                },
                            }}
                            Icon={() => {
                                    return <Ionicons name="md-arrow-down" size={24} color="gray" />;
                                }}
                            onValueChange={(value) => setSexo(value)}
                            items={[
                                { label: 'Masculino', value: 'Masculino' },
                                { label: 'Feminino', value: 'Feminino' },
                            ]}
                        />  
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center', paddingHorizontal:15,marginTop:10}}>
                        <View style={{width:110,height:170,borderRadius:5,backgroundColor:'#CCCCCC',margin:5}}><Ionicons name="add-circle-sharp" size={40} color="#ff8c00ad" style={{position:'absolute',left:-10,top:-10}} /></View>
                        <View style={{width:110,height:170,borderRadius:5,backgroundColor:'#CCCCCC',margin:5}}><Ionicons name="add-circle-sharp" size={40} color="#ff8c00ad" style={{position:'absolute',left:-10,top:-10}} /></View>
                        <View style={{width:110,height:170,borderRadius:5,backgroundColor:'#CCCCCC',margin:5}}><Ionicons name="add-circle-sharp" size={40} color="#ff8c00ad" style={{position:'absolute',left:-10,top:-10}} /></View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center', paddingHorizontal:15,marginTop:10}}>
                        <View style={{width:110,height:170,borderRadius:5,backgroundColor:'#CCCCCC',margin:5}}><Ionicons name="add-circle-sharp" size={40} color="#ff8c00ad" style={{position:'absolute',left:-10,top:-10}} /></View>
                        <View style={{width:110,height:170,borderRadius:5,backgroundColor:'#CCCCCC',margin:5}}><Ionicons name="add-circle-sharp" size={40} color="#ff8c00ad" style={{position:'absolute',left:-10,top:-10}} /></View>
                        <View style={{width:110,height:170,borderRadius:5,backgroundColor:'#CCCCCC',margin:5}}><Ionicons name="add-circle-sharp" size={40} color="#ff8c00ad" style={{position:'absolute',left:-10,top:-10}} /></View>
                    </View>
                <View style={{marginTop:10,borderBottomColor:'#CCCCCC',borderBottomWidth:1,borderTopWidth:1,borderTopColor:'#CCCCCC',paddingHorizontal:15,paddingVertical:15,backgroundColor:'#FFFFFF'}}>
                    <View style={{borderBottomWidth:1,borderBottomColor:'#CCCCCC',paddingBottom:15}}>
                        <Text style={styles.titulos}>   SOBRE MIM</Text>
                        <TextInput  clearButtonMode='always' multiline={true}  maxLength={100} style={[styles.textInput,{height:100}]} />
                    </View>
                    <View style={{marginTop:10,borderBottomWidth:1,borderBottomColor:'rgba(0,0,0, 0.05)',paddingBottom:15}}>
                        <Text style={styles.titulos}>   MOSTRAR</Text>
                        <RNPickerSelect
                            placeholder={{}}
                            style={{
                                ...styles,
                                iconContainer: {
                                    top: 9,
                                    right: 5,
                                },
                            }}
                            Icon={() => {
                                    return <Ionicons name="md-arrow-down" size={24} color="gray" />;
                                }}
                            onValueChange={(value) => setSexo(value)}
                            items={[
                                { label: 'Mulher', value: 'Mulher' },
                                { label: 'Homem', value: 'Homem' },
                            ]}
                        /> 
                    </View>
                    <View style={{marginTop:10,borderBottomWidth:1,borderBottomColor:'rgba(0,0,0, 0.05)',paddingBottom:15}}>
                        <Text style={styles.titulos}>   INTERESSES</Text>
                        <TextInput placeholderTextColor='rgba(0,0,0, 0.50)' placeholder='Adicionar Interesse' clearButtonMode='always' multiline={true}  maxLength={100} style={styles.textInput} />
                    </View>
                    <View style={{marginTop:10,borderBottomWidth:1,borderBottomColor:'rgba(0,0,0, 0.05)',paddingBottom:15}}>
                        <Text style={styles.titulos}>   CARGO</Text>
                        <TextInput placeholderTextColor='rgba(0,0,0, 0.50)' placeholder='Adicionar Cargo' keyboardType='default' clearButtonMode='always' maxLength={25} style={styles.textInput}/>
                    </View>
                    <View style={{marginTop:10,borderBottomWidth:1,borderBottomColor:'rgba(0,0,0, 0.05)',paddingBottom:15}}>
                        <Text style={styles.titulos}>   UNIVERSIDADE</Text>
                        <TextInput placeholderTextColor='rgba(0,0,0, 0.50)' placeholder='Adicionar Universidade' keyboardType='default' clearButtonMode='always' maxLength={25} style={styles.textInput}/>
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={styles.titulos}>   MORANDO EM</Text>
                        <TextInput placeholderTextColor='rgba(0,0,0, 0.50)' placeholder='Adicionar Local' keyboardType='default' clearButtonMode='always' maxLength={25} style={styles.textInput}/>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}

