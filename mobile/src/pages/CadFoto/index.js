import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

export default function CadFoto({ route }) {
    const navigation = useNavigation();
    const [id, setId] = useState('');


    useEffect(() => {
        async function GetIdData() {
            setId(route.params);
        }
        GetIdData()
    });

    async function handleImage(imagem_recebida) {
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
                uri: fileURL,
                name: fileName,
                type: "image/" + ext
            });

            const obj = JSON.stringify(id)
            const idString = JSON.parse(obj).id

            const response = await api.post(`/upload-image/${idString}`, dataFile, requestConfigFile);

            navigation.reset({
                index: 0,
                routes: [{ name: 'Index' }],
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
            handleImage(result);
        }
    }
    return (
        <View style={{ justifyContent: 'center', flex: 1 }}>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => handleSelectGalery()}>
                    <EvilIcons name="user" size={150} color="rgba(0,0,0, 0.75)" style={{ paddingBottom: 15 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
