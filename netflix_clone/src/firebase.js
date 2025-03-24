
import { initializeApp } from "firebase/app";

import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";



const firebaseConfig = {
  apiKey: "AIzaSyCPjpP07WoBWhdKH3IMae68NmiyDgtQL4Y",
  authDomain: "netflix-clone-1e63f.firebaseapp.com",
  projectId: "netflix-clone-1e63f",
  storageBucket: "netflix-clone-1e63f.firebasestorage.app",
  messagingSenderId: "433398608860",
  appId: "1:433398608860:web:f56b83da76e02270ac9519",
  measurementId: "G-VFDB2JJ0PE"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app)



const signup= async(name,email,password)=>{
    try {
        const response = await createUserWithEmailAndPassword(auth,email,password);
        const user= response.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email
        })
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split("-").join(" "));
    }
};

const login =async (email,password)=>{
    try {
      await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split("-").join(" "));
    }
};

const logout=()=>{
    signOut(auth)
}

export{
    auth,
    db,
    signup,
    login,
    logout
}