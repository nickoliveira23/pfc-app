import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#FFF'
    },

    header: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },

    image: {
        //resizeMode: 'contain',
        height: 500,
        width: '100%',
        backgroundColor: '#fff',
        marginTop: 20,
            
    }
})