import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-Nsjb_VnU039uWKQuS3hZE4zV3Sp7h9g",
    authDomain: "fuego-sagrado-online.firebaseapp.com",
    projectId: "fuego-sagrado-online",
    storageBucket: "fuego-sagrado-online.appspot.com",
    messagingSenderId: "966491217915",
    appId: "1:966491217915:web:312a8af41b7d77cf13f55e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const analytics = getAnalytics(app);
// export default db;