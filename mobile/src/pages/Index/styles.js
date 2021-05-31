import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex:1,
      padding:40,
      // backgroundColor:'#3B3B3B',
      backgroundColor:'#CCCCCC',
      justifyContent:'center',
      alignItems:'center'
    },
    logo:{
      width:283,
      height:101
    },
    txt:{
      marginTop:10,
      textAlign:'center',
      fontSize:12,
      color:'#FFFFFF',
    },
    area1:{
      flex:1,
      alignItems:'center',
      justifyContent:'flex-end'
    },
    area2:{
      flex:1,
      alignItems:'center',
    },
    txtProb:{
      marginTop:30,
      color:'#F0F0F0',
      fontSize:10
    },
    botao:{
      width:315,
      height:53,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:25,
      borderWidth:1,
      backgroundColor:'rgba(0,0,0, 0.75)'
      // backgroundColor:'rgb(233,0,204)'
      // borderColor:'#A7A7A7',
      // borderWidth:1,
      // width: 315,
      // height: 53,
      // alignItems:'center',
      // justifyContent:'center',
      // borderRadius:25,
      // backgroundColor:'red'
    },
    textoBotao:{
      color:'#F0F0F0'
    }
  })

  export default styles;