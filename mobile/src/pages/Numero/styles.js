import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingTop:50,
      padding:30,
      backgroundColor:'#F5F5F5'
    },
    area1:{
      flex:1,
      alignItems:'center'
    },
    area2:{
      flex:1,
      justifyContent:'flex-end',
      alignItems:'center'
    },
    txtNumero:{
      marginTop:60,
      fontSize:40,
      fontWeight:'bold',
      color:'rgba(0,0,0, 0.75)'
    },
    areaNumero:{
      marginTop:20,
      width:250,
      alignItems:'center',
      justifyContent:'space-around',
      flexDirection:'row',
    },
    numero:{
      color:'rgba(0,0,0, 0.75)'
    },
    txtCodigo:{
      marginTop:40,
      textAlign:'center',
      color:'rgba(0,0,0,0.46)',
      fontSize:10,
      width:250
    }
  })

  export default styles;