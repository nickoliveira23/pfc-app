import React from 'react';
import Routes from './src/routes';
import * as firebase from 'firebase'
import 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyB28sGw71iwMyM8GGo2Iq_pRMb68LBtZ0o",
//   authDomain: "wonder-pfc.firebaseapp.com",
//   databaseURL: "https://wonder-pfc-default-rtdb.firebaseio.com",
//   projectId: "wonder-pfc",
//   storageBucket: "wonder-pfc.appspot.com",
//   messagingSenderId: "949035404713",
//   appId: "1:949035404713:web:57d6482fa8a59e2f9308b8",
//   measurementId: "G-C8QVKN024J"
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig)
// }


export default function App() {

  return (
    <Routes />
  );
}