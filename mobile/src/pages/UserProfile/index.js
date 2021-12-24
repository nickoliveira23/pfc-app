import React, { useState, useEffect } from 'react';
import Modal from "react-native-modal";
import MaskInput from 'react-native-mask-input';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons, Feather, Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from "expo-image-picker";
import styles from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import api from '../../services/api';

export default function UserProfile() {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);

    function toggleModal() {
        setModalVisible(!isModalVisible);
    };

    function navigateBack() {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home', params: { id: idUser } }],
        });
    }

    async function handleUpdateImage(imagem_recebida) {
        try {
            const requestConfigFile = {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            };

            const dataFile = new FormData();
            const fileURL = imagem_recebida.uri;
            const fileName = fileURL.split("/").pop();
            const ext = fileURL.split(".").pop();

            dataFile.append("image", {
                uri: fileURL, // Caminho da imagem
                name: fileName,
                type: "image/" + ext
            });

            await api.put(`/update-image/${idUser}`, dataFile, requestConfigFile);

            navigation.reset({
                index: 0,
                routes: [{ name: 'UserProfile' }],
            });

        } catch (err) {
            Alert.alert(err.response.data.mensagem);
        }
    }


    async function handleSelectGalery() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
        });
        if (result.cancelled) {
            return;
        } else {
            toggleModal()
            handleUpdateImage(result);
        }

    }

    function navigateFullImage() {
        navigation.navigate('FullImage', { id: idUser });
        setModalVisible(false)
    }

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [gender, setGender] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [goal, setGoal] = useState('');
    const [biography, setBiography] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [idUser, setIdUser] = useState('');

    useEffect(() => {
        async function LoadData() {
            const userObj = await AsyncStorage.getItem('@CodeApi:user');

            const userString = JSON.parse(userObj);
            const { id } = userString;

            setIdUser(id)

            const response = await api.get(`/profile/${id}`);

            const profile = response.data;

            setName(profile.name);
            setWhatsapp(profile.whatsapp);
            setAge(JSON.stringify(profile.age));
            setGender(profile.gender);
            setBiography(profile.biography);
            setGoal(profile.goal);
            setCity(profile.city);
            setUf(profile.uf);
        }
        LoadData();
    }, []);

    async function handleUpdate() {
        try {

            const validation = await api.post('/profile/verify', {
                name: name,
                whatsapp: whatsapp,
                age: age,
                gender: gender,
                city: city,
                uf: uf,
                goal: goal,
                biography: biography,
            });

            const userObj = await AsyncStorage.getItem('@CodeApi:user');
            const userString = JSON.parse(userObj);
            const id = userString.id;

            await api.put(`profile/update/${id}`, {
                name: name,
                whatsapp: whatsapp,
                age: age,
                gender: gender,
                biography: biography,
                goal: goal,
                city: city,
                uf: uf,
            });

            Alert.alert(validation.data.message)

            navigation.reset({
                index: 0,
                routes: [{ name: 'Home', params: { id: id } }],
            });
        } catch (err) {
            setErrorMessage(err.response.data.error);
            Alert.alert(err.response.data.error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <TouchableOpacity onPress={navigateBack} style={{ right: 20 }}>
                        <Feather name="arrow-left" size={28} color="#000" />
                    </TouchableOpacity>
                </View>

                <Modal
                    isVisible={isModalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                    onSwipeComplete={() => setModalVisible(false)}
                    swipeDirection={['down']}
                    style={styles.modalContainer}
                >
                    <View style={styles.modal}>
                        <View style={styles.indicator} />
                        <View style={styles.modalElements}>
                            <TouchableOpacity onPress={navigateFullImage}>
                                <View style={styles.modalItem}>
                                    <View style={styles.modalIcons}>
                                        <FontAwesome5 name="user-edit" size={18} color="#000" />
                                    </View>
                                    <Text style={styles.modalText}>Ver foto de perfil</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleSelectGalery}>
                                <View style={styles.modalItem}>
                                    <View style={styles.modalIcons}>
                                        <Entypo name="images" size={25} color="#000" />
                                    </View>
                                    <Text style={styles.modalText}>Alterar foto de perfil</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.modalItem}>
                                    <View style={styles.modalIcons}>
                                        <MaterialCommunityIcons name="image-remove" size={25} color="#000" />
                                    </View>
                                    <Text style={styles.modalText}>Remover foto de perfil</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: '600', textAlign: 'center' }}>Editar Informações</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleUpdate}>
                        <Text style={{ color: '#ff8c00ad', left: 20, fontSize: 15 }}>Concluido</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={{ marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}>

                    <TouchableOpacity onPress={toggleModal}>
                        <Image style={{ width: 100, height: 100, borderRadius: 100 }} source={{ uri: api.defaults.baseURL + '/show-picture/' + idUser }} />
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomColor: '#CCCCCC', borderBottomWidth: 1, borderTopWidth: 1, borderTopColor: '#CCCCCC', paddingHorizontal: 15, paddingVertical: 15, backgroundColor: '#FFFFFF' }}>
                    {!!errorMessage && <Text style={{ color: '#FF0000', marginBottom: 20, textAlign: 'center' }}>{errorMessage} </Text>}
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC', paddingBottom: 15 }}>
                        <Text style={styles.titulos}>   NOME *</Text>
                        <TextInput keyboardType='default' multiline={false} clearButtonMode='always' maxLength={25} style={styles.textInput} placeholder='Adicione o nome' value={name} onChangeText={name => setName(name)} />
                    </View>
                    <View style={{ marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#CCCCCC', paddingBottom: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.titulos}>   CELULAR *</Text>
                        </View>
                        <MaskInput
                            placeholder='Adicione seu número de celular'
                            keyboardType='numeric'
                            style={styles.textInput}
                            clearButtonMode='always'
                            value={whatsapp}
                            onChangeText={(masked, unmasked) => {
                                setWhatsapp(unmasked); // you can use the unmasked value as well 
                            }}
                            mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        />
                    </View>
                    <View style={{ marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#CCCCCC', paddingBottom: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.titulos}>   IDADE *</Text>
                        </View>
                        <TextInput keyboardType='numeric' clearButtonMode='always' style={styles.textInput} maxLength={2} placeholder='Adicione sua idade' value={age} onChangeText={age => setAge(age)} />
                    </View>
                    <View style={{ marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#CCCCCC', paddingBottom: 15 }}>
                        <Text style={styles.titulos}>   GENERO *</Text>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Selecionar',
                                value: null,
                            }}
                            style={{
                                ...styles,
                                iconContainer: {
                                    top: 9,
                                    right: 5,
                                },
                            }}
                            Icon={() => {
                                return <Ionicons name="md-arrow-down" size={24} color="gray" />;
                            }}
                            value={gender}
                            onValueChange={gender => setGender(gender)}
                            items={[
                                { label: 'Masculino', value: 'Masculino' },
                                { label: 'Feminino', value: 'Feminino' },
                                { label: 'Outro', value: 'Outro' },
                            ]}
                        />
                    </View>
                    <View style={{ marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#CCCCCC', paddingBottom: 15 }}>
                        <Text style={styles.titulos}>   SOBRE MIM</Text>
                        <TextInput multiline={true} placeholder='Fale sobre você' maxLength={150} style={[styles.textInput, { height: 100 }]} value={biography} onChangeText={biography => setBiography(biography)} />
                    </View>
                    <View style={{ marginTop: 10, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0, 0.05)', paddingBottom: 15 }}>
                        <Text style={styles.titulos}>   MOSTRAR *</Text>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Selecionar',
                                value: null,
                            }}
                            style={{
                                ...styles,
                                iconContainer: {
                                    top: 9,
                                    right: 5,
                                },
                            }}
                            Icon={() => {
                                return <Ionicons name="md-arrow-down" size={24} color="gray" />;
                            }}
                            value={goal}
                            onValueChange={goal => setGoal(goal)}
                            items={[
                                { label: 'Mulheres', value: 'Mulheres' },
                                { label: 'Homens', value: 'Homens' },
                                { label: 'Ambos', value: 'Ambos' },
                            ]}
                        />
                    </View>
                    <View style={styles.location}>
                        <View style={{ flex: 1, marginTop: 10, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0, 0.05)', paddingBottom: 15 }}>
                            <Text style={styles.titulos}>   CIDADE</Text>
                            <TextInput placeholderTextColor='rgba(0,0,0, 0.50)' placeholder='Adicionar Cidade' clearButtonMode='always' multiline={false} maxLength={100} style={styles.textInput} value={city} onChangeText={city => setCity(city)} />
                        </View>
                        <View style={{ width: 60, marginLeft: 20, marginTop: 10, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0, 0.05)', paddingBottom: 15 }}>
                            <Text style={styles.titulos}>   UF</Text>
                            <TextInput autoCapitalize='characters' placeholderTextColor='rgba(0,0,0, 0.50)' placeholder='UF' clearButtonMode='always' multiline={false} maxLength={2} style={styles.textInput} value={uf} onChangeText={uf => setUf(uf)} />
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}

