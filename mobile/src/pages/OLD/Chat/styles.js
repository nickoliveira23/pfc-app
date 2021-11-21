import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#757575e3'
    },
    matches:{
        backgroundColor:'#cccccc',
        marginHorizontal:5,
        marginBottom:20
        
    },
    modalView: {
        margin: 60,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
})

export default styles;