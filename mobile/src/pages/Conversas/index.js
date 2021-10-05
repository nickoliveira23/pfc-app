import React,{useState} from 'react';
import {
    ScrollView,
    Text,
    TouchableOpacity,
    ImageBackground,
    View,
    FlatList,
    Image
  } from "react-native";
  import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
  import data from "../../assets/dados/data";
  import styles, { DARK_GRAY } from "../../assets/styles/index";

  export default function Conversas( {navigation} ){
    

    return(
      <ImageBackground
        style={styles.bg}
      >
        <View style={styles.containerMessages}>
          <View style={styles.top}>
            <View style={{marginLeft:10}}>
            <Text style={styles.title}>Messages</Text>
            </View>
            <TouchableOpacity>
            <FontAwesome name="ellipsis-v" size={24} color={DARK_GRAY} />
            </TouchableOpacity>
          </View>
    
           <FlatList style={{flex:1,paddingHorizontal:10}}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.containerMessage}>
                  <Image source={item.uri} style={styles.avatar} />
                  <View>
                    <Text>{item.name}</Text>
                    <Text style={styles.message}>lastMessage</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
            <View style={{flex:0.09,paddingTop:5,flexDirection:'row',justifyContent:'space-around',borderWidth:1,borderColor:'rgb(196, 196, 196)',backgroundColor:'rgb(232, 232, 232)'}}>
              <View>
                  <TouchableOpacity onPress={()=>navigation.navigate('CadPerfil')}>
                      <Ionicons name="person-outline" size={28} color="#808080" />
                      <Text style={{fontSize:10,textAlign:'center'}}>Perfil</Text>
                  </TouchableOpacity>
              </View>

              <View >
                  <TouchableOpacity>
                      <AntDesign name="home" size={31} color="#808080" onPress={()=>navigation.navigate('Home')} />
                      <Text style={{fontSize:10,textAlign:'center'}}>Match</Text>
                  </TouchableOpacity>
              </View>

              <View>
                  <TouchableOpacity onPress={()=>navigation.navigate('Conversas')}>
                      <Ionicons name="ios-chatbubbles-outline" size={28} color="#808080" />
                      <Text style={{fontSize:10,marginLeft:-10}}>Conversas</Text>
                  </TouchableOpacity>
              </View>
          </View>            
        </View>
      </ImageBackground>
      );
  }
    