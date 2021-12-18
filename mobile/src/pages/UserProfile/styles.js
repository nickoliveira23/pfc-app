import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        marginTop: 40,
        marginBottom: 20,
        flexDirection: 'row',
    },

    titulos: {
        color: 'rgba(0,0,0, 0.75)',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8
    },

    textInput: {
        height: 40,
        fontWeight: '200',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 4,
        paddingStart: 13,
    },

    picker: {
        marginTop: -20,
        height: 50,
        width: 220,
    },

    inputIOS: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 4,
        color: 'rgba(0,0,0, 0.7)',
        paddingRight: 30,
    },

    inputAndroid: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
    },

    location: {
        flexDirection: 'row',
    },

    modalContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        marginLeft: 0
    },

    modal: {
        bottom: 0,
        position: 'absolute',
        height: '40%',
        backgroundColor: '#DCDCDC',
        opacity: 0.9,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingLeft: 25,
        paddingRight: 25
    },

    indicator: {
        width: 50,
        height: 5,
        backgroundColor: '#808080',
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 5
    },

})

export default styles;