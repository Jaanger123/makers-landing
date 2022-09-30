import app from './firebaseClient';
import { getFirestore, collection, getDoc } from 'firebase/firestore';

export const db = getFirestore(app);

const registerUser = async (coll, data, docName) => {
    const collectionRef = collection(this.db, coll);
    const docRef = doc(this.db, coll, docName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return null;
    }
    await setDoc(doc(collectionRef, docName), data);
    return data;
};
