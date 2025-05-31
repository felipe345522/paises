// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 👈 Necesario para Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBKvjMYIUkbpFW-y12JmW72i03jdXSBUmQ",
  authDomain: "paises-9a427.firebaseapp.com",
  projectId: "paises-9a427",
  storageBucket: "paises-9a427.firebasestorage.app",
  messagingSenderId: "881018269981",
  appId: "1:881018269981:web:b95683bb37079175efb1f4"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Instancias necesarias
const auth = getAuth(app);
const db = getFirestore(app); // 👈 crea la instancia de Firestore

// Exportar
export { auth, db };