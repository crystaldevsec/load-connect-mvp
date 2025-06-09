// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCaw62IDbzJyr9CH5a89r5EuinP8qA2wMo",
  authDomain: "loadconnect-ae194.firebaseapp.com",
  projectId: "loadconnect-ae194",
  storageBucket: "loadconnect-ae194.firebasestorage.app",
  messagingSenderId: "91043629998",
  appId: "1:91043629998:web:74417a43991db3ec9d963f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
