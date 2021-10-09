import React, {useState} from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles'

export default function CadSenha({navigation}){

    const [senha, setSenha] = useState('');

    return(
      <View style={styles.container}>
        <ScrollView bounces={false} contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps='handled'>
          <View style={styles.area1}>
            <AntDesign name='left' size={30} style={{alignSelf:'flex-start'}} color='rgba(0,0,0, 0.75)' onPress={()=>navigation.goBack()}/>
            <Text style={styles.txtSenha}>Senha</Text>
            <TextInput maxLength={15} placeholder='Digite sua senha'style={{fontSize:30,fontWeight:'200',height:100,width:300,textAlign:'center'}} onChangeText={(text)=>setSenha(text)}/>
            <Text style={{fontWeight:'200',color:'#707070',marginTop:-35}}>_____________________________________</Text>
            {/* <TextInput maxLength={15} placeholder='Confirme sua senha'style={{fontSize:30,fontWeight:'200',height:100,width:300,textAlign:'center'}} onChangeText={(text)=>setSenhaC(text)}/>
            <Text style={{fontWeight:'200',color:'#707070',marginTop:-35}}>_____________________________________</Text> */}
            <View>
              <Text style={styles.txtCodigo}>Lembre-se, não informe sua senha para ninguém!</Text>
            </View>
          </View>

          <View style={styles.area2}>
            <TouchableOpacity onPress={()=>navigation.navigate('CadPerfil')} style={[styles.botao,{borderColor:'#707070',backgroundColor:null,marginBottom:50}]}>
              <Text style={{color:'#707070'}}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
}




