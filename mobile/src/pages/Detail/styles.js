import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 10,
    },

    logo: {
        alignSelf: 'center',
        width: 140,
        height: 90,
        resizeMode: 'contain'
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },

    imageCard: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 100,
        //resizeMode: 'contain',
        height: 100,
        width: 100,
        backgroundColor: '#fff',
        alignSelf: 'center'
       
    },

    profile: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 0,
    },

    profileItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    profileProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold',
        marginTop: 24,

    },

    rightItems: {
        alignItems: 'flex-end'
    },

    profileValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380',

    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    optionTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131A',
        lineHeight: 30,
        textAlign: 'center'
    },

    optionDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

    actionWhatsapp: {
        backgroundColor: '#128c7e',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionDesfazer: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
})