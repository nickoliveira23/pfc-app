import React from 'react';
import { AntDesign, MaterialIcons  } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import logoImg from '../../assets/whitelogo.png';

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} style={styles.image}/>
                <Text style={[styles.details, { fontSize: 12}]}>
                    Ao tocar em Criar conta ou Entrar, você concorda com os nossos Termos. 
                    Saiba como processamos os seus dados em nossa Política de Privacidade 
                    e Política de Cookies.
                </Text>
            </View>
            <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
                <AntDesign name="facebook-square" size={21} color="#FFF"/>
                <Text style={styles.detailsButtonText}>ENTRE COM O FACEBOOK</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
                <MaterialIcons name="smartphone" size={21} color="#FFF"/>
                <Text style={styles.detailsButtonText}>ENTRE COM SEU NÚMERO DE TELEFONE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.detailsLink} onPress={() => {}}>
                <Text style={styles.details}>Problemas ao fazer login?</Text>
            </TouchableOpacity>
        </View>
    )
}