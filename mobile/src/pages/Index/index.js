import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Index() {

    const navigation = useNavigation();

    function navigateLogin() {
        navigation.navigate('Login');
    }
    function navigateEmail() {
        navigation.navigate('Email');
    }

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Image source={require('../../assets/logo3x.png')} style={styles.logo} />
                <Text style={styles.text}>
                    Ao tocar em Criar conta ou Entrar, você concorda com os
                    nossos Termos. Saiba como processamos os seus dados em
                    nossa Política de Privacidade e Política de Cookies.
                </Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={navigateEmail}>
                    <Text style={styles.buttonText}>CRIAR CONTA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonLogin]} onPress={navigateLogin}>
                    <Text style={styles.buttonText}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}