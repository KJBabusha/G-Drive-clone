
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyATNeuSr0_7Gs5Vhkw3OsDvKb8UzlkgUhA",
  authDomain: "g-drive-clone-363d8.firebaseapp.com",
  projectId: "g-drive-clone-363d8",
  storageBucket: "g-drive-clone-363d8.firebasestorage.app",
  messagingSenderId: "113896485802",
  appId: "1:113896485802:web:b9d88ca3abd9a8263171d3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
