import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB1TaQ9ojwRh8Fteb27z9IpHKW1DSbBeNc",
  authDomain: "budgetbuddy-b1896.firebaseapp.com",
  projectId: "budgetbuddy-b1896",
  storageBucket: "budgetbuddy-b1896.firebasestorage.app",
  messagingSenderId: "521354187337",
  appId: "1:521354187337:web:933505658db8b2ead76598",
  measurementId: "G-46TN0HZN9G"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); // ✅ Firestore DB

if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) {
      getAnalytics(app);
    }
  });
}

