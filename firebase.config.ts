import { 
  firebaseAPIKey, 
  firebaseAppID, 
  firebaseAuthDomain, 
  firebaseMeasurementID, 
  firebaseMessagingSenderID, 
  firebaseProjectID, 
  firebaseStorageBucket 
} from "@/sanity/env";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: firebaseAPIKey,
  authDomain: firebaseAuthDomain,
  projectId: firebaseProjectID,
  storageBucket: firebaseStorageBucket,
  messagingSenderId: firebaseMessagingSenderID,
  appId: firebaseAppID,
  measurementId: firebaseMeasurementID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore instance
const db = getFirestore(app);

// Storage instance
const storage = getStorage(app); 

export { db, storage };
export default app;
