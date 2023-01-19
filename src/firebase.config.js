import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBLx_1-M_StpHbh6JOkd38TndaKFyYl2lg',
  authDomain: 'house-marketplace-app-806aa.firebaseapp.com',
  projectId: 'house-marketplace-app-806aa',
  storageBucket: 'house-marketplace-app-806aa.appspot.com',
  messagingSenderId: '995712786092',
  appId: '1:995712786092:web:04c203d4868ac635188909',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
