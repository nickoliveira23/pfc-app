import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, TextInput, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import { Ionicons, Fontisto, AntDesign } from '@expo/vector-icons';

import styles from './styles';

import api from '../../services/api';

export default function Login() {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [loggedInUser, setLoggedInUser] = useState(null);

    function navigateBack() {
      navigation.goBack()
  }

  function navigateHome() {
    navigation.navigate('Home');
  }
  

    signIn = async () => {
      try {
        /*const response = await api.post('/session', {
          email: email,
          password: password
        });*/

        const response = await api.post('/session', {
          email: 'nickolas.oliveira02@gmail.com',
          password: '123Nicko456!'
        });

        const { user, token } = response.data;
        
        await AsyncStorage.multiSet([
          ['@CodeApi:user', JSON.stringify(user)],
          ['@CodeApi:token', token],
        ]);      

        setLoggedInUser(user);

        Alert.alert('Login efetuado com sucesso!');

        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });

        navigateHome();

      } catch (err) {
        setErrorMessage(err.response.data.error);
      }
    };

    // useEffect(() => {
    //   async function GoToNextScreen() {
    //     const token = await AsyncStorage.getItem('@CodeApi:token');
    //     const user = JSON.parse(await AsyncStorage.getItem('@CodeApi:user'));

    //     if(token && user) {
    //       setLoggedInUser(user);
    //       navigateHome();
    //     } 
    //   }
    //   GoToNextScreen();
    // });

    return (
      <View style={styles.container}>
        <ScrollView bounces={false} contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps='handled'>
          <View style={styles.area1}>
            <AntDesign name='left' size={30} style={{alignSelf:'flex-start'}} color='rgba(0,0,0, 0.75)' onPress={navigateBack}/>
            <Text style={styles.txtSenha}>Login</Text>
            <View style={{marginTop:20,height:50,width:300,borderWidth:1,borderRadius:10,borderColor:'rgb(195,195,197)',flexDirection:'row',justifyContent:'left',padding:10,paddingRight:50}}>
              <Ionicons name="md-person" size={24} color="rgba(0,0,0, 0.75)" style={{marginRight:0}} />
              <View style={{alignItems:"center",justifyContent:"center",paddingLeft:10}}>
                <TextInput autoCapitalize="none" autoCorrect={false} style={{fontSize:13}} value={email} onChangeText={email => setEmail(email)} placeholder='Email                                                    ' />
              </View>           
            </View>
            <View style={{marginTop:20,height:50,width:300,borderWidth:1,borderRadius:10,borderColor:'rgb(195,195,197)',flexDirection:'row',justifyContent:'left',padding:10,paddingRight:50}}>
              <Fontisto name="locked" size={24} color="rgba(0,0,0, 0.75)" />
              <View style={{alignItems:"center",justifyContent:"center",paddingLeft:10}}>
                <TextInput autoCapitalize="none" autoCorrect={false} style={{fontSize:13}} secureTextEntry={true} Value={password} onChangeText={password => setPassword(password)} placeholder='Senha                                                    ' />
              </View>           
            </View>
            <View style={styles.areaConfirmar}>
              { !!errorMessage && <Text style={{color: '#FF0000', marginBottom: 20}}>{ errorMessage } </Text> }
              {/* !!loggedInUser && <Text style={{color: '#0000FF', marginBottom: 20}}>{ loggedInUser.email } </Text> */}
              <TouchableOpacity onPress={signIn} style={[styles.botao,{width:300,borderColor:'rgb(195,195,197)',backgroundColor:null,marginBottom:50}]}> 
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

