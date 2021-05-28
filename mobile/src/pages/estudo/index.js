


import React, {useState} from 'react';
import { View, Text, Modal, Button } from 'react-native';
import styles from './styles';

export default function estudo(){

    const [modal,setModal] = useState('')

    var abrirModal = ()=>{
      setModal(true)
    }
    var fecharModal = ()=>{
      setModal(false)
    }

    return(
      <View style={styles.container}>
        <Modal animationType='slide' visible={modal}>
          <View style={styles.modal}>
            <Button title='Fechar Modal' onPress={fecharModal}/>
          </View>
        </Modal>
        <Button title='Abrir Modal' onPress={abrirModal}/>
      </View>
    );
  }