import React, { useEffect, useState } from 'react';

import { SafeAreaView, Image, View, Text, TouchableOpacity, AsyncStorage, AppRegistry } from 'react-native';

import styles from './styles';

import like from '../../assets/like.png'
import nope from '../../assets/nope.png'

import api from '../../services/api';

export default function Home(){
    
    const [profiles, setProfiles] = useState([]);
    const [match, setMatch] = useState('');
    const [imageUri, setImageUri] = useState('');

    useEffect(() => {
        async function loadUsers(){
            const id = JSON.parse(await AsyncStorage.getItem('@CodeApi:user'));
            const response = await api.get('/profile/list', {
                headers: {
                    user: id,
                }
            });
            setProfiles(response.data);
        }

        loadUsers();
    }, []);
    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cardsContainer}>
                { profiles.length == 0
                    ? <Text style={styles.empty}> Acabou:(</Text>
                    : (
                        profiles.map((profile, index) => (
                            <View key={profile.id} style={[styles.cards, { zIndex: profiles.length - index }]}>
                                <Image style={styles.avatar} source={{uri: 'http://192.168.0.8:3333/show-picture/' +  profile.id}}/>
        
                                <View style={styles.footer}>

                                    <Text style={styles.name}> {profile.name} </Text>
                                    <Text style={styles.bio} numberOfLines={3}>{ profile.biography}</Text>

                                </View>

                            </View>
                        ))
                    )}
            </View>

            
                <View style={styles.buttonsContainer} >
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Image source={like}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Image source={nope}/>
                </TouchableOpacity>
            </View>
        

            
                {/* <View style={styles.matchContainer}>
                    <Image style={styles.matchItsaMatch} />

                    <Image style={styles.matchAvatar} />
                    <Text style={styles.matchName} >Beatriz</Text>
                    <Text style={styles.matchBio} >Gosta de mim</Text>

                    <TouchableOpacity onPress={() => {}} >
                        <Text style={styles.closeMatch} >Fechar</Text>
                    </TouchableOpacity>
                </View> */}
        </SafeAreaView>
    )
}