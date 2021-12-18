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

  async function signIn() {
    try {
      const response = await api.post('/session', {
        email: email,
        password: password
      });

      const { user, token, message } = response.data;

      await AsyncStorage.multiSet([
        ['@CodeApi:user', JSON.stringify(user)],
        ['@CodeApi:token', token],
      ]);

      setLoggedInUser(user);

      Alert.alert(message);

      const idObj = JSON.stringify(user);
      const { id } = JSON.parse(idObj);

      navigation.reset({
        index: 0,
        routes: [{ name: 'Home', params: { id: id } }],
      });

    } catch (err) {
      setErrorMessage(err.response.data.error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.elements}>
        <View style={styles.header}>
          <AntDesign name='left' size={30} color='#252525' onPress={navigateBack} />
        </View>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputArea}>
          <View style={styles.inputText}>
            <Ionicons name="md-person" size={24} color="#252525" style={{ marginRight: 0 }} />
            <View style={{ alignItems: "center", justifyContent: "center", paddingLeft: 10 }}>
              <TextInput autoCapitalize="none" autoCorrect={false} style={{ fontSize: 13 }} value={email} onChangeText={email => setEmail(email)} placeholder='Email                                                    ' />
            </View>
          </View>
          <View style={styles.inputText}>
            <Fontisto name="locked" size={24} color="#252525" />
            <View style={{ alignItems: "center", justifyContent: "center", paddingLeft: 10 }}>
              <TextInput autoCapitalize="none" autoCorrect={false} style={{ fontSize: 13 }} secureTextEntry={true} Value={password} onChangeText={password => setPassword(password)} placeholder='Senha                                                    ' />
            </View>
          </View>
        </View>
        <View style={styles.confirmation}>
          {!!errorMessage && <Text style={{ color: '#FF0000', marginBottom: 20 }}>{errorMessage} </Text>}
          <TouchableOpacity onPress={signIn} style={[styles.botao, { width: 300, borderColor: 'rgb(195,195,197)', backgroundColor: null, marginBottom: 50 }]}>
            <Text style={{ color: '#707070' }}>Confirmar</Text>
          </TouchableOpacity>
            <Text style={styles.txtCodigo}>Lembre-se, não informe sua senha para ninguém!</Text>
        </View>
      </View>
    </View>
  );
}

