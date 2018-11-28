import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCqxUqVyFe54IpiDakOjuwcuxAc0EYHdZw',
    authDomain: 'authentication-2e1d9.firebaseapp.com',
    databaseURL: 'https://authentication-2e1d9.firebaseio.com',
    projectId: 'authentication-2e1d9',
    storageBucket: 'authentication-2e1d9.appspot.com',
    messagingSenderId: '14660715585'
};


const Firebase = firebase.initializeApp(config);

export default Firebase;
