import React, {useState} from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CadEmail from '../CadEmail/index';
import styles from './styles'

export default function CadCodigo({route, navigation}){

    const [codigo, setCodigo] = useState('');
    const {email_address, teste} = route.params;

    return(
      <View style={styles.container}>
        <ScrollView bounces={false} contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps='handled'>
          <View style={styles.area1}>
            <AntDesign name='left' size={30} style={{alignSelf:'flex-start'}} color='rgba(0,0,0, 0.75)' onPress={()=>navigation.goBack()}/>
            <Text style={styles.txtNumero}>Informe o Código</Text>
            <Text style={styles.numero}>{JSON.stringify(email_address).replace(/"/g,'')}</Text>
            <TextInput keyboardType='numeric' maxLength={6} placeholder='Código de Verificação'style={{fontSize:35,fontWeight:'200',height:100,width:300,textAlign:'center'}} onChangeText={(cod)=>setCodigo(cod)}/>
            <Text style={{fontWeight:'200',color:'#707070',marginTop:-35}}>__ __ __ __ __ __</Text>
            <View>
              <Text style={styles.txtCodigo}>Informe o código de verificação que chegará para você</Text>
            </View>
          </View>

          <View style={styles.area2}>
            <TouchableOpacity  onPress={()=>{
              if(codigo == 123456){
                navigation.navigate('CadSenha')
              } else {
                alert("O código informado está incorreto!")
              }
            }} style={[styles.botao,{borderColor:'#707070',backgroundColor:null,marginBottom:50}]}>
              <Text style={{color:'#707070'}}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
}




