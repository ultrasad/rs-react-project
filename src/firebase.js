import firebase from '@firebase/app'
import '@firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCYayMHSoE8uUCQeo0InwazVsv1ZkcL28s",
    authDomain: "rs-raectjs-hanajung.firebaseapp.com",
    databaseURL: "https://rs-raectjs-hanajung.firebaseio.com",
    projectId: "rs-raectjs-hanajung",
    storageBucket: "rs-raectjs-hanajung.appspot.com",
    messagingSenderId: "60693433557",
    appId: "1:60693433557:web:b3dd8def35e38df44a665c",
    measurementId: "G-F71KC4R1V5"
  };

  const firebaseApp = firebase.apps[0] ? firebase.apps[0] : firebase.initializeApp(firebaseConfig); 

  export default firebaseApp