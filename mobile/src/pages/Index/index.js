


import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons  } from '@expo/vector-icons';
import styles from './styles';

export default function Index(){
    return(
      <View style={styles.container}>
        <View style={styles.area1}>
          <Image source={require('../../assets/wonderLogo2.png')} style={styles.logo}/>
          <Text style={styles.txt}> Ao tocar em Criar conta ou Entrar, você concorda com os nossos Termos. Saiba como processamos osseus dados em nossa Política de Privacidade e Política de Cookies.</Text>
        </View>

        <View style={styles.area2}>
          <TouchableOpacity style={[styles.botao,{marginTop:70,borderColor:'transparent'}]}>
              <Text>CRIAR CONTA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao,{backgroundColor:'transparent',borderColor:'#FFFFFF',marginTop:20}]}>
            <Text style={{color:'#FFFFFF'}}>ENTRAR</Text>
          </TouchableOpacity>
          <Text style={styles.txtProb}>Problemas para fazer login?</Text>
        </View>
      </View>
    );
  }