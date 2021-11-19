import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles'
import * as MailComposer from 'expo-mail-composer';

export default function CadCodigo() {
  const navigation = useNavigation();
  const [codigo, setCodigo] = useState('');

  function navigateRedefinirSenha() {
    navigation.navigate('RedefinirSenha');
  }

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

  return (
    <View style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
        <View style={styles.area1}>
          <AntDesign name='left' size={30} style={{ alignSelf: 'flex-start' }} color='rgba(0,0,0, 0.75)' onPress={() => navigation.goBack()} />
          <Text style={styles.txtNumero}>Informe o Código</Text>
          {/* <Text style={styles.numero}>{JSON.stringify(email_address).replace(/"/g, '')}</Text> */}
          <TextInput keyboardType='numeric' maxLength={6} placeholder='Código de Verificação' style={{ fontSize: 35, fontWeight: '200', height: 100, width: 300, textAlign: 'center' }} onChangeText={(cod) => setCodigo(cod)} />
          <Text style={{ fontWeight: '200', color: '#707070', marginTop: -35 }}>__ __ __ __ __ __</Text>
          <View>
            <Text style={styles.txtCodigo}>Informe o código de verificação que chegará para você</Text>
          </View>
        </View>

        <View style={styles.area2}>
          <TouchableOpacity onPress={() => {
            if (codigo == 123456) {
              navigation.navigate('CadSenha')
            } else {
              alert("O código informado está incorreto!")
            }
          }} style={[styles.botao, { borderColor: '#707070', backgroundColor: null, marginBottom: 50 }]}>
            <Text style={{ color: '#707070' }}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}




