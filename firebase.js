import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';  

const firebaseConfig = {
  apiKey: "AIzaSyCaw62IDbzJyr9CH5a89r5EuinP8qA2wMo",
  authDomain: "loadconnect-ae194.firebaseapp.com",
  projectId: "loadconnect-ae194",
  storageBucket: "loadconnect-ae194.appspot.com",
  messagingSenderId: "91043629998",
  appId: "1:91043629998:web:74417a43991db3ec9d963f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

