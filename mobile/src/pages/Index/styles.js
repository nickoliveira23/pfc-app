import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCC',
    },

    logo: {
        width: 280,
        resizeMode: 'contain',
    },

    info: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 35
    },

    text: {
        paddingLeft: 35,
        paddingRight: 35,
        textAlign: 'center',
        fontSize: 12,
        color: '#9D9D9D',
    },

    buttons: {
        flex: 1,
        alignItems: 'center',
    },

    button: {
        width: '80%',
        height: '18%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 1,
        backgroundColor: '#252525',
    },

    buttonLogin: {
        backgroundColor: 'transparent',
        borderColor: '#FFF',
        marginTop: 20
    },

    buttonText: {
        color: '#FFF'
    },
})

export default styles;