import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Index() {

  const navigation = useNavigation();

  function navigateLogin() {
    navigation.navigate('Login');
  }
  function navigateCadEmail() {
    navigation.navigate('CadEmail');
  }

  function navigateRedefinicao() {
    navigation.navigate("Redefinicao")
  }

  // useEffect(() => {
  //   async function ClearStorage() {
  //     await AsyncStorage.clear();
  //   }
  //   ClearStorage();
  // });

  return (
    <View style={styles.container}>
      <View style={styles.area1}>
        <Image source={require('../../assets/wonderDark.png')} style={styles.logo} />
        <Text style={styles.txt}> Ao tocar em Criar conta ou Entrar, você concorda com os nossos Termos. Saiba como processamos os seus dados em nossa Política de Privacidade e Política de Cookies.</Text>
      </View>

      <View style={styles.area2}>
        <TouchableOpacity style={[styles.botao, { marginTop: 70, borderColor: 'transparent' }]} onPress={navigateCadEmail}>
          <Text style={{ color: 'white' }}>CRIAR CONTA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, { backgroundColor: 'transparent', borderColor: '#FFFFFF', marginTop: 20 }]} onPress={navigateLogin}>
          <Text style={{ color: '#FFFFFF' }}>ENTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateRedefinicao}>
          <Text style={styles.txtProb}>Problemas para fazer login?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}