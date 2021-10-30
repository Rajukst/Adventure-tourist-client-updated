import { GoogleAuthProvider,signInWithPopup, getAuth, onAuthStateChanged,signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import initFirebase from "../Firebase/firebase.init";

initFirebase()
const useFirebase=()=>{
    const [user, setUser]= useState({})
    const auth= getAuth()
    const provider=  new GoogleAuthProvider()

    const signWithGoogle=()=>{
       return signInWithPopup(auth, provider)
        
    }
    const logOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
        })
    },[])
    return{
        user,
        signWithGoogle,
        logOut

    }
}
export default useFirebase;