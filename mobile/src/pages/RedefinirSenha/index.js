import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, TextInput, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import api from '../../services/api';

export default function RedefinirSenha() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  async function navigateBack() {
    const asyncStorageKeys = await AsyncStorage.getAllKeys();
    if (asyncStorageKeys.length > 0) {
      if (Platform.OS === 'android') {
        await AsyncStorage.clear();
      }
      if (Platform.OS === 'ios') {
        await AsyncStorage.multiRemove(asyncStorageKeys);
      }
    }
    navigation.goBack()
  }

  useEffect(() => {
    async function SampleComponent() {
      const emailObj = await AsyncStorage.getItem('@CodeApi:email');

      setEmail(JSON.parse(emailObj).email);
    }
    SampleComponent();
  });

  async function handlePassword() {
    try {
      const credentials = {
        email: email,
        password: password
      }
      const response = await api.post('/user/passwordVerify', {
        password: password
      });

      const res = await api.put('/user/update', credentials);

      const user = response.data;

      navigation.reset({
        index: 0,
        routes: [{ name: 'Index' }],
      });

    } catch (err) {
      setErrorMessage(err.response.data.error);
      Alert.alert(err.response.data.error);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
        <View style={styles.area1}>
          <AntDesign name='left' size={30} style={{ alignSelf: 'flex-start' }} color='rgba(0,0,0, 0.75)' onPress={navigateBack} />
          <Text style={styles.txtSenha}>Senha</Text>
          <TextInput maxLength={15} placeholder='Digite sua senha' style={{ fontSize: 30, fontWeight: '200', height: 100, width: 300, textAlign: 'center' }} secureTextEntry={true} value={password} onChangeText={password => setPassword(password)} />
          <Text style={{ fontWeight: '200', color: '#707070', marginTop: -35 }}>_____________________________________</Text>
          <View>
            <Text style={styles.txtCodigo}>Lembre-se, não informe sua senha para ninguém!</Text>
          </View>
        </View>
        <View style={styles.area2}>
          {!!errorMessage && <Text style={{ color: '#FF0000', marginBottom: 20 }}>{errorMessage} </Text>}
          <TouchableOpacity onPress={handlePassword} style={[styles.botao, { borderColor: '#707070', backgroundColor: null, marginBottom: 50 }]}>
            <Text style={{ color: '#707070' }}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}




