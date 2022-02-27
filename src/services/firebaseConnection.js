import firebase from 'firebase/app';

import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDzRu0tLpaAjjDFPY1-R4eDAjCPKWsnr5E",
    authDomain: "financasapp-f5fc0.firebaseapp.com",
    projectId: "financasapp-f5fc0",
    storageBucket: "financasapp-f5fc0.appspot.com",
    messagingSenderId: "1023540583980",
    appId: "1:1023540583980:web:ea231b9e7e70fed4c07b89"
  };

  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);    
  }

export default firebase;