import { Alert, AsyncStorage } from 'react-native';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.9:3333',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.request.use(
  async config => {
    const userAuthToken = await AsyncStorage.getItem('@CodeApi:token');

    config.headers['Authorization'] = 'Bearer ' + userAuthToken

    return config
  },
  err => {
    Promise.reject(err)
  }
)

api.interceptors.response.use(response => new Promise((resolve, reject) => {
  resolve(response);
}), error => {
  if (!error.response) {
    return new Promise((resolve, reject) => {
      reject(error)
    });
  }
  if (error.response.status === 403) {

    const requestConfig = error.config

    Alert.alert("Sua sessão expirou!")

    AsyncStorage.clear();

    return axios(requestConfig)
  } else {
    return new Promise((resolve, reject) => {
      reject(error)
    });
  }
})

export default api;