import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCt8oJB95jT75wSWca7C83Xejfnd2f38h0",
    authDomain: "auth-bf467.firebaseapp.com",
    projectId: "auth-bf467",
    storageBucket: "auth-bf467.appspot.com",
    messagingSenderId: "106719792200",
    appId: "1:106719792200:web:8556d181a66a34be25dc7d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            localStorage.setItem('name', result.user.displayName);
            localStorage.setItem('email', result.user.email);
            localStorage.setItem('picture', result.user.photoURL);
            window.location.href = '/'
        })
        .catch((error) => {
            console.log(error)
        })
}

export const googleSignout = () => {
    signOut(auth).then(() => {
        localStorage.removeItem('name')
        localStorage.removeItem('email')
        localStorage.removeItem('picture')
        window.location.href = '/'
    }).catch((error) => {
        console.log(error)
    })
}
