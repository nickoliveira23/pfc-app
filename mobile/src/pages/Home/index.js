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
    const [id, setId] = useState('');

    function navigatePerfil() {
        navigation.navigate('Perfil')
    }

    useEffect(() => {
        function getId() {
            const { id } = route.params;
            setId(id)
        }
        getId();
    }, [id]);

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

        navigation.navigate('Index');
    }

    async function handleLike() {
        const [profile, ...rest] = profiles;

        console.log(id)
        console.log(profile.id)

        await api.post(`/like/${profile.id}`, {
            user: id
        });
        setProfiles(rest);
    }

    async function handleNope() {
        const [profile, ...rest] = profiles;

        console.log(id)
        console.log(profile.id)

        try {
            await api.post(`/nope/${profile.id}`, {
                user: id
            });
        } catch (error) {
            console.log("deu ruim")
        }
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
                                <Image style={styles.avatar} source={{ uri: 'http://192.168.0.5:3333/show-picture/' + profile.id }} />
                                <View style={styles.footer}>
                                    <Text style={styles.name}> {profile.name} </Text>
                                    <Text style={styles.bio} numberOfLines={3}>{profile.biography}</Text>
                                </View>
                            </View>
                        ))
                    )}
            </View>
            { profiles.length > 0 && (
            <View style={styles.buttonsContainer} >
                <TouchableOpacity style={styles.button} onPress={handleLike}>
                    <Image source={like} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleNope}>
                    <Image source={nope} />
                </TouchableOpacity>
            </View>
            ) }
            {/* <View style={styles.matchContainer}>
                    <Image style={styles.matchItsaMatch} />

                    <Image style={styles.matchAvatar} />
                    <Text style={styles.matchName} >Beatriz</Text>
                    <Text style={styles.matchBio} >Gosta de mim</Text>

                    <TouchableOpacity onPress={() => {}} >
                        <Text style={styles.closeMatch} >Fechar</Text>
                    </TouchableOpacity>
                </View> */}
            <View style={{ paddingTop: 10, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-around', borderWidth: 1, borderColor: 'rgb(196, 196, 196)', backgroundColor: '#fff' }}>

                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Conversas')}>
                        <Ionicons name="ios-chatbubbles-outline" size={28} color="#808080" />
                        {/* <Text style={{ fontSize: 10, marginLeft: -10 }}>Conversas</Text> */}
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity>
                        <AntDesign name="home" size={31} color="#808080" />
                        {/* <Text style={{ fontSize: 10, textAlign: 'center' }}>Match</Text> */}
                    </TouchableOpacity>
                </View>


                <View>
                    <TouchableOpacity onPress={navigatePerfil}>
                        <Ionicons name="person-outline" size={28} color="#808080" />
                        {/* <Text style={{ fontSize: 10, textAlign: 'center' }}>Perfil</Text> */}
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}