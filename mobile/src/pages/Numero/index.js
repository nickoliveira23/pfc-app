import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles'

export default class Numero extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.area1}>
          <AntDesign name='caretLeft' size={30}/>
          <Text style={styles.txtNumero}>Meu número é</Text>
          <View style={styles.areaNumero}>
            <Text style={styles.numero}>BR +55</Text>
            <Text style={styles.numero}>11965918885</Text>
          </View>
          <View style={[styles.areaNumero,{marginTop:-10}]}>
            <Text style={{fontWeight:'bold',color:'#707070'}}>__________</Text>
            <Text style={{fontWeight:'bold',color:'#707070'}}>________________</Text>
          </View>
          <View>
            <Text style={styles.txtCodigo}>Vamos te enviar uma mensagem de texto com o código de verificação</Text>
          </View>
        </View>
        <View style={styles.area2}>
        </View>
      </View>
    );
  }
}
