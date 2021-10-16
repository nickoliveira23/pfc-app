import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, TextInput, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import api from '../../services/api';

export default function CadSenha() {

    const navigation = useNavigation();
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    function navigatePerfil() {
      navigation.navigate('CadPerfil');
    }

    handlePassword = async () => {
      try {
        const credentials = {
            password: password
        }
        const response = await api.post('/user/passwordVerify', credentials);
        /*const response = await api.post('/user/passwordVerify', {
          password: '123Nicko456!'
        });*/
        
        const user = response.data;

        await AsyncStorage.setItem('@CodeApi:password', JSON.stringify(user));

        navigation.reset({
          index: 0,
          routes: [{ name: 'Index' }],
        });

        navigatePerfil();

      } catch (err) {
        setErrorMessage(err.response.data.error);
        Alert.alert(err.response.data.error);
      }
    }
  
    return (
      <View style={styles.container}>
        <ScrollView bounces={false} contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps='handled'>
          <View style={styles.area1}>
            <AntDesign name='left' size={30} style={{alignSelf:'flex-start'}} color='rgba(0,0,0, 0.75)' onPress={()=>navigation.navigate('Index')}/>
            <Text style={styles.txtSenha}>Senha</Text>
            <TextInput maxLength={15} placeholder='Digite sua senha' style={{fontSize:30, fontWeight:'200', height: 100, width: 300, textAlign:'center'}} secureTextEntry={true} value={password} onChangeText={password => setPassword(password)}/>
            <Text style={{fontWeight:'200',color:'#707070',marginTop:-35}}>_____________________________________</Text>
            <View>
              <Text style={styles.txtCodigo}>Lembre-se, não informe sua senha para ninguém!</Text>
            </View>
          </View>

          <View style={styles.area2}>
          { !!errorMessage && <Text style={{color: '#FF0000', marginBottom: 20}}>{ errorMessage } </Text> }
            <TouchableOpacity onPress={handlePassword} style={[styles.botao,{borderColor:'#707070',backgroundColor:null,marginBottom:50}]}>
              <Text style={{color:'#707070'}}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
}




