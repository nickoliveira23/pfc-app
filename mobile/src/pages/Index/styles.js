import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 210,    
        backgroundColor: '#181818'
    },

    header: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        color: '#FFF'
    },

    details: {
        color: '#FFF',
        
    },  

    detailsButton: {
        marginTop: 10,
        borderRadius: 20,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#FFF'

    },

    detailsButtonText: {
        fontSize: 12,
        color: '#FFF'

    },

    detailsLink: {
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
})