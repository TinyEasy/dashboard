// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7rmDb7OpigauGdJr9dWlqVPBQGJzAMVQ",
  authDomain: "d-tiny-house-designer.firebaseapp.com",
  projectId: "d-tiny-house-designer",
  storageBucket: "d-tiny-house-designer.appspot.com",
  messagingSenderId: "881264911503",
  appId: "1:881264911503:web:e3c5fa97fc7bcf32a43cfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;