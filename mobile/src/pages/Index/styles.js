import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 210,    
        backgroundColor: '#FFF'
    },

    header: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        textAlign: 'justify'
    },

    detailsButton: {
        marginTop: 10,
        borderRadius: 20,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1
    },

    detailsButtonText: {
        fontSize: 12
    },

    detailsLink: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15
    }
})