import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB3z77eUbN0neUv_QGjwK9pTPXWa1ymxek",
    authDomain: "linkedin-clone-d916f.firebaseapp.com",
    projectId: "linkedin-clone-d916f",
    storageBucket: "linkedin-clone-d916f.appspot.com",
    messagingSenderId: "168820778321",
    appId: "1:168820778321:web:2d11c2a33ff29fbca89f70",
    measurementId: "G-7PC7BG3GLL"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth,provider, storage};
  export default db;