import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs} from "firebase/firestore";
import { getAuth,onAuthStateChanged,createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  // apiKey: "AIzaSyC1v1KqXGiFzH98jWc9W8YS8XrQ_PtHX20",
  // authDomain: "netflix-clone-b1738.firebaseapp.com",
  // projectId: "netflix-clone-b1738",
  // storageBucket: "netflix-clone-b1738.appspot.com",
  // messagingSenderId: "45448191515",
  // appId: "1:45448191515:web:194a218edcc1c38e28e2be"
  apiKey: "AIzaSyAGKhmSx657SMKLJDE0Gf-UMZQyim_xtL8",
  authDomain: "cineflix-13d1c.firebaseapp.com",
  projectId: "cineflix-13d1c",
  storageBucket: "cineflix-13d1c.appspot.com",
  messagingSenderId: "766017466259",
  appId: "1:766017466259:web:26deac011ae7e5641f8266"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;







