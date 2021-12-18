import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  elements: {

  },

  header: {
    left: 30,
  },

  title: {
    textAlign: 'center',
    fontSize: 70,
    fontWeight: 'bold',
    color: 'rgba(0,0,0, 0.75)'
  },

  inputArea: {
    alignItems: 'center',
  },

  inputText: {
    marginTop: 20,
    height: 50,
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgb(195,195,197)',
    flexDirection: 'row',
    padding: 10
  },

  confirmation: {
    marginTop: 50,
    alignItems: 'center'
  },

  
  areaNumero: {
    marginTop: 20,
    width: 250,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  numero: {
    marginTop: 10,
    color: 'rgba(0,0,0, 0.75)',
    fontSize: 10
  },
  txtCodigo: {
    marginTop: 40,
    textAlign: 'center',
    color: 'rgba(0,0,0,0.46)',
    fontSize: 10,
    width: 250
  },
  botao: {
    width: 315,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: 'rgb(233,0,204)'
  },
  textoBotao: {
    color: '#F0F0F0',
    textAlign: 'center'
  }
})

export default styles;