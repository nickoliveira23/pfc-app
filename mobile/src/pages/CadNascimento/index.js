import React, {useState} from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles'

export default function CadNascimento(){



    return(
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps='handled'>
          <View style={styles.area1}>
            <AntDesign name='left' size={30} style={{alignSelf:'flex-start'}} color='rgba(0,0,0, 0.75)'/>
            <Text style={styles.txtAniversario}>Aniversário</Text>
            <TextInput maxLength={15} placeholder='Informe sua data de nascimento' style={{fontSize:30,fontWeight:'200',height:100,width:300,textAlign:'center'}} />
            <Text style={{fontWeight:'200',color:'#707070',marginTop:-35}}>_____________________________________</Text>
            <View>
              <Text style={styles.txtCodigo}>Estamos quase lá...</Text>
            </View>
          </View>

          <View style={styles.area2}>
            <TouchableOpacity style={[styles.botao,{backgroundColor:null,marginBottom:50,borderColor:'#707070'}]}>
              <Text style={{color:'#707070'}}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
}




