import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

let auth;
let firestore;
const APILink = import.meta.env.VITE_APILink

const getFirebaseConfig = async () => {
  try {
    const response = await fetch(`${APILink}/firebaseData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // You can include any data needed for the server to process the request (if required)
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Firebase configuration.');
    }

    const firebaseConfig = await response.json();
    return firebaseConfig;

    // Call the function to initialize Firebase with the received config
  } catch (error) {
    console.error('Error fetching Firebase configuration:', error);
  }
};

// Initialize Firebase
const initializeFirebase = async () => {
  try {
    const firebaseConfig = await getFirebaseConfig();
    const app = initializeApp(firebaseConfig);
     auth = getAuth(app);
     firestore = getFirestore(app);

    // Export the initialized Firebase instances
  } catch (error) {
    console.error('Error initializing Firebase:', error);
  }
};

// Call the function to initialize Firebase
initializeFirebase();
export { auth, firestore };
