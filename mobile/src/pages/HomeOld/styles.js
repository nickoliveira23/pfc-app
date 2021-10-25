import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    cardImage:{
        flex: 1,
        width: null,
        height:null,
        // resizeMode: "cover",
        resizeMode: "cover",
        borderRadius: 8
    },
    card:{
        marginTop:10,
        margin: 10,
        flex: .8,
        borderRadius: 8,
        shadowRadius: 25,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 0},
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    matches:{
        backgroundColor:'#cccccc',
        marginHorizontal:5,
        marginBottom:20
        
    },
    header:{
        height:60,
        paddingTop:10,
        flexDirection:'row',
    },
    titulos:{
        color:'rgba(0,0,0, 0.75)',
        fontSize:16,
        fontWeight:'600',
        marginBottom:8
    },
    textInput:{
        height:30,
        fontWeight:'200',
        borderWidth:1,
        borderColor:'#ff8c00ad',
        borderRadius:12,
        paddingStart:13,
    },
    picker:{
        marginTop:-20,
        height:50,
        width:220,
    },
    inputIOS:{  
        alignItems:'center',
        justifyContent:'center',  
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 4,
        color: 'rgba(0,0,0, 0.7)',
        paddingRight: 30,},
    inputAndroid:{  
        alignItems:'center',
        justifyContent:'center',  
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,},

})

export default styles;