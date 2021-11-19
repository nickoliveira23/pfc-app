import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';

import logo from '../../assets/wonderDark.png';

import styles from './styles';

export default function Detail({ route }) {
    const navigation = useNavigation();

    const { profile } = route.params;

    function navigateBack() {
        navigation.goBack()
    }



    // function sendWhatsapp() {
    //     Linking.openURL(`whatsapp://send?phone=${profile.whatsapp}&text=${message}`);
    // }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#000" />
                </TouchableOpacity>
                <Image source={logo} style={styles.logo} />
            </View>

            <View style={styles.profile}>
                <View style={styles.profileItem}>
                    <View>
                        <Text style={[styles.profileProperty]}>NOME</Text>
                        <Text style={styles.profileValue}>{profile.name}</Text>
                    </View>

                    <View style={styles.rightItems}>
                        <Text style={[styles.profileProperty]}>IDADE</Text>
                        <Text style={styles.profileValue}>{profile.age}</Text>
                    </View>
                </View>

                <View style={styles.profileItem}>
                    <View>
                        <Text style={styles.profileProperty}>INTERESSE</Text>
                        <Text style={styles.profileValue}>{profile.goal}</Text>
                    </View>

                    <View style={styles.rightItems}>
                        <Text style={styles.profileProperty}>SEXO</Text>
                        <Text style={styles.profileValue}>{profile.gender}</Text>
                    </View>
                </View>
                <View style={styles.profileItem}>
                    <View>
                        <Text style={styles.profileProperty}>ENDEREÇO</Text>
                        <Text style={styles.profileValue}>{profile.city} - {profile.uf}</Text>
                    </View>

                    <View style={styles.rightItems}>
                        <Text style={styles.profileProperty}>CONTATO</Text>
                        <Text style={styles.profileValue}>{profile.whatsapp}</Text>
                    </View>
                </View>
                <Text style={styles.profileProperty}>BIOGRAFIA</Text>
                <Text style={styles.profileValue}>{profile.biography}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.optionTitle}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.actionWhatsapp} onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=' + 55 + profile.whatsapp)}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionDesfazer} onPress={() => { }}>
                        <Text style={styles.actionText}>Cancelar Match</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}