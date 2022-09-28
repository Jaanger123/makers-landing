import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyDRQ9XWaTABcC-MtttC_qv8CZSMMqLW_Vg',
    authDomain: 'landing-w-authentication.firebaseapp.com',
    projectId: 'landing-w-authentication',
    storageBucket: 'landing-w-authentication.appspot.com',
    messagingSenderId: '611763680423',
    appId: '1:611763680423:web:9ef90aee85bb71f2961782',
    measurementId: 'G-D5NX8XV6TN',
};

const app = initializeApp(firebaseConfig);

export default app;
