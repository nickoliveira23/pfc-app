import React, { useEffect, useState } from 'react';
import { SafeAreaView, Image, View, Text, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import styles from './styles';
import like from '../../assets/like.png'
import nope from '../../assets/nope.png'
import logo from '../../assets/wonderDark.png'
import api from '../../services/api';

export default function Home({ route }) {
    const navigation = useNavigation();
    const [profiles, setProfiles] = useState([]);
    const [match, setMatch] = useState('');
    const { id } = route.params;

    function navigatePerfil() {
        navigation.navigate('Perfil')
    }

    function navigateMatchList() {
        navigation.navigate('ListaMatch', {id})
    }

    useEffect(() => {
        async function loadUsers() {
            try {
                const response = await api.get('/profile/list', {
                    headers: {
                        user: id,
                    }
                });
                setProfiles(response.data);
            } catch (err) {
                Alert.alert('algo deu errado')
            }

        }
        loadUsers();
    }, [id]);

    async function handleLogout() {
        await AsyncStorage.clear();

        navigation.reset({
            index: 0,
            routes: [{ name: 'Index' }],
        });
    }

    async function handleRefresh() {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home', params: { id: id } }],
        });
    }

    async function handleLike() {
        const [profile, ...rest] = profiles;

        await api.post(`/like/${profile.id}`, {
            user: id
        });
        setProfiles(rest);
    }

    async function handleNope() {
        const [profile, ...rest] = profiles;

        await api.post(`/nope/${profile.id}`, {
            user: id
        });
        setProfiles(rest);
    }

    const createTwoButtonAlert = () =>
        Alert.alert(
            "Logout",
            "Deseja sair de sua conta?",
            [
                {
                    text: "Cancel",
                    onPress: () => { },
                    style: "cancel"
                },
                { text: "Sim", onPress: handleLogout }
            ]
        );

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={createTwoButtonAlert}>
                <Image style={styles.logo} source={logo} />
            </TouchableOpacity>
            <View style={styles.cardsContainer}>
                {profiles.length == 0
                    ? <Text style={styles.empty}> Você visualizou todos os perfis! </Text>
                    : (
                        profiles.map((profile, index) => (
                            <View key={profile.id} style={[styles.cards, { zIndex: profiles.length - index }]}>
                                <Image style={styles.avatar} source={{ uri: api.defaults.baseURL + '/show-picture/' + profile.id }} />
                                <View style={styles.footer}>
                                    <Text style={styles.name}> {profile.name} </Text>
                                    <Text style={styles.bio} numberOfLines={3}>{profile.biography}</Text>
                                </View>
                            </View>
                        ))
                    )}
            </View>
            
            {profiles.length > 0 && (
                <View style={styles.buttonsContainer} >
                    <TouchableOpacity style={styles.button} onPress={handleLike}>
                        <Image source={like} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={handleNope}>
                        <Image source={nope} />
                    </TouchableOpacity>
                </View>
            )}
            
            <View style={{ paddingTop: 10, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-around', borderWidth: 1, borderColor: 'rgb(196, 196, 196)', backgroundColor: '#fff' }}>

                <View>
                    <TouchableOpacity onPress={navigateMatchList}>
                        <Ionicons name="ios-chatbubbles-outline" size={28} color="#808080" />
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity onPress={handleRefresh}>
                        <AntDesign name="home" size={31} color="#808080" />
                    </TouchableOpacity>
                </View>


                <View>
                    <TouchableOpacity onPress={navigatePerfil}>
                        <Ionicons name="person-outline" size={28} color="#808080" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}