import React, {useState} from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, Fontisto, AntDesign } from '@expo/vector-icons';
import styles from './styles';
import firebase from 'firebase'

export default function CadSenha({navigation}){

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const firebaseConfig = {
      apiKey: "AIzaSyB28sGw71iwMyM8GGo2Iq_pRMb68LBtZ0o",
      authDomain: "wonder-pfc.firebaseapp.com",
      databaseURL: "https://wonder-pfc-default-rtdb.firebaseio.com",
      projectId: "wonder-pfc",
      storageBucket: "wonder-pfc.appspot.com",
      messagingSenderId: "949035404713",
      appId: "1:949035404713:web:57d6482fa8a59e2f9308b8",
      measurementId: "G-C8QVKN024J"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }

    
    return(
      <View style={styles.container}>
        <ScrollView bounces={false} contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps='handled'>
          <View style={styles.area1}>
            <AntDesign name='left' size={30} style={{alignSelf:'flex-start'}} color='rgba(0,0,0, 0.75)' onPress={()=>navigation.goBack()}/>
            <Text style={styles.txtSenha}>Login</Text>
            <View style={{marginTop:20,height:50,width:300,borderWidth:1,borderRadius:10,borderColor:'rgb(195,195,197)',flexDirection:'row',justifyContent:'left',padding:10,paddingRight:50}}>
              <Ionicons name="md-person" size={24} color="rgba(0,0,0, 0.75)" style={{marginRight:0}} />
              <View style={{alignItems:"center",justifyContent:"center",paddingLeft:10}}>
              <TextInput autoCapitalize="none" autoCorrect={false} style={{fontSize:13}} onChangeText={(text)=>setEmail(text)} placeholder='Email                                                    ' />
              </View>           
            </View>
            <View style={{marginTop:20,height:50,width:300,borderWidth:1,borderRadius:10,borderColor:'rgb(195,195,197)',flexDirection:'row',justifyContent:'left',padding:10,paddingRight:50}}>
            <Fontisto name="locked" size={24} color="rgba(0,0,0, 0.75)" />
              <View style={{alignItems:"center",justifyContent:"center",paddingLeft:10}}>
              <TextInput autoCapitalize="none" autoCorrect={false} style={{fontSize:13}} onChangeText={(text)=>setSenha(text)} placeholder='Senha                                                    ' />
              </View>           
            </View>

              

            <View style={styles.areaConfirmar}>
            <TouchableOpacity onPress={()=>{
              if(email == 'a' & senha == 1){
                navigation.navigate('Home');
              } else {
                alert('Login inválido!')
              }
            }} style={[styles.botao,{width:300,borderColor:'rgb(195,195,197)',backgroundColor:null,marginBottom:50}]}>
              <Text style={{color:'#707070'}}>Confirmar</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.txtCodigo}>Lembre-se, não informe sua senha para ninguém!</Text>
            </View>
          </View>


          </View>
        </ScrollView>
      </View>
    );
}




