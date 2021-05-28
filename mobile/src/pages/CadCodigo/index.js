import React, {useState} from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles'

export default function CadCodigo(){

    const [codigo, setCodigo] = useState('');
    const [statusBotao, setBotao] = useState(true);

    const status = ()=>{
      if (codigo.length == 6){
        setBotao(false);
      }
    }


    var verificarCodigo = ()=>{
      if (codigo.length != 6){
        alert('Verifique se o código está correto! Código Inválido.');
      } else {
        alert('Código validado! '+codigo)
      }

    }


    return(
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps='handled'>
          <View style={styles.area1}>
            <AntDesign name='left' size={30} style={{alignSelf:'flex-start'}} color='rgba(0,0,0, 0.75)'/>
            <Text style={styles.txtNumero}>Informe o Código</Text>
            <Text style={styles.numero}>5511965918885</Text>
            <TextInput keyboardType='numeric' maxLength={6} placeholder='Código de Verificação'style={{fontSize:35,fontWeight:'200',height:100,width:300,textAlign:'center'}} onChangeText={(cod)=>setCodigo(cod)}/>
            <Text style={{fontWeight:'200',color:'#707070',marginTop:-35}}>__ __ __ __ __ __</Text>
            <View>
              <Text style={styles.txtCodigo}>Informe o código de verificação que chegará para você</Text>
            </View>
          </View>

          <View style={styles.area2}>
            <TouchableOpacity disabled={statusBotao} onPress={verificarCodigo} style={[styles.botao,{borderColor:'#707070',backgroundColor:null,marginBottom:50}]}>
              <Text style={{color:'#707070'}}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
}



