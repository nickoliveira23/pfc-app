import React, {useState} from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles'

export default function CadNumero({navigation}){

    const [numVerificacao, setNumero] = useState('');

    return(
      <View style={styles.container}>
        <ScrollView bounces={false} contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps='handled'>
          <View style={styles.area1}>
            <AntDesign name='left' size={30} style={{alignSelf:'flex-start'}} color='rgba(0,0,0, 0.75)' onPress={()=>navigation.goBack()}/>
            <Text style={styles.txtNumero}>Meu número é</Text>
          </View>
          <View style={{marginTop:40,alignItems:'center'}}>
            <TextInput placeholder='Informe seu número' keyboardType='numeric' style={{fontSize:35,fontWeight:'200',height:100,width:300,textAlign:'center'}} onChangeText={(numero)=>setNumero(numero)}/>
            <Text style={{marginTop:-35,fontWeight:'200',color:'#707070'}}>_______________________________________</Text>
          </View>

            <View style={{alignItems:'center',marginTop:30}}>
              <Text style={styles.txtCodigo}>Vamos te enviar uma mensagem de texto com o código de verificação</Text>
            </View>


          <View style={styles.area2}>
            <TouchableOpacity onPress={()=>navigation.navigate('CadCodigo')} style={[styles.botao,{borderColor:'#707070',backgroundColor:null,marginBottom:50}]}>
              <Text style={{color:'#707070'}}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );

}