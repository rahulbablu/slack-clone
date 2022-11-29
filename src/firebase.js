import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCLfuE1ijYrxuN5obXAl0jG1XkYWQInJ24",
    authDomain: "slack-clone-f4a27.firebaseapp.com",
    projectId: "slack-clone-f4a27",
    storageBucket: "slack-clone-f4a27.appspot.com",
    messagingSenderId: "653107943247",
    appId: "1:653107943247:web:b498434376307df731173a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();  

  export { db, auth, provider }