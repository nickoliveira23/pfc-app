import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons  } from '@expo/vector-icons';
import styles from './styles';

export default class Login extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.area1}>
          <Image source={require('../../assets/wonderLogo2.png')} style={styles.logo}/>
          <Text style={styles.txt}> Ao tocar em Criar conta ou Entrar, você concorda com os nossos Termos. Saiba como processamos osseus dados em nossa Política de Privacidade e Política de Cookies.</Text>
        </View>

        <View style={styles.area2}>
          <TouchableOpacity style={[styles.botao,{backgroundColor:'transparent',borderColor:'#F0F0F0', marginTop:70}]}>
            <AntDesign name='facebook-square'size={26} color='blue' style={{position:'absolute',left:30}}/>
              <Text style={styles.textoBotao}>ENTRAR COM O FACEBOOK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao,{backgroundColor:'transparent',borderColor:'#F0F0F0', marginTop:20}]}>
            <MaterialIcons name="smartphone" size={26} style={{position:'absolute',left:30}}/>
            <Text style={[styles.textoBotao,{paddingHorizontal:50,fontSize:12}]}>ENTRAR COM O NÚMERO DE TELEFONE</Text>
          </TouchableOpacity>
          <Text style={styles.txtProb}>Prooblemas para fazer login?</Text>
        </View>
      </View>
    );
  }
}