import React, { useEffect, useState } from 'react';

import {
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
  Image
} from "react-native";

import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import styles from "../../assets/styles/index";

export default function ListaMatch({ route }) {
  const [profiles, setProfiles] = useState([]);
  const navigation = useNavigation();
  const { id } = route.params;

  async function navigateBack() {
    navigation.goBack()
  }

  function navigateToDetail(profile) {
    navigation.navigate('Detail', { profile, id });
}

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await api.get('/profile/match', {
          headers: {
            user: id,
          }
        });

        setProfiles(response.data);
      } catch (err) {
        Alert.alert('Algo deu errado!')
      }

    }
    loadUsers();
  }, [id]);

  return (
    <ImageBackground style={styles.bg}>
      <View style={styles.containerMessages}>
        <View style={styles.top}>
          <View style={{ marginLeft: 10, flexDirection: 'row' }}>
            <AntDesign name='left' size={25} style={{ alignSelf: 'flex-start' }} color='rgba(0,0,0, 0.75)' onPress={navigateBack} />
            <Text style={styles.title}>  Match</Text>
          </View>
        </View>
        <FlatList style={{ flex: 1, paddingHorizontal: 10 }}
          data={profiles}
          keyExtractor={profile => String(profile.id)}
          renderItem={({ item: profile }) => (
            <TouchableOpacity onPress={() => navigateToDetail(profile)}>
              <View style={styles.containerMessage}>
                <Image source={{ uri: api.defaults.baseURL + '/show-picture/' + profile.id }} style={styles.avatar} />
                <View>
                  <Text>{profile.name}</Text>
                  <Text style={styles.message}>Curtiu você ;)</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}
