import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, AsyncStorage, Image} from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
import api from '../../services/api';

export default function CadFoto({ route, navigation }){
    const [picturePreview, setPicturePreview] = useState("");
    const [types, setTypes] = useState(false);
    const [id, setId] = useState('');
    function handleSelectTypeImage() {
        setTypes(true);
    }

    useEffect (() => {
        async function SampleComponent() {
            setId(route.params);
        }
        SampleComponent()
    });

    async function UploadImage(imagem_recebida){
        try {
            //const userAuthToken = "TOKEN_DE_ACESSO_A_API";
            const requestConfigFile = {
              headers: {
                //Authorization: `bearer ${userAuthToken}`,
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

            const obj = JSON.stringify(id)
            const idString = JSON.parse(obj).id
            
            const response = await api.post(`/upload-image/${idString}`, dataFile, requestConfigFile);
            
            navigation.navigate('Index');
        } catch (err) {
            Alert.alert(err.response.data.mensagem);
        } 
    }

    async function handleSelectCamera() {
        setTypes(false);
        const result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
        })

        setPicturePreview(result.uri);
        UploadImage(result);
    }
      
    async function handleSelectGalery() {
        setTypes(false);
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
        });

        if (result.cancelled) {
            return;
        } else {
            setPicturePreview(result.uri);
            UploadImage(result);
        }
    }
    return (
        <View style={{justifyContent: 'center', flex:1}}>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={() => handleSelectTypeImage()}>
                    <EvilIcons name="user" size={150} color="rgba(0,0,0, 0.75)" style={{paddingBottom:15}}/>
                </TouchableOpacity>
            </View>
        
                
        {types && (
            <View style={{flexDirection:'row', justifyContent:'space-between' }}>
                <View style={{paddingTop:5, paddingLeft: 80, paddingBottom: 5}}>
                    <TouchableOpacity  onPress={handleSelectGalery} >
                        <Text style={{color:'#ff8c00ad'}}>Galeria</Text>
                    </TouchableOpacity>
                </View>
                <View style={{paddingTop:5, paddingRight: 80, paddingBottom: 5}}>
                    <TouchableOpacity onPress={handleSelectCamera}>
                        <Text style={{color:'#ff8c00ad'}}>Câmera</Text>
                    </TouchableOpacity>
                </View>
                    
            </View>
        )}  

        {/* <Image style={styles.avatar} source={{uri: 'http://192.168.0.8:3333/show-picture/' +  profile.id}}/>   */}
        </View>  
    );
}
