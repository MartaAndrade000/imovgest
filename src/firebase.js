import {initializeApp} from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    updateProfile
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";
import {useNavigate} from "react-router-dom";


const firebaseConfig = {
    apiKey: "AIzaSyCBuR0vLd233GPBGNNAI3vdH8TFypYHkzQ",
    authDomain: "imovgest-d3835.firebaseapp.com",
    projectId: "imovgest-d3835",
    storageBucket: "imovgest-d3835.appspot.com",
    messagingSenderId: "313962440352",
    appId: "1:313962440352:web:7dc6f4d35049fe53114bc5",
    measurementId: "G-FZV63DNE2F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(res.user, {displayName: name})
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.log(JSON.stringify(err))
        throw err;
    }
};

const logout = async () => {
    await signOut(auth);
};

export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
};