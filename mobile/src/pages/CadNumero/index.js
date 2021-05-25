import React, {useState} from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles'

export default function CadNumero(){

    const [numVerificacao, setNumero] = useState('');

    var verificarNum = ()=>{
      if(numVerificacao.length != 11){
        alert('O Número nao existe')
      } else {
        alert('Enviamos um código para o número '+numVerificacao);
      } 
    }

    return(
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps='handled'>
          <View style={styles.area1}>
            <AntDesign name='left' size={30} style={{alignSelf:'flex-start'}} color='rgba(0,0,0, 0.75)'/>
            <Text style={styles.txtNumero}>Meu número é</Text>
          </View>
          <View style={{marginTop:40,alignItems:'center'}}>
            <TextInput placeholder='Informe seu número' keyboardType='numeric' style={{fontSize:35,fontWeight:'200',height:100,width:300,textAlign:'center'}} onChangeText={(numero)=>setNumero(numero)}/>
            <Text style={{marginTop:-35,fontWeight:'200'}}>_______________________________________</Text>
          </View>

            <View style={{alignItems:'center',marginTop:30}}>
              <Text style={styles.txtCodigo}>Vamos te enviar uma mensagem de texto com o código de verificação</Text>
            </View>


          <View style={styles.area2}>
            <TouchableOpacity onPress={verificarNum} style={[styles.botao,{borderColor:'#707070',backgroundColor:null,marginBottom:50}]}>
              <Text style={{color:'707070'}}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );

}