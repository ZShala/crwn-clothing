import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAApPoTyoThN5hJ11J_6WpVmB-YNy86aw8",
    authDomain: "crwn-db-d3a63.firebaseapp.com",
    databaseURL: "https://crwn-db-d3a63.firebaseio.com",
    projectId: "crwn-db-d3a63",
    storageBucket: "crwn-db-d3a63.appspot.com",
    messagingSenderId: "54713612451",
    appId: "1:54713612451:web:0d023f5c06cfaa77eb6716",
    measurementId: "G-RQ1HH0LRLH"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;