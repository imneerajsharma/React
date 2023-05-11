import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1v1KqXGiFzH98jWc9W8YS8XrQ_PtHX20",
  authDomain: "netflix-clone-b1738.firebaseapp.com",
  projectId: "netflix-clone-b1738",
  storageBucket: "netflix-clone-b1738.appspot.com",
  messagingSenderId: "45448191515",
  appId: "1:45448191515:web:194a218edcc1c38e28e2be"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;





