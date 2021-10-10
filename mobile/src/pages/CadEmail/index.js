import React, {useState} from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import styles from './styles'

export default function CadEmail({navigation}){

    const [email, setEmail] = useState('');

    return(
      <View style={styles.container}>
        <ScrollView bounces={false} contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps='handled'>
          <View style={styles.area1}>
            <AntDesign name='left' size={30} style={{alignSelf:'flex-start'}} color='rgba(0,0,0, 0.75)' onPress={()=>navigation.goBack()}/>
            <Text style={styles.txtNumero}>Email</Text>
          </View>
          <View style={{marginTop:0,height:50,width:300,borderWidth:1,borderRadius:10,borderColor:'rgb(195,195,197)',flexDirection:'row',justifyContent:'left',padding:10,paddingRight:50}}>
              <Ionicons name="md-person" size={24} color="rgba(0,0,0, 0.75)" style={{marginRight:0}} />
              <View style={{alignItems:"center",justifyContent:"center",paddingLeft:10}}>
              <TextInput autoCapitalize="none" autoCorrect={false} style={{fontSize:13}} onChangeText={(text)=>setEmail(text)} placeholder='Email                                                 '/>
              </View>
          </View>

            <View style={{alignItems:'center',marginTop:30}}>
              <Text style={styles.txtCodigo}>Vamos te enviar um email com o código de confirmação, verifiquei sua caixa de entrada :)</Text>
            </View>


          <View style={styles.area2}>
            <TouchableOpacity onPress={()=>{
              if(email != 'alex'){
                alert("Email cadastrado!");
                navigation.navigate('CadCodigo', {
                  email_address: email,
                  teste: "oi"
                })
              } else{
                alert("Email já cadastrado");
              }
            }} style={[styles.botao,{borderColor:'#707070',backgroundColor:null,marginBottom:50}]}>
              <Text style={{color:'#707070'}}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );

}