import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// we need to somehow seed the database

// we need a config here
const config = {
    apiKey: "AIzaSyDam-r4aGkrKhti9hg5KKXHDX6_JW_qf8Q",
    authDomain: "netflix-clone-gonxis.firebaseapp.com",
    databaseURL: "https://netflix-clone-gonxis.firebaseio.com",
    projectId: "netflix-clone-gonxis",
    storageBucket: "netflix-clone-gonxis.appspot.com",
    messagingSenderId: "807109271920",
    appId: "1:807109271920:web:10e0d3ca32381e0e28efb5"
};

const firebase = Firebase.initializeApp(config);

export { firebase };