import firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: 'AIzaSyDe6N_pfjp88YjAvFbmYh4TWgNYwpJ1PF8',
   authDomain: 'tiktokvideo-b7324.firebaseapp.com',
   projectId: 'tiktokvideo-b7324',
   storageBucket: 'tiktokvideo-b7324.appspot.com',
   messagingSenderId: '1050078618472',
   appId: '1:1050078618472:web:6c1797415df17f5bcfecdd',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
