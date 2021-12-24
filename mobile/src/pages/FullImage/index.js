import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import api from '../../services/api';

export default function FullImage({ route }) {
    const navigation = useNavigation();

    const { id } = route.params;

    function navigateBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#000" />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center' }}>Dados do contato</Text>
                </View>
                <View><Text>    </Text></View>
            </View>
            <View>
                <Image source={{ uri: api.defaults.baseURL + '/show-picture/' + id }} style={styles.image} />
            </View>
        </View>
    )
}