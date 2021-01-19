

import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAYz-028w-k1yKd6HixcbIsw2sJwVmYleM",
    authDomain: "snapchatapp-82c41.firebaseapp.com",
    projectId: "snapchatapp-82c41",
    storageBucket: "snapchatapp-82c41.appspot.com",
    messagingSenderId: "96381530229",
    appId: "1:96381530229:web:fd16b5444f3758c1ca883c",
    measurementId: "G-7RFNQRHKGE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const storage = firebase.storage();

  const provider= firebase.auth.GoogleAuthProvider();

  
  export  {db,auth,storage,provider};

