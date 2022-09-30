import app from './firebaseClient';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export const db = getFirestore(app);
