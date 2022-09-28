import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`Error: ${errorCode}\nError massage: ${errorMessage}`);
        });
};

export default auth;
