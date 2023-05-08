import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD1dJCVybcWFLkuRQqaNUwSMgPR5bYFwEk",
    authDomain: "castleflix-2b8b3.firebaseapp.com",
    projectId: "castleflix-2b8b3",
    storageBucket: "castleflix-2b8b3.appspot.com",
    messagingSenderId: "67996078330",
    appId: "1:67996078330:web:4e075ca6a00228b31f7943",
    measurementId: "G-FKZCTYHML9"
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
//   const storage = firebase.storage();
  
//   export { auth, provider, storage };
//   export default db;